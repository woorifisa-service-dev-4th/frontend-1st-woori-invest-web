## 💻 우리 투자 증권 UI 개선

## 💁🏻 Team
|                                                             **황유환**                                                              |                                                                  **조현식**                                                                  |                                                                       **오규혁**                                                                       |                                                                  **김은진**                                                                  | 
|:--------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------------------------------------------------:|
| [<img src="https://avatars.githubusercontent.com/u/87745916?v=4" height=100 width=100> <br/> @yxhwxn](https://github.com/yxhwxn) | [<img src="https://avatars.githubusercontent.com/u/78861124?v=4" height=100 width=100> <br/> @1223v](https://github.com/1223v) | [<img src="https://avatars.githubusercontent.com/u/112180318?v=4" height=100 width=100> <br/> @GyuHyeokjjookki](https://github.com/GyuHyeokjjookki) | [<img src="https://avatars.githubusercontent.com/u/114724403?v=4" height=100 width=100> <br/> @Eunjin3395](https://github.com/Eunjin3395) 

## 🏢 Convention

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

---

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
 <br/>
  <br/>

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
 <br/>
  <br/>

### ✅ **3. 코드 포맷팅**

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
 <br/>
  <br/>

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
