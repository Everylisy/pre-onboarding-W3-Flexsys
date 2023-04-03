## 원티드 프리온보딩 3주차

주어진 데이터를 기반으로 시계열 차트 페이지 구현

### [✔ 배포 링크](https://pre-onboarding-w3-flexsys.vercel.app)

**기술 스택**
* <img src="https://img.shields.io/badge/-Vite-646CFF?style=flat-square&logo=vite&logoColor=white"/> <img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/> <img src="https://img.shields.io/badge/-TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white"/>

* <img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/> <img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white">
 
* <img src="https://img.shields.io/badge/ApexCharts-2962FF?style=flat-square"/> <img src="https://img.shields.io/badge/styled--components-DB7093?style=flat-square&logo=styled-components&logoColor=white" />


<br/>

## 프로젝트 실행 방법

**react app**

```bash
npm i
npm run dev
```

**json-server**

```bash
npx json-server ./data.json --w
```
<br/>

## 요구사항

<img src="https://user-images.githubusercontent.com/86880916/225870287-3df177c5-1921-45e7-a759-c15b90399144.png" width="500"/>

<br/>

1. 시계열 차트 만들기
    - 주어진 JSON 데이터의 `key`값(시간)을 기반으로 시계열 차트를 만들어주세요
    - 하나의 차트안에 Area 형태의 그래프와 Bar 형태의 그래프가 모두 존재하는 복합 그래프로 만들어주세요
    - Area 그래프의 기준값은 `value_area` 값을 이용해주세요
    - Bar 그래프의 기준값은 `value_bar` 값을 이용해주세요
    - 차트의 Y축에 대략적인 수치를 표현해주세요(예시 이미지 참고)

2. 호버 기능 구현
    - 특정 데이터 구역에 마우스 호버시 `id, value_area, value_bar` 데이터를 툴팁 형태로 제공해주세요

3. 필터링 기능 구현
    - 필터링 기능을 구현해주세요, 필터링은 특정 데이터를 하이라이트 하는 방식으로 구현해주세요
    - 필터링 기능은 버튼 형태로 ID값(지역이름)을 이용해주세요
    - 필터링 시 버튼에서 선택한 ID값과 동일한 ID값을 가진 데이터 구역만 하이라이트 처리를 해주세요
    - 특정 데이터 구역을 클릭 시에도 필터링 기능과 동일한 형태로 동일한 ID값을 가진 데이터 구역을 하이라이트해주세요


<br/>
