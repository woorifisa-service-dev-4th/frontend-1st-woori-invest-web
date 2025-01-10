## 💻 우리 투자 증권 UI 개선

## 🎥 Demo

https://github.com/user-attachments/assets/e0a20c45-e2c6-4b8d-a6d1-a27c637c8032

<img src="https://github.com/user-attachments/assets/a32e8f83-f738-4ee3-8d16-70fd39303ce4">


## 👨🏻‍💻 Implement

> **@keyframes 애니메이션 적용**

<img width="513" alt="image" src="https://github.com/user-attachments/assets/d7e60970-4c62-4748-85f7-29a1aad8aefd" />

> **SVG 태그를 활용한 그래프 구현**

<img width="509" alt="image" src="https://github.com/user-attachments/assets/2405cfaa-7c6b-4213-99eb-ba0cb40552df" />

## 💁🏻 Team
|                                                             **황유환**                                                              |                                                                  **조현식**                                                                  |                                                                       **황혜영**                                                                       |                                                                  **조윤주**                                                                  | 
|:--------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| [<img src="https://avatars.githubusercontent.com/u/87745916?v=4" height=100 width=100> <br/> @yxhwxn](https://github.com/yxhwxn) | [<img src="https://avatars.githubusercontent.com/u/78861124?v=4" height=100 width=100> <br/> @1223v](https://github.com/1223v) | [<img src="https://avatars.githubusercontent.com/u/114129207?v=4" height=100 width=100> <br/> @HyeYoung-Hwang](https://github.com/GyuHyeokjjookki) | [<img src="https://avatars.githubusercontent.com/u/155442976?v=4" height=100 width=100> <br/> @iamyuunzo](https://github.com/iamyuunzo) 


## 🏢 Convention

### 💁 Commit Example
- `Feat: Add user authentication`
- `Fix: Resolve null pointer exception`
- `Docs: Update installation guide`

| Tag Type   | content                       |
|------------|-------------------------------|
| `Feat`     | 기능(feature)                   |
| `Docs`     | 문서 작업 (documentation)         |
| `Fix`      | 버그 수정                         |
| `Hotfix`   | 긴급 버그 수정                      |
| `Refactor` | 코드 리팩터링(가독성 향상)               |
| `Chore`    | 관리(maintain), 핵심 내용은 아닌 기타 변경 |


## 🎯 **협업을 위한 CSS 컨벤션 가이드라인**

CSS 협업을 효율적으로 하기 위해서는 일관성 있고 이해하기 쉬운 코드 스타일이 중요합니다. 아래는 대표적인 CSS 컨벤션과 모범 사례입니다.

## 📚 **CSS 작성 스타일 가이드**

 <br/>

### ✅ **1. 파일 구조**

- **디렉터리 구조 예시:**

```
/styles
│── base/         /* 초기화, 공통 스타일 */
│── components/   /* 버튼, 카드, 모달 등 컴포넌트 */
│── layouts/      /* 레이아웃 관련 스타일 (헤더, 푸터, 그리드) */
│── pages/        /* 페이지별 스타일 */
│── themes/       /* 다크모드, 라이트모드 등 테마 */
│── utils/        /* 유틸리티 클래스 */
│── main.css      /* 모든 CSS 파일을 불러오는 메인 파일 */
```

---

### ✅ **2. 명명 규칙**

- **Block**: 독립적인 컴포넌트  
- **Element**: 블록의 일부인 자식 요소  
- **Modifier**: 블록 또는 요소의 변형  

**예시:**
```css
/* Block */
.button {
    padding: 10px;
    background-color: #0078d4;
}

/* Element */
.button__icon {
    margin-right: 5px;
}

/* Modifier */
.button--primary {
    background-color: #1abc9c;
}
```

**HTML 예시:**
```html
<button class="button button--primary">
    <span class="button__icon">🔍</span>
    Search
</button>
```

---

### ✅ **3. 코드 포맷팅**
#### [ESLint]와 [Prettier]를 활용해 협업 코드 스타일 통일

1. **들여쓰기:** 2 또는 4 스페이스(팀 규칙에 맞춤)  
2. **대괄호:** 여는 ` { `는 속성 블록 바로 뒤에 위치  
3. **속성 정렬:** 속성은 논리적 순서로 정렬  

**좋은 예:**
```css
.button {
    display: inline-block;
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: #0078d4;
    border-radius: 4px;
}
```

---

### ✅ **4. 주석**

1. **섹션 주석:**
```css
/* ========================================
   COMPONENT: BUTTON
======================================== */
```

2. **설명 주석:**
```css
/* Primary button for call-to-action */
.button--primary {
    background-color: #1abc9c;
}
```


### ✅ **5. 폰트**

- 프로젝트에 사용되는 폰트는 `@import`를 통해 외부 스타일시트를 불러와 사용합니다.  
- **폰트 임포트 예시:**

```css
@import url("https://static.toss.im/tps/main.css");
@import url("https://static.toss.im/tps/others.css");
```

- **폰트 적용 예시:**
```css
body {
    font-family: 'Tossface', sans-serif;
}
```


### ✅ **6. 컬러 가이드라인**

| **색상 이름**      | **HEX 코드** | **용도**               |
|-------------------|-------------|------------------------|
| **기본 배경색**    | `#f9fafc`   | 페이지 및 섹션 배경     |
| **기본 텍스트 색상**| `#000`      | 기본 텍스트            |
| **서브 텍스트 색상**| `#555`      | 보조 텍스트            |
| **강조 색상**      | `#0078d4`   | 버튼 및 주요 링크      |
| **강조 색상 (진한)**| `#1abc9c`   | 주요 강조 요소         |
| **음수 강조 색상** | `#d32f2f`   | 하락 데이터 및 알림    |
| **양수 강조 색상** | `#1976d2`   | 상승 데이터 및 알림    |
| **보조 강조 색상** | `#4caf50`   | 활성화 상태            |
| **비활성 색상**   | `#bbb4b4`   | 비활성화 요소          |
| **카드 배경색**    | `#f2f4f6`   | 카드 및 블록 배경      |
| **경계선 색상**    | `#e0e0e0`   | 섹션 구분선 및 경계    |
| **보조 배경색**    | `#f5f5f5`   | 필터 및 버튼 배경      |
| **서브 텍스트 색상**| `#8b95a1`   | 서브 메뉴 텍스트       |
| **차트 강조 색상** | `#3182f6`   | 차트 주요 데이터 포인트 |

---

### 🎨 **색상 사용 예시**

```css
body {
  background-color: #f9fafc;
  color: #000;
}

.menu-item.active {
  border-bottom: 3px solid #000;
}

.rate-change.positive {
  color: #d32f2f;
}

.rate-change.negative {
  color: #1976d2;
}

.footer {
  background-color: #f9fafc;
  border-top: 1px solid #e0e0e0;
}
```


## 🏢 LightHouse
![image](https://github.com/user-attachments/assets/f5143a2d-e46f-48bb-b14f-7375f96b5641)

- 이미지 태그에 lazy loading을 추가 후 랜더링 최적화를 함으로써 이미지 디코딩을 비동기적으로 하도록 추가하여 성능을 향상시켰습니다.
- toss 폰트를 외부에서 import 함으로써 서드파티 를 사용하는점에서 추가적 개선 사항으로 폰트 파일을 zip으로 받아 외부에 의존하지 않도록 고려하고 있습니다.
- meta 태그의 description, keyword, content를 추가하여 웹접근성을 향상.
- 저시력자들이 사용하는 스크린리더가 잘 구동할 수 있도록 img 태그 등에 필수적으로 alt, aria-** 속성으로 설명 추가
