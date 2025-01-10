fetchingData(
  `https://gnews.io/api/v4/search?q=india&max=100&apikey=ba9d75a835070e955b5d04e139e782d1`
);

newsInput = document.querySelector(".newsForm input");
newsContainer = document.querySelector(".news-container");
sideBarContainer = document.querySelector(".sideBarContainer");
newsFormButton = document.querySelector(".newsForm button");
var body = document.querySelector("body");
// console.log(body)
var loading = document.querySelector(".loading");
// loadingRes = loading.display.style = "block";
// loadingValue = true;
// loadingValue === true
//   ? (loading.display.style = "block")
//   : (loading.display.style = "none");

newsFormButton.addEventListener("click", function (e) {
  loading.style.display = "flex";

  body.style.overflow = "hidden";

  console.log(body)
  e.preventDefault();
  newsInputValue = newsInput.value;
  fetchingData(
    `https://gnews.io/api/v4/search?q=${newsInputValue}&max=100&apikey=ba9d75a835070e955b5d04e139e782d1`
  );
  displayNews(data);
});

async function fetchingData(url) {
  // loadingValue = true;
  // console.log(loadingValue);
  console.log("fetching");
  response = await fetch(url);
  console.log("fetched");
  data = await response.json();
  displayNews(data);
  sideBarContent(data);
  loading.style.display = "none";
  body.style.overflow = "auto";
  // loadingValue = false;
  // console.log(loadingValue);
}

function displayNews(data) {
  dataVal = data.articles;
  newsContainer.innerHTML = "";
  for (const key in dataVal) {
    newsStr = ` <div class="newsBox">
                            <img src='${dataVal[key].image}' />
                            <div class="newsBox-content">
                                <h4>${dataVal[key].title}</h4>
                                <p>${dataVal[key].content}</p>
                                <div class="news-info">
                                    <p><strong>Pusblished:</strong>${dataVal[key].publishedAt}</p>
                                    <p><a href="${dataVal[key].source.url}"><strong>Source: </strong>${dataVal[key].source.name}</p></a></div>
                                <div class="full-news"><a href="${dataVal[key].url}">Read More</a></div>
                            </div>
                        </div>`;
    newsContainer.innerHTML += newsStr;
  }
}

function sideBarContent(data) {
  dataVal = data.articles;
  sideBarContainer.innerHTML = "";
  for (const key in dataVal) {
    newsStr = `  <a href="${dataVal[key].url}" class="smallNewsBox">
                                <div class="newsImgBox">
                                    <img src='${dataVal[key].image}' alt="">
                                </div>
                                <div class="smallContent">
                                    <h5>${dataVal[key].title}</h5>
                                <p>${dataVal[key].content}</p>
                                </div>
                            </a>`;
    sideBarContainer.innerHTML += newsStr;
  }
}
