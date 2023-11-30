alert("Want to find the temperature of your city? Click Ok and Let's find out");

const cityName = document.getElementById("city-name");
const city = document.getElementById("location");
const button = document.getElementById("button");
const temp = document.getElementById("temp");

const getData = async function () {
  const weatherData = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=6e5656a481760b3ad449ab4fa4fa0cce`
  );
  const data = await weatherData.json();
  console.log(data);
  cityName.innerText = data.name;
  temp.innerText = data.main.temp;
};

button.addEventListener("click", getData);

function gotLocation(position) {
  const head = document.createElement("h1", { id: "yo" });
  const cont = document.getElementById("container");
  cont.appendChild(head);
  head.innerText = position.coords.latitude;
}
function failedToGet() {
  console.log("There is some permission issue");
}

const nav = document.getElementById("nav");
nav.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(gotLocation, failedToGet);
});
