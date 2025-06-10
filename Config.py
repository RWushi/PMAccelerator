import os
import psycopg2
from psycopg2 import extras
from dotenv import load_dotenv
from flask import Flask

load_dotenv()

app = Flask(__name__)
app.secret_key = os.getenv("SECRET_KEY")


DATABASE_CONFIG = {
    'host': os.getenv("DB_HOST"),
    'database': os.getenv("DB_NAME"),
    'user': os.getenv("DB_USER"),
    'password': os.getenv("DB_PASS"),
    'port': os.getenv("DB_PORT")
}


def create_connection():
    return psycopg2.connect(**DATABASE_CONFIG)


class DB:
    def __enter__(self):
        self.conn = psycopg2.connect(**DATABASE_CONFIG)
        self.cursor = self.conn.cursor(cursor_factory=psycopg2.extras.DictCursor)
        return self.cursor

    def __exit__(self, exc_type, exc_value, traceback):
        if exc_type is None:
            self.conn.commit()
        self.cursor.close()
        self.conn.close()

from geopy.geocoders import Nominatim


geolocator = Nominatim(user_agent="app")
