from flask import render_template, request, session, jsonify
from Weather import (geocode_city as gc, geocode_zip as gz, coords_city as cc,
                     zip_city as zc, get_weather as gw)
from History import update_history as uh, get_history as gh
from Config import app


@app.route('/', methods=['GET', 'POST'])
def weather():
    if request.method == 'POST':
        search_type = request.form.get('search_type', 'city')
        if search_type == 'city':
            city = request.form['city']
            coords = gc(city)
        elif search_type == 'coordinates':
            coords = request.form['lat'], request.form['lon']
            city = cc(*coords)
        elif search_type == 'zip':
            zip, country = request.form['zip'], request.form['country']
            city = zc(zip, country)
            coords = gz(zip, country)

        if coords:
            weather_data = gw(coords)
            session['last_city'] = city
            uh(city)
        else:
            return render_template('wrong_city.html')

        daily_data = weather_data.get('daily', {})
        return render_template('result.html', city=city, weather=daily_data)

    last_city = session.get('last_city', None)
    return render_template('city.html', last_city=last_city)


@app.route('/history', methods=['GET'])
def send_history():
    history = gh()
    return jsonify(history)


@app.route('/about_me', methods=['GET'])
def about():
    return render_template('about_me.html')


if __name__ == '__main__':
    app.run(host="0.0.0.0", debug=False)
