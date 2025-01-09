import { getIndices, getNews } from "./api.js";

// 1. 주가지수 (indices)
function displayIndices(indices) {
  const marketSummary = document.querySelector(".market-summary");

  indices.forEach((index, i) => {
    const card = marketSummary.children[i];
    if (card) {
      const nameElement = card.querySelector("h3");
      const priceElement = card.querySelector(".price");
      const changeElement = card.querySelector(".change");

      if (nameElement) nameElement.firstChild.textContent = index.name;
      if (priceElement) priceElement.textContent = index.value;
      if (changeElement) {
        changeElement.textContent = `${index.change >= 0 ? "" : ""}${
          index.change
        } (${index.percentage})`;
        changeElement.className = `change ${
          index.change >= 0 ? "positive" : "negative"
        }`;
      }
    }
  });
}

async function loadIndices() {
  try {
    const indices = await getIndices();
    if (Array.isArray(indices) && indices.length > 0) {
      displayIndices(indices);
    } else {
      throw new Error("유효하지 않은 주가지수 데이터");
    }
  } catch (error) {
    console.error("주가지수 데이터 가져오기 실패:", error);
  }
}

// 2. 뉴스 (news)
function displayNews(news) {
  const newsGrid = document.querySelector(".news-grid");

  news.forEach((item, i) => {
    const newsItem = newsGrid.children[i];
    if (newsItem) {
      const titleElement = newsItem.querySelector("p");
      const timeSourceElement = newsItem.querySelector("span");

      if (titleElement) titleElement.textContent = item.title;
      if (timeSourceElement)
        timeSourceElement.textContent = `${item.time} · ${item.source}`;
    }
  });
}

async function loadNews() {
  try {
    const news = await getNews();
    if (Array.isArray(news) && news.length > 0) {
      displayNews(news);
    } else {
      throw new Error("유효하지 않은 뉴스 데이터");
    }
  } catch (error) {
    console.error("뉴스 데이터 가져오기 실패:", error);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadIndices();
  loadNews();
});
