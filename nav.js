const stockName = document.getElementsByClassName("hy-detail-content-name");
const stockCurrentPrice = document.getElementsByClassName("hy-price-now");
const stockChangePrice = document.getElementsByClassName("hy-price-change");
const interest = document.getElementById("hy-interest");

const topStock = new XMLHttpRequest();
topStock.onload = () => {
  if (topStock.readyState == topStock.DONE && topStock.status === 200) {
    const responseData = JSON.parse(topStock.response);
    console.log(responseData[0]);
    console.log(responseData[0].currentPrice);

    for (let i = 0; i < responseData.length; i++) {
      stockName[i].textContent = responseData[i].name;
      stockCurrentPrice[i].textContent = responseData[i].currentPrice;
      if (responseData[i].change.includes("-")) {
        stockChangePrice[i].classList.add("hy-price-down");
      }
      stockChangePrice[
        i
      ].textContent = `${responseData[i].change}(${responseData[i].percentage})`;
    }
  }
};

const TOPSTOCK_URL = "http://192.168.0.79:3000/topStocks";

topStock.open("GET", TOPSTOCK_URL);
topStock.send();

interest.addEventListener("click", () => {
  console.log("click!!");
  //   if()
});
