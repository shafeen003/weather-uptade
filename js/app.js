const API_KEY = `ade26e6b93bd4c0617a55845abe8819b`;

const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = tempareture => {
    console.log(tempareture);
    setInnerText('city', tempareture.name);
    setInnerText('temperature', tempareture.main.temp);
    setInnerText('condition', tempareture.weather[0].main);
    // set weather icon 
    const url = `https://openweathermap.org/img/wn/${tempareture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}
