import requests
from Config import geolocator


def geocode_city(city):
    location = geolocator.geocode(city)
    return (location.latitude, location.longitude) if location else None


def geocode_zip(zip, country):
    location = geolocator.geocode(f"{zip}, {country}")
    return (location.latitude, location.longitude) if location else None


def coords_city(lat, lon):
    location = geolocator.reverse(f"{lat}, {lon}", exactly_one=True)
    return location.address.split(",")[2].lstrip() if location else None


def zip_city(zip_code, country_code):
    location = geolocator.geocode(f"{zip_code}, {country_code}")
    return location.address.split(",")[2].lstrip() if location else None


def get_weather(coords):
    latitude, longitude = coords
    url = f'https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_probability_max,relative_humidity_2m_max,wind_speed_10m_max&timezone=Europe/Moscow'
    response = requests.get(url)
    if response.status_code == 200:
        return response.json()
    else:
        return None
