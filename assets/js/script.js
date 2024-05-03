fetchData = document.getElementById("fetchData");
printingData = document.querySelector(".weather-box-tranparent");
weatherCity = document.querySelector("#weatherCity");
temp = document.querySelector(".temp");
loading = document.querySelector(".loading");
forecastContent = document.querySelector(".forecastContent");
apiKey = "871955f724cb42c171f5a6bd8a9bc032";
const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
gettingDate = new Date();
gettingYear = gettingDate.getFullYear();
gettingDay = gettingDate.getDate();
gettingMonth = month[gettingDate.getMonth()];

fetchData.addEventListener("click", async function (e) {
  e.preventDefault();
  cityValue = weatherCity.value;
  // loading.style.display = "block";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`;
  response = await fetch(url);
  data = await response.json();
  // loading.style.display = "none";

  console.log(data);

  tempAvaliable = document.querySelector(".tempAvaliable");

  if (data.cod == "404") {
    console.log("not worked");
    temp.classList.remove("temp");
    printStr = `<p class="date"><span>Date</span><span><span>${gettingDay}</span><span>${gettingMonth}</span><span>${gettingYear}</span></span></p>
    <p>city not found!</p>`;
  } else {
    console.log("worked");
    printStr = `<p class="location"><span>Location</span> <span>${cityValue}</span></p>
              <p class="date"><span>Date</span><span><span>${gettingDay}</span><span>${gettingMonth}</span><span>${gettingYear}</span></span></p>
              <p class="temperature"><span>Temperature</span>
              <span class="temp">${data.main.temp}</span></p>
            <p class="wind"><span>Wind Speed</span> <span>${data.wind.speed}/km</span></p>`;
  }

  printingData.innerHTML = printStr;
});

// forecast data

// function lonLat(data) {
//   fetingData(
//     `http://api.openweathermap.org/geo/1.0/direct?q=jalandhar,&appid=${apiKey}`
//   );
//   console.log(data[0].lat);
//   withLatLon = `https://api.openweathermap.org/data/2.5/forecast?lat=31.3323762&lon=75.576889&appid=${apiKey}&units=metric`;
//   fetingData(withLatLon);
// }
// lonLat();

// async function fetingData(url) {
//   response = await fetch(url);
//   data = await response.json();
//   console.log(data);
// }

// 1st = http://api.openweathermap.org/geo/1.0/direct?q=jalandhar,&appid=871955f724cb42c171f5a6bd8a9bc032

// 2nd= https://api.openweathermap.org/data/2.5/forecast?lat=31.3323762&lon=75.576889&appid=871955f724cb42c171f5a6bd8a9bc032&units=metric;
