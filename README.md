# MingleAI-CES

MingleAI의 2024 CES 전시 데모 프로젝트입니다.

## 기술 스택

- Create-React-App(CRA)로 시작한 프로젝트입니다.
  - Eject 금지!
  - 추가로 사용하고 싶은 환경설정이 있다면 홍민기 연구원과 논의
- Node v20
- React v18
- react-router-dom v6

## 폴더 구조

- 기본적으로 각자 담당하는 모듈 폴더(ex - "src/modules/square")에서만 작업
- 공통적으로 사용할 수 있겠다 싶은 자료는 "common" 폴더 내 적절한 곳에 저장
- 이미지 파일과 로고 같은 리소스 파일은 "src/assets"에 저장
- api 인터페이스나 axios instance 등은 "src/apis"에 저장

## Git 주의사항

- 작업순서
  - 최신 dev 브랜치에서 작업할 브랜치(`[feature, bugFix, style]-[기능명]`) 생성
  - 작업한 브랜치를 dev 브랜치로 Merge Request (Assign은 셀프 또는 타인에게 부탁)
  - dev to main branch 머지는 홍민기 연구원이 진행
- 새로운 브랜치 생성 전, dev 브랜치로 머지하기 전에 항상 "git pull origin dev" 로 컨플릭트 발생하는지 체크하기
- 남의 코드 건들거나 덮어쓰지는 않았는지 항시 확인..!

## Scripts

### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
