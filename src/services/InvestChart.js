import {
  useInvestChartApi,
  useInvestChartLongPolling,
} from "../hooks/useInvestChart.js";

let previousData = [];

// HTML 테이블의 tbody 요소
const tbody = document.getElementById("stock-table-body");
const buttons = document.querySelectorAll(".chart-btn");

// 테이블 렌더링 함수
function renderTable(data) {
  const previousOrder = previousData.map((item) => item.name);
  const currentOrder = data.map((item) => item.name);

  // 기존 행 삭제
  tbody.innerHTML = "";

  // 새 데이터 추가
  data.forEach((item, index) => {
    const tr = document.createElement("tr");
    tr.classList.add("fade-in");

    tr.innerHTML = `
        <td class="negative">★</td>    
        <td>${item.name}</td>
        <td>${item.currentPrice}</td>
        <td class="${item.change[0] == "+" ? "positive" : "negative"}">${
      item.change
    } (${item.percentage})</td>
        <td>${item.transactionAmount}</td>
        <td>${item.volume}</td>
    `;

    tbody.appendChild(tr);

    // 순위 이동 애니메이션
    if (previousOrder.includes(item.name)) {
      const previousIndex = previousOrder.indexOf(item.name);
      const movement = previousIndex - currentOrder.indexOf(item.name);
      if (movement !== 0) {
        tr.style.transform = `translateY(${movement * 50}px)`;
        setTimeout(() => (tr.style.transform = "translateY(0)"), 50);
      }
    }
  });

  // 이전 데이터 업데이트
  previousData = [...data];
}

buttons.forEach((button) => {
  button.addEventListener("click", async () => {
    // 모든 버튼의 활성 상태 초기화
    buttons.forEach((btn) => btn.classList.remove("active"));

    // 클릭된 버튼 활성화
    button.classList.add("active");

    // 데이터 타입 가져오기
    const dataType = button.textContent.trim(); // 예: "실시간", "1일", "1주일", "1개월"

    // API URL 수정
    let apiUrl = INITIAL_API_URL; // 기본 URL
    switch (dataType) {
      case "실시간":
        apiUrl = "http://192.168.0.79:3000/chart";
        break;
      case "1일":
        apiUrl = "http://192.168.0.79:3000/chart";
        break;
      case "1주일":
        apiUrl = "http://192.168.0.79:3000/chart";
        break;
      case "1개월":
        apiUrl = "http://192.168.0.79:3000/chart";
        break;
    }

    // API 호출
    try {
      const { data, error } = await useInvestChartApi(apiUrl);
      if (error) {
        console.error("API 호출 오류:", error);
      } else if (data) {
        renderTable(data);
      }
    } catch (err) {
      console.error("알 수 없는 오류 발생:", err);
    }
  });
});

// 배열을 랜덤으로 섞는 함수
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// // 초기 설정
const INITIAL_API_URL = "http://192.168.0.79:3000/chart";
// const REQUEST_DELAY = 3000; // 3초 간격으로 요청
// updateTable(INITIAL_API_URL, REQUEST_DELAY);

function handleDataUpdate({ data, error }) {
  if (error) {
    console.log(error);
    return;
  }
  if (data) {
    const shuffledData = shuffleArray(data);
    renderTable(shuffledData);
  }
}
useInvestChartLongPolling(INITIAL_API_URL, handleDataUpdate, 2000);
