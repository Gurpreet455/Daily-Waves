fetchingData(
  `https://gnews.io/api/v4/search?q=india&max=100&apikey=ba9d75a835070e955b5d04e139e782d1`
);

newsInput = document.querySelector(".newsForm input");
newsContainer = document.querySelector(".news-container");
sideBarContainer = document.querySelector(".sideBarContainer");
newsFormButton = document.querySelector(".newsForm button");
loading = document.querySelector(".loading");
newsFormButton.addEventListener("click", function (e) {
  e.preventDefault();
  newsInputValue = newsInput.value;
  fetchingData(
    `https://gnews.io/api/v4/search?q=${newsInputValue}&max=100&apikey=ba9d75a835070e955b5d04e139e782d1`
  );
  displayNews(data);
});

async function fetchingData(url) {
  response = await fetch(url);
  if (response.status >= 400) {
    console.log("not feched");
    loading.style.display = "block";
  } else {
    console.log("feched");
    data = await response.json();
    displayNews(data);
    sideBarContent(data);
    loading.style.display = "none";
  }

  //   console.log(data);
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
