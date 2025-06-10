from Config import DB


def update_history(city):
    with DB() as cursor:
        cursor.execute("""
            INSERT INTO cities (city)
            VALUES (%s)
            ON CONFLICT (city) DO UPDATE
            SET quantity = cities.quantity + 1;
        """, (city,))


def get_history():
    with DB() as cursor:
        cursor.execute('SELECT * FROM cities')
        rows = cursor.fetchall()

    history = {row[0]: row[1] for row in rows}
    return history
