# Wanted[FE] Pre onboarding Assignment

[바로가기 ✈️](https://wanted-pre-onboarding-fe.vercel.app/login)

## Introduce

방분해 주셔서 감사합니다.  
저는 작년 6월부터 FE 개발자를 독학으로 준비하고 있습니다.  
아직 많이 부족하지만 이번 기회를 통해 좋은 멘토, 동료 분들과 함께 성장 하고자 지원하게 되었습니다. 감사합니다 :)

- - -
## 작업기간 
```
22.06.21 - 22.06.25
```
---

## Directory

### src

```
 ┣ 📂 components
 ┃ ┣ 📂 LogIn
 ┃ ┣ 📂 Main
 ┃ ┗ 📂 common
 ┣ 📂 constants
 ┣ 📂 hooks
 ┣ 📂 pages
 ┣ 📂 styles
 ┣ 📂 util
 ┣ 📜 App.js
 ┗ 📜 index.js
```

---

## Execution

```
npm install

npm start
```

## User Dummy Data

```
email: qqq@naver.com
pw   : qqq111Q!
```

---

## Stack

`React.JS`, `styled-components`, `react-router-dom`

---

## Task

```
과제의 요구사항에 맞게 구현하기 위해 노력하였습니다.
반복되는 코드들은 util, styles, hooks 폴더로 분리 하여 재사용 하였습니다.
```

### Login

- 구현
  - [x] 로그인 컴포넌트 (`input` 2개, `button` 1개)
  - [x] Local Storage에 로그인 정보 저장
- 렌더링 최적화

  - [x] 개별 컴포넌트로 분리하여 입력시 Signin 컴포넌트만 렌더링 됨

### GNB

- 구현
  - [x] GNB `sticky`
  - [x] 반응형 GNB로그인시 input 제거)
  - [x] 가장 오른쪽 아이콘 Logout으로 변경

### Validation

- 이메일과 비밀번호 유효성 확인
  - [x] 정규표현식 사용
  - [x] 이메일 조건: `@` , `.` 포함
  - [x] 비밀번호 조건: 대문자, 숫자, 특수문자 포함 8자리 이상
  - [x] 등록된 email, pw 일치시 main 페이지 이동
- Validation 상태를 CSS로 표현
  - [x] email형식 아닌 경우 border: red
  - [x] pw형식 아닌 경우 border: red
  - [x] validation 통과시 로그인 button 색상 변경

### Routing

- 로그인 성공
  - [x] main 페이지로 이동
- 로그아웃 시
  - [x] login페이지로 이동

### Feeds

- 구현
  - [x] 피드 컴포넌트를 개발
  - [x] Feed에 comment 작성 기능
  - [x] 반응형
  - [x] comment submit시 input 초기화
  - [x] 각기 다른 사이즈의 이미지 대응
- Feed 데이터 위치
  - [x] public/data
- 데이터 형식
  - [x] json
- Imgae 로딩 후 컴포넌트 렌더링
  - [x] blob을 사용하여 구현
