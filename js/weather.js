const API_KEY = "662ce6352360c5d355af6f4daf8e1e58"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&units=metric`
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const weather = document.querySelector("#weather span:first-child")
            const city = document.querySelector("#weather span:last-child")
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        })
}
function onGeoError() {
    alert("위치를 찾을 수 없음음")
};

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

