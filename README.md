# Charting-JUI
FEAT : 새로운 기능의 추가

○ FIX: 버그 수정

○ DOCS: 문서 수정

○ STYLE: 스타일 관련 기능(코드 포맷팅, 세미콜론 누락, 코드 자체의 변경이 없는 경우)

○ REFACTOR: 코드 리펙토링

○ TEST: 테스트 코트, 리펙토링 테스트 코드 추가

○ CHORE: 빌드 업무 수정, 패키지 매니저 수정(ex .gitignore 수정 같은 경우)

****

|날짜|내용|
|:---|:---|
|2023/07/07|Charting System Module 개발을 위한 BackLog 계획 개요 작성 완료|
|2023/07/09|차트 모듈 개선 계획 - 오픈소스 사용 매뉴얼 작성 완료|
|2023/07/19|차팅 시스템 구축을 위한 데이터 구성 및 계획 개요 작성 완료|
|2023/07/19|Module화 한 실 사용 가능한 차팅을 24시간으로 제한한 (00시 - 24시) 실제 특정 과수원 온도데이터(2023/07/17) 차팅 코드 작성 완료|

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

## 마) 차트 모듈 개선 계획 - 오픈소스 사용 매뉴얼

### (가) Table of Contents

  1. graph
    1) graph.ready(callback)
    2) graph.render()
    3) graph.reisze(callback, ms)
    4) graph.update(data)
      참조 링크 : https://github.com/juijs/jui-chart/blob/master/dist/jui-chart.js

  2. chart
    1) builder
      (1) height
    　(2) padding
      (3) axis
      (4) brush
        ○ canvas
      (5) widget
        ○ title
  　    ○ legend
        ○ zoom
      참조 링크 : http://api.jui.io/v2/
     
---

### (나) Detailed Description of Contents

1. graph

  1.1 소스 코드 : graph.ready(callback)
 
  ○ 차트 초기화가 완료되는 시점에 실행되는 콜백 함수를 설정하는 메서드

`graph.ready(callback) 구현부`
```js
ready: function ready() {
    var args = [],
        callback = arguments.length == 2 ? arguments[1] : arguments[0],
        depends = arguments.length == 2 ? arguments[0] : null;
        if (  !utility.typeCheck(["array", "null"], depends) || 
             !utility.typeCheck("function", callback)) {
           throw new Error("JUI_CRITICAL_ERR: Invalid parameter type of the function");
    }
    utility.ready(function () {
        if (depends) {
            args = getDepends(depends);
        }
        callback.apply(null, args);
    });
}
```

`graph.ready(callback) 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
     height: 300,
     padding: {
         right: 120
     },
     axis: [
         {
             x: {
              type: "date",
              domain: [new Date("2023/06/01 00:00:00"), new Date("2023/06/01 23:59:00")],
                       // X축의 범위를 설정합니다. [시작 날자] - [끝 날자]
              interval: 1000 * 60 * 60 *3, 
                       // 6시간 간격으로 눈금 표시
              format: "HH:mm", 
                       // 눈금의 레이블을 시간-분 형식으로 표시하도록 설정합니다.
                 key: "date",
                 line: true
             },
             y: {
                 type: "range",
                 domain: [0, 30], // Y축의 범위를 설정합니다.
                 step: 2,
                 line: true,
                 orient: "left"
             },
             data: data
         }
     ]
    });
});
```

---

  1.2 소스 코드 : graph.render()
  
  ○ Method for redrawing charts

`graph.render()(구현부)`
```js
/**
  * @method render
  * @param isAll
  */
     this.render = function (isAll) {
     this.clear();

     if (isFirst === false || isAll === true) {
           appendAll(root);
     } else {
           appendAll(main);
           }

     isFirst = true;
     };
```

`graph.render() 예제 코드`
```js
<button onclick="updateData()">Update Data</button>
    <script>
        var data = [
            { date: new Date("2015/01/01 00:00:00"), temperature: 35 },
            { date: new Date("2015/01/01 06:00:00"), temperature: 30 },
/* ------ 생략 ------ */
            { date: new Date("2015/01/02 00:00:00"), temperature: 20 }
        ];
        graph.ready(["chart.builder", "util.base"], function (builder, _) {
            c = builder("#chart", {
                height: 300,
                padding: {
                    right: 120
                },
        axis: [
            {
                x: {
                 type: "date",
                 domain: [new Date("2023/06/01 00:00:00"), new Date("2023/06/01 23:59:00")],
                 // X축의 범위를 설정합니다.
                 interval: 1000 * 60 * 60 *3, // 6시간 간격으로 눈금 표시
                 format: "HH:mm", // 눈금의 레이블을 시간-분 형식으로 표시하도록 설정합니다.
                 key: "date",
                 line: true
                },
                y: {
                 type: "range",
                 domain: [0, 30], // Y축의 범위를 설정합니다.
                 step: 2,
                 line: true,
                 orient: "left"
                },
                data: data
            }
        ]
            });
        });
        function updateData() {
            // 데이터를 업데이트함
            data = [
                { date: new Date("2015/01/01 00:00:00"), temperature: 45 },
                { date: new Date("2015/01/01 06:00:00"), temperature: 35 },
/* ------ 생략 ------ */
                { date: new Date("2015/01/02 00:00:00"), temperature: 32 }
            ];
            c.axis(0).update(data);
            c.render();
        }
```

---

  1.3 소스 코드 : graph.resize(callback, ms)
 
  ○ 윈도우의 크기가 변경됐을 때 차트의 크기를 변경하고 차트를 다시 
   그리는 메서드

`graph.resize(callback, ms) 구현부`
```js
resize: function resize(callback, ms) {
        var after_resize = function () {
            var timer = 0;

            return function () {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        }();

        if (window.addEventListener) {
            window.addEventListener("resize", after_resize);
        } else if (object.attachEvent) {
            window.attachEvent("onresize", after_resize);
        } else {
            window["onresize"] = after_resize;
        }
    }
```

`graph.resize(callback, ms) 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
            c = builder("#chart", {
                    height: 300,
                padding: {
                    right: 120
                },
        axis: [
            {
                x: {
                 type: "date",
                 domain: [new Date("2023/06/01 00:00:00"), new Date("2023/06/01 23:59:00")],
                          // X축의 범위를 설정합니다.
                 interval: 1000 * 60 * 60 *3, 
                          // 6시간 간격으로 눈금 표시
                 format: "HH:mm", 
                          // 눈금의 레이블을 시간-분 형식으로 표시하도록 설정합니다.
                 key: "date",
                 line: true
                },
                y: {
                 type: "range",
                 domain: [0, 30], // Y축의 범위를 설정합니다.
                 step: 2,
                 line: true,
                 orient: "left"
                },
                data: data
            }
        ]
            });
            });
        });window.addEventListener("resize", function () {
            c.resize();
        });
```

---

  1.4 소스 코드 : graph.update(data)
 
  ○ data를 업데이트하는 메서드 

`graph.update(data) 구현부`
```js
this.update = function (data) {
            this.origin = _.typeCheck("array", data) ? data : [data];
            this.page = 1;
            this.start = 0;
            this.end = 0;

            this.screen(1);
        };
```

`graph.update(data) 예제 코드`
```js
<div id="chart"></div>
    <button onclick="updateData()">Update Data</button>
    <script>
        var data = [
            { date: new Date("2015/01/01 00:00:00"), temperature: 35 },
            { date: new Date("2015/01/01 06:00:00"), temperature: 30 },
/* ------ 생략 ------ */
            { date: new Date("2015/01/02 00:00:00"), temperature: 20 }
        ];
        graph.ready(["chart.builder", "util.base"], function (builder, _) {
            c = builder("#chart", {
                height: 300,
                padding: {
                    right: 120
                },
                axis: [
                    {
                        x: {
                            type: "date",
                            domain: [new Date("2015/01/01"), new Date("2015/01/02")],
                            interval: 1000 * 60 * 60 * 6, // 6 hours
                            format: "MM/dd HH:mm",
                            key: "date",
                            line: true
                        },
                        y: {
                            type: "range",
                            domain: [10, 40],
                            step: 2,
                            line: true,
                            orient: "left"
                        },
                        data: data
                    }
                ]
            });
        });
        function updateData() { //"2015/01/01" ~ "2015/01/02" 사이의 날짜 데이터를 업데이트하는 코드
            data = [];
            var startDate = new Date("2015/01/01");
            var endDate = new Date("2015/01/02");
            while(startDate < endDate) {
            data.push({ date: new Date(startDate),
            temperature:Math.round(Math.random() * 20 + 10) });
                startDate.setHours(startDate.getHours() + 3);
            }
            c.axis(0).update(data);
            c.render();
        }
    </script>
```

---

 2. chart
 
  2.1 소스 코드 : builder
 
  ○ 생성할 차트를 정의하는 코드

`builder 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {

       });
});
```

 ○ 하위에 있는 내용을 포함해 차트를 정의한다.

---

  2.1.1 소스 코드 : builder - height
 
  ○ 차트의 높이를 정의하는 코드 (px)

`builder - height 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300
       });
});
```
---

  2.1.2 소스 코드 : builder - padding
 
  ○ 차트 주변 여백을 정의하는 코드 (px)

`builder - padding 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
       padding : {
        right : 100
       }
   });
});
```

---

  2.1.3 소스 코드 : builder - axis
  
  ○ 차트의 x축과 y축을 설정하는 코드

`builder - axis 예제 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
       height: 300,
        padding: {
            right: 120
        },
       axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
   });
});
```

 ○ type	: 축의 유형을 정의

 ○ domain 	: 축의 범위를 정의
 
 ○ interval 	: 축에 대한 눈금 간격을 정의
 
 ○ format 	: 축의 눈금 값의 포맷을 정의
 
 ○ line 	: 눈금의 선의 유무를 정의
 
 ○ step 	: 축 간격의 개수를 정의
 
 ○ orient 	: “left”(기본값) / “right” 축의 위치를 정의
 
 ---
 
  2.1.4.1 소스 코드 : canvas
  ○ 차트의 구성 요소를 설정하는 코드

`canvas 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), targetName: 40 },
         { date: new Date("2015/01/01 06:00:00"), targetName: 35 },
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), targetName: 20 }
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
     brush : [
     { type : "line", target : "targetName", axis : 0, colors: [ "#90ed7d" ], symbol : "curve"       } 
     ]
  });
});
```

 ○ type : 차트의 형태를 설정
 
 ○ target : 시각화 도구가 표시할 대상 데이터의 이름
 
 ○ axis : 그리기에 사용될 좌표 축 설정 인덱스
 
 ○ colors : 데이터가 그려지는 선의 색상
 
 ○ symbol : “normal” / “curve” / “step” 선의 모양을 설정
 
 ○ 두 개 이상의 값을 차트에 그려야 할 경우 값의 개수에 맞추어 해당 코드 추가

`두 개 이상의 값을 그리는 canvas 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), target1: 40 , target2 : 32 , target3 : 29},
         { date: new Date("2015/01/01 06:00:00"), target1: 35 , target2 : 29 , target3 : 27},
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), target1: 20 , target2 : 24 , target3 : 17}
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
     brush : [
      { type : "line", target : "target1", axis : 0, colors: [ "#90ed7d" ], symbol : "curve" } ,
      { type : "line", target : "target2", axis : 0, colors: [ "#90ed7d" ], symbol : "curve" } ,
      { type : "line", target : "target3", axis : 0, colors: [ "#90ed7d" ], symbol : "curve" } 
     ]
    });
});
```
---

  2.1.5 소스 코드 : title
  ○ 차트의 제목을 정하는 코드

`title 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), targetName: 40 },
         { date: new Date("2015/01/01 06:00:00"), targetName: 35 },
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), targetName: 20 }
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
      brush : [
     { type : "line", target : "targetName", axis : 0, colors: [ "#90ed7d" ], symbol : "curve"} 
     ]
     widget : [ { type : "title", text : "Test title" } ]
    });
});
```

 ○ text : 제목을 설정
 
---

  2.4.2 소스 코드 : legend

  ○ 차트의 범례를 표시하는 코드

`legend 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), targetName: 40 },
         { date: new Date("2015/01/01 06:00:00"), targetName: 35 },
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), targetName: 20 }
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
     brush : [
     { type : "line", target : "targetName", axis : 0, colors: [ "#90ed7d" ], symbol : "curve"} 
     ]
     widget : [ { type : "legend", brush : [ 0 ], align : "start", filter : true } ]
    });
});
```

 ○ brush : widget이 사용되는 brush 인덱스를 지정

 ○ align : “start”/ “center”/ “end” 위치를 지정
 
 ○ filter : brush로 선택한 label을 표시할 것인지 설정
 
 ○ 두 개 이상의 값을 표시하기 위해선 값의 개수에 맞추어 해당 코드를
  작성해야 한다.

`두 개 이상의 값을 표시하는 legend 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), target1: 40 , target2 : 32 },
         { date: new Date("2015/01/01 06:00:00"), target1: 35 , target2 : 29 },
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), target1: 20 , target2 : 24 }
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
     brush : [
     { type : "line", target : "target1", axis : 0, colors: ["#90ed7d"], symbol : "curve"} 
     { type : "line", target : "target2", axis : 0, colors: ["#999999"], symbol : "curve"}
     ]
     widget : [ 
          { type : "legend", brush : [ 0 ], align : "start", filter : true } ,
          { type : "legend", brush : [ 1 ], align : "center", filter : true }
     ]
    });
});
```
---

2.4.3 소스 코드 : zoom

  ○ 차트의 일부분을 확대하는 기능을 넣는 코드

`zoom 예제 코드`
```js
var data = [
         { date: new Date("2015/01/01 00:00:00"), targetName: 40 },
         { date: new Date("2015/01/01 06:00:00"), targetName: 35 },
/* ------ 생략 ------ */
         { date: new Date("2015/01/02 00:00:00"), targetName: 20 }
];
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis : [
            {
                  x : {
                      type : "date",
                      domain : [ 0, 100 ],
                      interval : 1000 * 60 * 60 * 6, // 6시간
                      format : "MM/dd HH:mm",
                      line : true
                  },
                  y : {
                      type : "range",
                      domain : [ 0, 100 ],
                      step : 5,
                      line : true,
                      orient : "left"
                  },
                  data: data
              }
          ]
      brush : [
     { type : "line", target : "targetName", axis : 0, colors: [ "#90ed7d" ], symbol : "curve"} 
     ]
     widget : [ { type : "zoom" } ]
    });
});
```
---

`데모 코드`
```js
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis: [
            {
                x: {
                    type: "date",
                    domain: [new Date("2023/06/01 00:00:00"), new Date("2023/06/01 23:59:00")],
                    interval: 1000 * 60 * 60,
                    format: "HH:mm",
                    key: "date",
                    line: true
                },
                y: {
                    type: "range",
                    domain: [0, 30],
                    step: 2,
                    line: true,
                    orient: "left"
                },
                data: data
            }
        ],
        brush: [
            { type: "line", target: "temperature1", axis: 0, colors: ["#90ed7d"], symbol: "curve" },
            { type: "line", target: "temperature2", axis: 0, colors: ["#999999"], symbol: "curve" }
        ],
        widget: [
            { type: "title", text: "Temperature Chart - June 1st, 2023" },
            { type: "legend", brush: [0], align: "start", filter: true },
            { type: "legend", brush: [1], align: "center", filter: true },
            { type: "zoom", axis: [0], integrate: true }
        ]
    });
});
    window.addEventListener("resize", function () {
            c.resize();
    });
```


`데모코드 - 이미지`

<img width="1322" alt="데모코드" src="https://github.com/CaMaGuee/Charting-JUI/assets/89383380/b09fec2d-3baf-4dc7-bd86-7a83d41cfb3d">

****

# 나. 차팅 시스템 구축을 위한 데이터 구성 및 계획서

---
### 차팅 시스템 구축을 위한 데이터 구성 및 계획 개요

**작성자:** 김찬솔 학생연구원  
**작성 날짜:** 2023.07.19.

## 개요

#### 가. 차팅 시스템 구축을 위한 데이터 요구사항

1. **정의**: 지역별 프로브 장치를 통한 차트 상호비교 및 사용성 개선을 위한 계획

2. **목적**:
    - 여러 지역의 프로브 장치를 설치하여 사용자들이 차트를 상호비교할 수 있도록 함.
    - 차트 모듈의 사용성 향상 및 다양한 데이터 종류 지원.
    - 하루 단위 온도 데이터 추이 확인과 필요시 특정 구간의 자세한 온도 데이터 확인 가능.

3. **진행 계획**:
    - 프로브 장치로부터 수집된 데이터를 중앙 서버로 전송.
    - 중앙 서버에서 지역별 및 전체 데이터를 종합, 분석 및 저장.
    - JSON 파일을 구문 분석하고 시각화를 위한 최적의 형태로 변환

4. **예상 위험**:
    - 실시간 동적 데이터가 현재 시간과 오차 시간이 일정 이상 벌어지는 경우
    - 데이터 량이 증가함에 따른 성능의 저하 및 사용자 경험 저하

---

## 세부 사항

### 가. 위험 분석

1. **실시간 동적 데이터와 현재 시간 사이에 일정 오차 시간이 발생할 경우**, 이는 데이터베이스로부터 특정 데이터 요청 시 딜레이, 인터넷 장애, 데이터베이스 장애 등으로 인한 문제로 발생할 수 있다.
    - 데이터 갱신 간격을 기존의 약 10초가 아닌 분 단위 이상으로 설정하며 장애 발생 시 복구 후 일정 기간의 데이터를 자동으로 다시 불러오도록 한다.

2. **데이터 량이 증가함에 따라 표현 되지 않는 데이터의 축적으로 인하여 Charting System의 출력의 딜레이 및 성능의 저하가 발생할 수 있다.**
    - 데이터 저장 용량의 최대 크기를 설정하여 데이터 량 증가에 따른 성능 저하를 방지한다. 설정된 최대치를 초과할 경우, 이를 Triger로 선입선출(FIFO) 방식으로 데이터를 제거함으로써 시스템의 안정성과 효율성을 유지
    - 필요 데이터만 수집하는 DataBase를 이용하여 불필요한 데이터를 수집 하지 않으며, 전체 데이터를 수집하는 DataBase를 따로 백업으로 갖고 있는다.

3. **차트를 출력하는 과정에서의 오차 시간이 발생할 수 있다**
    - 데이터베이스에서 Select 하는데 걸리는 시간: 19 초
    - 서버에서 호출하는 시간: 30 초에 한 번
    - 차트에 데이터를 띄우는 리로딩 시간: 12 초에 한 번
    - 데이터베이스에 데이터가 쌓이는 시간: 1 분에 한 번

    * 가장 긴 시간의 오차가 발생하는 경우:
        - 데이터를 가져온 시간 (최소 19 초 전, 최대 49 초 전 - 서버 호출 간격 30 초를 고려하여)
        - 차트 리로딩 간격: 12 초 최대 시간 오차는 49 초 (서버 호출) + 12 초 (차트 리로딩) = 61 초

    * 가장 짧은 시간의 오차가 발생하는 경우:
        - 데이터를 가져온 시간 (최소 19 초 전, 최대 49 초 전 - 서버 호출 간격 30 초를 고려하여)
        - 차트 리로딩 간격: 0 초(바로 리로딩될 때) 최소 시간 오차는 19 초

    - 즉, 차트에 띄운 데이터의 시간 값과 현재 시간 값의 오차는 최대 61 초, 최소 19 초로 한다.

---

### 가) Module화 한 실 사용 예제 코드

1.1 소스 코드 : test_chart.html
 - 모듈화시킨 자바스크립트 파일을 호출시킨 html 예제 코드

`모듈화시킨 자바스크립트 파일을 호출시킨 html 예제 코드`
```js
<!DOCTYPE html>
<html>

<head>
    <meta http-equiv="content-type" content="charset=utf-8;" />
    <script src="/TEST_HTML/jui-chart-master/dist/jui-chart.js"></script>
</head>

<body>
    <div id="chart"></div>
    <script src="jui-chart-master/dist/farmTempData.json"       type="text/javascript"></script>

    <script src="jui-chart-master/dist/jui-chart-data-parsing.js"       type="module"></script>

    <script src="jui-chart-master/dist/jui-chart-print.js" type="module"></script>
</body>

</html>
```
---

1.2 소스 코드 : farmTempData.json
 - 2023년 07월 17일 양복기농원에서 실제로 측정된 온도값을 JSON 파일로 
 데이터화 시킨 파일

`양복기농원에서 측정된 온도값을 JSON 파일로 데이터화한 파일`
```js
Temperaturedata = '[
    {
        "plkey": 1,
        "plname": "양복기농원",
        "install_date": "2022/12/08 22:49:05",
        "temperature": [
            { "date": "2023/07/17 00:00:08", "temperature1": "20.75" },
            { "date": "2023/07/17 00:09:31", "temperature1": "21.13" },
            { "date": "2023/07/17 00:18:43", "temperature1": "20.88" },
            { "date": "2023/07/17 00:28:26", "temperature1": "20.81" },
            { "date": "2023/07/17 00:37:48", "temperature1": "20.94" },
/* ------ 생략 ------ */
            { "date": "2023/07/17 23:43:22", "temperature1": "21.31" },
            { "date": "2023/07/17 23:52:44", "temperature1": "21.31" }
        ]
    }
]'
```

---

1.3 소스 코드 : jui-chart-data-parsing.js
 - JSON.parse() 하여 사용 가능한 데이터로 반환

`데이터를 출력하기 위한 Parsing 모듈`
```js
const temperatureData = JSON.parse(Temperaturedata)[0].temperature;

var data = temperatureData.map((entry) => {
  return {
    date: new Date(entry.date),
    temperature1: parseFloat(entry.temperature1),
    temperature2: Math.floor(Math.random() * 30),
  };
});

console.log(temperatureData);
export default data;
```
---

1.4 소스 코드 : jui-chart-print.js
 - 24시간 동안 측정한 온도 데이터를 출력하는 예제 코드

`도표의 길이를 24시간으로 제한한 코드`
```
import data from './jui-chart-data-parsing.js';
var year = data[0].date.getFullYear();
var month = ("0" + (data[0].date.getMonth() + 1)).slice(-2);
// 월은 0부터 시작해서 1을 더해주고, 2자리 문자열로 만들어줍니다.
var day = ("0" + data[0].date.getDate()).slice(-2);
var dateString = `${year}/${month}/${day}`;
var SDATE = dateString + " 00:00:00";
var EDATE = dateString + " 24:00:00";
graph.ready(["chart.builder", "util.base"], function (builder, _) {
    c = builder("#chart", {
        height: 300,
        padding: {
            right: 120
        },
        axis: [
            {
                x: {
                    type: "date",
                    domain: [new Date(SDATE), new Date(EDATE)],
                    interval: 1000 * 60 * 60 * 6, // 1시간 간격으로 눈금 표시
                    format: "HH:mm",
                    key: "date",
                    line: true
                },
                y: {
                    type: "range",
                    domain: [-20, 50], // Y축의 범위를 설정합니다.
                    step: 7,
                    line: true,
                    orient: "left"
                },
                data: data
            }
        ],

        brush: [
            { type: "line", target: "temperature1", axis: 0, colors: ["#90ed7d"],              symbol: "curve" },
            { type: "line", target: "temperature2", axis: 0, colors: ["#999999"],              symbol: "curve" }
        ],
        widget: [
            { type: "title", text: "Temperature Chart - " + dateString },
            { type: "legend", brush: [0], align: "start", filter: true },
            { type: "legend", brush: [1], align: "center", filter: true },
            { type: "zoom", axis: [0], integrate: true }
        ]
});
    window.addEventListener("resize", function () {
        c.resize();
    });
});
```

 * 표의 길이를 하루로 제한한다

`도표의 길이를 24시간으로 제한한 코드`
```
var year = data[0].date.getFullYear();
var month = ("0" + (data[0].date.getMonth() + 1)).slice(-2); // 월은 0부터 시작해서 1을 더해주고, 2자리 문자열로 만들어줍니다.
var day = ("0" + data[0].date.getDate()).slice(-2);
var dateString = `${year}/${month}/${day}`;

var SDATE = dateString + " 00:00:00";
var EDATE = dateString + " 24:00:00";
```

`Module화 한 실 사용 예제 코드 실행 화면`

<img width="1261" alt="24시간 코드" src="https://github.com/CaMaGuee/Charting-JUI/assets/89383380/77417d65-d55d-4046-8503-d6f78b99d6e8">
