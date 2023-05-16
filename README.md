# 👨🏼‍⚖️ WineTrail


## 🙇‍♂️ contributors

- [👨🏻 김지형](https://github.com/jihyoung9912)

## 📄 Description

`Wine-Trail` 
현재 WSET Levle3 자격증 취득 과정 중에 있습니다.
수업 중, 학원 수강생 모두 각자의 노트를 가져와 테이스팅 노트를 작성합니다.
개인마다 느끼는 맛과 향이 섬세히 다르기에, 현재 고정된 작성 폼만을 제공하는 테이스팅 플랫폼들의 범용성이 떨어집니다.
이에 개인별로 커스텀이 가능한 노트를 제공하는 플랫폼을 만들고자 했습니다.

<!-- * `📑 발표자료:` https://drive.google.com/file/d/1Uwi3p94A6QNPQz38whTSGdtU1dAzWQ5T/view?usp=sharing  -->

## 🖥 Demo

<!-- * `📼 Live Demo video on Youtube:` <a href="https://www.youtube.com/watch?v=ackofamRNHc" target="\_blank">https://www.youtube.com/watch?v=ackofamRNHc </a> -->
* `📼 Live Site:` <a href="https://winetrail-fb2fc.web.app" target="\_blank">Wine-Trail </a>

## 🕸 Infrastructure

- Global State Management로 context api를 사용했습니다.
- reusable component를 위해 Common directory를 생성하여 추후 생성 예정 Component를 재사용할 예정입니다.
- Layout을 통해 Header, Footer, Global css 적용을 했습니다.
- constant 속 COLOR.ts를 통해 theme에 대한 효율적인 유지보수를 적용했습니다.
- Firebase 및 Firestore를 통해 구현했습니다.
- Firestore와의 효율적 통신을 위해 query를 통한 custom hook을 reusable하게 구현했습니다.




## 🎠 기능


#### 👩‍🌾 User

- [x] **회원 가입**
- [x] **Google Authorization**
- [x] **로그인**
- [x] **로그아웃**
- [ ] **회원 정보 수정**
- [ ] **회원 탈퇴**

#### 🧧 Wine Stories

- [x] **Wine 등록**
- [ ] **Wine 상세보기**
- [ ] **Wine 수정**
- [ ] **Wine 삭제**

#### 👨🏼‍⚖️ My Page

- [ ] **찜한 Wine List**
- [ ] **채팅** 

#### 🏆 Statistics

- [ ] **Wine List like Ranking**

## ❌ Probs & How we resolved 'em

🤔 처리해야 할 `상태`가 많아도 너무 많았다.
   1. 유저 정보
   2. 지속적으로 업데이트되는 서버로부터 받아오는 데이터
   3. 각각의 데이터들에 대한 pagination 정보
   4. etc....

💡 접근 방식: 
- `추후 개발 예정`


## 📀 Setup Locally


```bash
git clone https://github.com/jihyoung9912/WineTrail
yarn install
yarn start
```

## 📚 Used packages

    "@ant-design/icons": "4.0.0",
    "@emotion/react": "^11.10.0",
    "@emotion/styled": "^11.10.0",
    "@hookform/resolvers": "^2.9.6",
    "@material-ui/core": "^4.12.4",
    "@material-ui/lab": "^4.0.0-alpha.61",
    "@mui/icons-material": "^5.8.4",
    "@mui/joy": "^5.0.0-alpha.38",
    "@mui/lab": "^5.0.0-alpha.92",
    "@mui/material": "^5.9.2",
    "@tanstack/react-query": "^4.0.10",
    "@tanstack/react-query-devtools": "^4.0.10",
    "antd": "^4.22.5",
    "axios": "^0.27.2",
    "moment": "^2.29.4",
    "prettier": "^2.7.1",
    "react": "^17.0.2",
    "react-cookie": "^4.1.1",
    "react-dom": "^17.0.2",
    "react-dropzone": "^14.2.2",
    "react-hook-form": "^7.33.1",
    "react-hot-toast": "^2.3.0",
    "react-loadingg": "^1.7.2",
    "react-router-dom": "^6.3.0",
    "react-scripts": "^5.0.0",
    "react-slick": "^0.29.0",
    "recoil": "^0.7.4",
    "slick-carousel": "^1.8.1",
    "styled-components": "^5.3.5",
    "styled-reset": "^4.4.2",
    "yup": "^0.32.11"
