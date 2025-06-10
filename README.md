# Weather Web App

This web application allows the user to enter a city name and receive a 5-day weather forecast including temperature, precipitation probability, humidity, and wind speed. If the input is invalid, an appropriate error message is returned.

## Notes

1) The statistics are stored in a database without using ORM, with raw SQL queries.  
2) I completed all basic requirements. I also implemented some optional ones — not because they were too hard or I couldn't do them, but because for this stage what I have seemed sufficient. First, I want to learn more about those features before investing more of my time and effort into them.  
3) I also added several extra features that weren’t even required — purely out of personal interest.

## Technologies Used

- Web framework: Flask  
- Weather API: [Open Meteo](https://open-meteo.com/)   
- Database: PostgreSQL (using a synchronous library)  
- Styling: CSS, custom design  
- Containerization: Docker

## Additional Features

- Search suggestions while typing  
- Remembering the last viewed city  
- Storing search history  
- An API endpoint (`/history`) for retrieving request statistics per city  
- The app is containerized using Docker  
- I also added a few personal stylistic touches — the same style I use across all my visual projects, including websites

## Running the App

1. Run `app.py` for local development.
2. If you need a public URL, use ngrok to expose it.
3. Send a GET request to `/history` to retrieve usage statistics.  
Example: `http://127.0.0.1:5000/history`  
You can use Postman or any HTTP client to send requests.