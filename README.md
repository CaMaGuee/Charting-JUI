# Charting-JUI
FEAT : 새로운 기능의 추가

○ FIX: 버그 수정

○ DOCS: 문서 수정

○ STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)

○ REFACTOR: 코드 리펙토링

○ TEST: 테스트 코트, 리펙토링 테스트 코드 추가

○ CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

****

# 가. 차트 모듈 개선 계획

## 가) 차트 모듈 개선 계획
   
○ 주어진 기간 동안의 온도 데이터를 정기적으로 차트에 반영함으로써, 
    시간대별 분석을 위한 리뷰 기능을 보완할 예정이다.

1. 특정 지역에 두 개 이상의 프로브 장치를 설치하는 경우, 차트를 통한 
     상호 비교가 가능하도록 한다. 
   
2. 차트 모듈의 사용성을 향상시키기 위해, 더 다양한 데이터 종류를 
     지원하도록 확장한다. 
   
3. 차트 모듈의 디자인을 개선하여 시각적으로 보기 좋고 직관적인 UI를 
     제공하도록 한다.

○ 차트 모듈의 기능과 안정성을 높이고, 사용성을 향상시킴으로써, 보다 
    효율적이고 정확한 데이터 분석을 가능케 할 것이다.

## 가) 차트 모듈 개선 계획 - 개요

### 제목 : Charting System Module 개발을 위한 BackLog 계획 개요

작성자 : 김찬솔 학생 연구원

작성 날짜 : 2023.07.07

#### 개요

##### 가. Charting System Module 요구사항
1) 정의 : ‘마이크로셀 커버리지 프로브장치‘의 온도 및 UV(일사량) 센서 
  데이터를 실시간 리뷰를 하기 위한 Charting System 개발
 
2) 목적 : 특정 지역에 여러 개의 프로브 장치를 설치한 사용자들이 차트 
  상호비교를 할 수 있도록, 차트 모듈의 사용성을 향상시키며 다양한 
  데이터 종류를 지원하고 디자인을 개선해 직관적인 UI를 제공하도록 
  하며, 차트 모듈의 기능과 안정성을 높여 더 효율적이고 정확한 데이터 
  분석이 가능

 
3) 진행 계획 : 
  
○ BackLog 작성 및 오픈소스 사용 매뉴얼 작성
  
○ Charting System에 필요한 데이터 수집 및 실시간 수집 코드 작성
  
○ 정적 데이터를 활용한 Chart 출력 코드 작성
  
○ 실시간 동적 데이터를 활용 가능한 Chart 출력 코드 수정
  
○ Chart 출력 코드 통합 및 인터페이스 코드 작성
  
○ 최종 분석 및 통합

 
4) 예상 위험 : 
 
○ 실시간 동적 데이터가 현재 시간과 오차 시간이 일정 이상 
   벌어지는 경우

○ 데이터 량이 증가함에 따른 성능의 저하 및 사용자 경험 저하


#### 세부 사항

위험 분석
1) 실시간 동적 데이터와 현재 시간 사이에 일정 오차 시간이 발생할 
  경우, 이는 데이터베이스로부터 특정 데이터 요청 시 딜레이, 인터넷 
  장애, 데이터베이스 장애 등으로 인한 문제로 발생할 수 있다.

○ 데이터 갱신 간격을 기존의 약 10초가 아닌 분 단위 이상으로 
   설정하며 장애 발생 시 복구 후 일정 기간의 데이터를 자동으로 
   다시 불러오도록 한다.

2) 데이터 량이 증가함에 따라 표현 되지 않는 데이터의 축적으로 인하여 
  Charting System의 출력의 딜레이 및 성능의 저하가 발생할 수 있다.

○ 데이터 저장 용량의 최대 크기를 설정하여 데이터 량 증가에 따른 
   성능 저하를 방지한다. 설정된 최대치를 초과할 경우, 이를 Triger로 
   선입선출(FIFO) 방식으로 데이터를 제거함으로써 시스템의 안정성과 
   효율성을 유지

○ 필요 데이터만 수집하는 DataBase를 이용하여 불필요한 데이터를 
   수집 하지 않으며, 전체 데이터를 수집하는 DataBase를 따로 백업으로 
   갖고 있는다.



## 나) 차트 모듈 개선 계획 – BackLog 작성 및 오픈소스 사용 매뉴얼 작성
  
### (가) 차트 모듈 개선 계획 – BackLog 작성

○ Item
    
1. 오픈소스 사용 매뉴얼 작성

   ⦁ JUI-Chart-Master 오픈소스의 코드 매뉴얼을 작성할 것
	
2. 사용자로서, 온도 데이터의 수치를 한눈에 확인하고 싶다
	
   ⦁ JUI-Chart-Master 오픈소스의 multi_axis_with_zoom_for_date 
	    와 같이 구축할 것

3. 사용자로서, 원하는 장치의 온도 데이터를 선택해서 확인하고 싶다.

   ⦁ Toggle Button을 이용하여 원하는 데이터만 선택 확인이 
	    가능하도록 할 것

4. 사용자로서 과거의 특정 기간의 온도 데이터를 열람하고 싶다.

   ⦁ 데이터베이스에 필요한 최소한의 정보만을 저장해 놓을 것

5. 데이터베이스 속도 개선

   ⦁ 데이터베이스의 Select 성능을 개선하여 시간 오차를 줄일 것

6. 사용자 인증 구현

   ⦁ 사용자의 휴대전화 번호를 ID 및 KEY로 활용하여 SHA-256 
	    Hashing 기술을 이용하여 보안을 하며 해당 키를 이용하여 
	    사용자 인증을 할 것

7. 웹 및 안드로이드 어플리케이션에서 동일한 UI · UX를 구현


## 다) 차트 모듈 개선 계획 – BackLog 작성

### Charting System Module 개발을 위한 BackLog

| 항목       | 내용                            |
| -------- | ----------------------------- |
| 제목       | Charting System Module 개발을 위한 BackLog |
| 작성자     | 김찬솔 학생 연구원                |
| 작성 날짜  | 2023.07.07                      |

| 아이템 | 세부사항 |
| ---- | ----- |
| 1    | 오픈소스 사용 매뉴얼 작성 |
|      | JUI-Chart-Master 오픈소스의 코드 매뉴얼을 작성할 것 |
|      | http://jui.io/?p=chart |
| 2    | 사용자로서, 온도 데이터의 수치를 한눈에 확인 하고 싶다 |
|      | JUI-Chart-Master 오픈소스의 multi_axis_with_zoom_for_date와 같이 구축할 것 |
| 3    | 사용자로서, 원하는 장치의 온도 데이터를 선택해서 확인하고 싶다 |
|      | Toggle Button을 이용하여 원하는 데이터만 선택 확인이 가능하도록 할 것 |
| 4    | 사용자로서 과거의 특정 기간의 온도 데이터를 열람하고 싶다 |
|      | 데이터베이스에 필요한 최소한의 정보만을 저장해 놓을 것 |
| 5    | 데이터베이스 속도 개선 |
|      | 데이터베이스의 Select 성능을 개선하여 시간 오차를 줄일 것 |
| 6    | 사용자 인증 구현 |
|      | 사용자의 휴대전화 번호를 ID 및 KEY로 활용하여 SHA-256 Hashing 기술을 이용하여 보안을 하며 해당 키를 이용하여 사용자 인증을 할 것 |
|      | https://ko.wikipedia.org/wiki/SHA |
| 7    | 웹 및 안드로이드 어플리케이션에서 동일한 UI · UX를 구현 |

## 라) 차트 모듈 개선 계획 - 오픈소스 로딩

 ### (가) 리소스 로드하기
  ○ JUI 라이브러리는 사용자가 이중 패키지 파일을 로드 하면 된다.
   테마 파일을 사용할 수 있으며 테마를 쉽게 만들 수 있는 추가 도구를 
   사용할 수 있다.

  ○ 해당 코드를 추가하여 JUI 라이브러리에서 필요한 스타일 및 스크립트 
   파일을 로드 한다.

`스타일 및 스크립트 파일을 로드하는 코드`

```html
<!-- 기본 스타일 컴포넌트 -->
<link rel="stylesheet" href="/jui/dist/ui.min.css" />
<link rel="stylesheet" href="/jui/dist/ui-jennifer.min.css" />

<!-- 그리드 스타일 컴포넌트 -->
<link rel="stylesheet" href="/jui-grid/dist/grid.min.css" />
<link rel="stylesheet" href="/jui-grid/dist/grid-jennifer.min.css" />
```

 ○ 그 다음 마크업에 JUI 클래스를 정의해 준다.

`jui 클래스를 정의하는 코드`
```html
<body class="jui">
    ...
</body>
```

`jui-core, jui-grid 파일을 로드하는 코드`
```html
<!-- 필수 스크립트 파일 -->
<script src="jquery.min.js"></script>
<script src="/jui-core/dist/core.min.js"></script>

<!-- 기본 스크립트 컴포넌트 -->
<script src="/jui/dist/ui.min.js"></script>

<!-- 그리드 스크립트 컴포넌트 -->
<script src="/jui-grid/dist/grid.min.js"></script>
```

○ 차트를 사용할 땐 다음과 같은 스크립트 파일을 로드한다.

`jui-chart 파일을 로드하는 코드`
```html
<script src="/jui-core/dist/core.min.js"></script>
<script src="/jui-chart/dist/chart.min.js"></script>
```

## 나) 명령으로 설치하기
○ JUI 라이브러리 설치는 npm이나 bower와 같은 패키지 매니저를 사용할 수 있다.

`jui 라이브러리를 설치하는 npm 명령어`
```objective-c
npm install jui
npm install jui-core
npm install jui-grid
npm install jui-chart
```


 ### (가) 프로젝트 빌드 하기
 ○ 프로젝트 빌드를 위해, 빌드 도구인 Grunt 모듈을 설치해야 한다.
 ○ Grunt를 설치하려면 NodeJs를 먼저 설치해야 한다.
 ○ 그 다음 Terminal에서 아래와 같은 명령어를 실행한다.

`프로젝트를 빌드 하는 npm 명령어`
```objective-c
npm install grunt-cli –g
cd jui
npm install
grunt
```

○ 빌드 및 테스트 명령은 다음과 같이 각 기능별로 수행할 수 있다.

○ grunt.js 명령은 .js 파일에서 병합하고 최소화하며, grunt-test 명령어는 
  컴포넌트 테스트를 실행한다. grunt css 명령어는 마찬가지로 .less 파일을 
  css로 변환하고 병합한다.

`grunt 명령어`
```objective-c
grunt js
grunt css
grunt test
표  grunt 명령어
```
