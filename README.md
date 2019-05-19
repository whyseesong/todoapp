# todoapp

## 프로젝트 셋업
```
npm install vue
npm install vuex vuejs-datepicker vuedraggable
```

## 빠른 실행을 위한 컴파일
```
npm run serve
```

## 컴파일 프로덕션
```
npm run build
```
## 사용방법
1. 할 일 추가
* 상단 Title 옆 input box에 할 일을 입력한 후 +버튼을 누른다
* Title 항목은 필수항목이다
* 기한을 설정하고 싶다면 Due 옆 checkbox를 체크하고 우측 inputbox를 클릭하면 달력이 표시된다. 달력에서 원하는 마감기한을 선택한다.

2. 추가된 할 일 목록은 입력영역 하단에 표시된다.

3. 목록 좌측 체크 버튼을 클릭시 해당 할 일이 완료표시된다.

4. 목록 우측 쓰레기통 버튼을 클릭시 해당 할 일이 삭제된다.

5. 목록 우측 연필 버튼을 클릭시 해당 할 일을 수정할 수 있도록 text가 inputbox로 변경된다. 수정 후 다시 연필 버튼 클릭시 해당 내용이 수정된다.

6. 목록의 우선순위는 할 일의 나열 순서로 결정된다. 할 일을 드래그하면 목록의 순서를 변경할 수 있다.

![Alt text](/img/11.png "할 일 추가")
![Alt text](/img/22.png "할 일 완료")
![Alt text](/img/33.png "할 일 수정")
![Alt text](/img/1.png "할 일 우선순위 변경 1")
![Alt text](/img/2.png "할 일 우선순위 변경 2")
![Alt text](/img/3.png "할 일 우선순위 변경 3")
