const cities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego",
  "Dallas", "San Jose", "London", "Berlin", "Madrid", "Rome", "Paris", "Barcelona", "Amsterdam",
  "Istanbul", "Lisbon", "Milan", "Vienna", "Munich", "Zurich", "Geneva", "Brussels", "Copenhagen",
  "Oslo", "Helsinki", "Budapest", "Prague", "Bucharest", "Sofia", "Kyiv", "Moscow", "Saint Petersburg",
  "Dubai", "Abu Dhabi", "Riyadh", "Tel Aviv", "Seoul", "Tokyo", "Osaka", "Beijing", "Shanghai", "Hong Kong",
  "Shenzhen", "Singapore", "Sydney", "Melbourne", "Brisbane", "Vancouver", "Toronto", "Montreal",
  "Ottawa", "Los Cabos", "Mexico City", "Guadalajara", "Calgary", "Edmonton", "São Paulo", "Rio de Janeiro",
  "Buenos Aires", "Santiago", "Lima", "Quito", "Medellín", "Cartagena", "Asunción", "Recife",
  "Fortaleza", "Curitiba", "Belo Horizonte", "Salvador", "Portland", "Seattle", "Minneapolis", "Cleveland",
  "Cincinnati", "Nashville", "Raleigh", "Omaha", "San Juan", "Acapulco", "Malaga", "Valencia",
  "Seville", "Marseille", "Lyon", "Toulouse", "Strasbourg", "Grenoble", "Lille", "Bordeaux", "Nantes", "Rennes",
  "Caen", "Antwerp", "Ghent", "Ostend", "Tilburg", "Eindhoven", "Nîmes", "Montpellier", "Tours", "Clermont-Ferrand",
  "La Rochelle", "Frucht", "Padua", "Venice", "Savona", "Genoa", "Reggio Emilia", "Modena", "Sassari",
  "Palermo", "Naples", "Calabria", "Catania", "Rimini", "Cesena", "Siena", "Livorno", "Barletta",
  "Bari", "Campinas", "San Luis", "Campinas", "Londrina", "São José dos Campos", "Manaus",
  "Porto Alegre", "Florianópolis", "Goiânia", "Palmeira", "Piter", "Calgary", "Manchester",
  "Birmingham", "Liverpool", "Sheffield", "Nottingham", "Leicester", "Leeds", "Southampton", "Hull", "Cardiff",
  "Norwich", "Coventry", "Sunderland", "Derby", "Story", "Ulm", "Munich", "Leipzig", "Dresden",
  "Hamburg", "Würzburg", "Nuremberg", "Cologne", "Göttingen", "Magdeburg", "Regensburg", "Freiburg",
  "Bonn", "Rotterdam", "Utrecht", "Haarlem", "The Hague", "Essen", "Nijmegen", "Dordrecht", "Leiden",
  "Maasdam", "Hilversum", "Groningen", "La Rochelle", "Brest", "Tours", "Nancy", "Saint-Étienne",
  "Antalya", "Hangzhou", "Suzhou", "Venice", "Monte Carlo", "Ningbo", "Sanya", "Haikou", "Guangzhou", "Almaty", "Astana"];


async function fetchSuggestions() {
    const query = document.getElementById('city').value;
    if (query.length < 1) {
        document.getElementById('suggestions').style.display = 'none';
        return;
    }

    const filteredCities = cities.filter(city => city.toLowerCase().includes(query.toLowerCase()));
    const suggestionsBox = document.getElementById('suggestions');
    suggestionsBox.innerHTML = '';

    filteredCities.forEach(city => {
        const div = document.createElement('div');
        div.textContent = city;
        div.style.cursor = 'pointer';
        div.onclick = () => {
            document.getElementById('city').value = city;
            suggestionsBox.style.display = 'none';
        };
        suggestionsBox.appendChild(div);
    });

    suggestionsBox.style.display = 'block';
}
