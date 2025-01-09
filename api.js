// 1. 주가지수 api (indices)
export const getIndices = async () => {
  let indicesData;
  const url = "http://192.168.0.79:3000/indices";

  const options = {};

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      indicesData = data;
    });

  console.log(indicesData);

  return indicesData;
};

// 2. 뉴스 api (news)
export const getNews = async () => {
  let newsData;
  const url = "http://192.168.0.79:3000/news";

  const options = {};

  await fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      newsData = data;
    });

  console.log(newsData);

  return newsData;
};
