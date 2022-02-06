# 과제 설명

- 배포url

https://kyk1211.github.io/wanted_pre_onboarding/

## 1. AutoComplete

### 1.1 구현 방법

input 창에 onFocus 이벤트가 발생하면 focus state를 true로 한다.
input 창 바깥을 클릭하면 focus state를 false로 한다.
focus state가 false이면 자동완성목록을 표시하지 않는다.

focus state가 true 일 때 input 값이 변하면 onChange 이벤트가 발생하여 inputValue 값이 변하고 변한 inputValue 값으로 검색어 목록이 들어있는 배열 auto를 filtering하여 최대 6개 값까지 filtered state에 저장한다.
filtered state가 비어있지 않다면 map을 이용하여 자동완성 가능한 목록을 표시한다.

자동완성목록을 클릭하면 autoValue state에 클릭된 검색어를 저장하고 autoValue에 값이 있다면 input value에 inputValue 대신 autoValue를 표시한다.

inputValue state가 존재할 때 input 창에서 위방향키, 아래방향키를 입력하여 keyDown 이벤트가 발생하면 index state 값이 증가, 감소하고 index 값에 따라 filtered state에서 해당하는 값을 불러와 autoValue state에 저장한다.
enter를 입력하면 현재 autoValue state를 inputValue state에 저장하고 autoValue state를 초기화한 후 focus를 해제한다.

### 1.2 어려웠던 점과 해결 방법

input 창을 클릭하여 focus 상태가 되면 focus state가 true가 되고 동시에 최상위 div 태그에 onClick 이벤트가 발생하여 focus state가 바로 false가 되는 문제가 발생하였다.
따라서 최상위 div 태그와 input 태그 사이의 div태그에 onClick 이벤트로 이벤트 버블링, 캡처링을 막는 stopPropagation 메소드를 이용하여 input 창을 클릭하여 focus 이벤트가 발생 할 때 최상위 div 태그에서 onClick 이벤트가 발생하지 않도록 하여 해결하였다.

filtered state를 만들지 않고 auto 배열에 직접 map과 filter를 이용하여 자동완성 목록을 표시하려 했으나 자동완성목록에 6개 제한을 두는 것에 문제가 있었다.
따라서 filtered state를 만들어 auto 배열을 filtering한 후 slice를 이용하여 최대 6개 까지의 값을 저장한 후 filtered state에 map을 이용하는 것으로 자동완성목록을 만들어 해결하였다.

### 1.3 실행 방법

글자를 입력하면 자동완성목록이 뜨고 클릭하여 선택가능하다.

![auto1](https://user-images.githubusercontent.com/85268135/152663349-44cb713f-73a0-4c99-a84e-81f91235cbc1.gif)

x버튼을 클릭하면 input창을 비운다.

![auto2](https://user-images.githubusercontent.com/85268135/152663375-0f34e613-396b-46a2-a8d6-c71188c62c10.gif)

방향키로 자동완성목록을 이동가능하며 enter를 눌러 선택가능하다.

![auto3](https://user-images.githubusercontent.com/85268135/152663389-e9f294b7-d143-42b7-a825-e2d10c11e8a0.gif)

영어 대문자와 소문자를 구분하지 않는다.

![auto4](https://user-images.githubusercontent.com/85268135/152663420-3a0d850e-9480-4b17-8dfa-4d45f24cbeeb.gif)

## 2. ClickToEdit

### 2.1 구현 방법

input 창 두개에 각각 defaultValue로 name, age state를 할당하고 input 창에서 focus가 풀릴 시 onBlur 이벤트가 발생하여 입력값을 state로 저장한다.

### 2.2 어려웠던 점과 해결 방법

처음에 input 태그의 value 속성에 state를 할당하였는데 onChange 이벤트가 없어 에러가 발생하며 값이 변하지 않았다. 따라서 value 속성을 defaultValue로 바꾸어 해결하였다.

### 2.3 실행 방법

input창을 클릭하여 입력하고 바깥 부분을 클릭하면 값이 저장되어 반영된다.

![clicktoedit](https://user-images.githubusercontent.com/85268135/152663442-dc06a975-cc7c-48ce-8ee2-2bb64a24edcc.gif)

## 3. Modal

### 3.1.구현 방법

show state가 true이면 모달창을 보여주고 false면 모달창을 닫는다. open modal을 클릭하면 onClick 이벤트가 발생하여 show state를 true로 한다.
모달창의 x버튼 또는 모달창의 바깥을 클릭하면 onClick 이벤트가 발생하여 show state를 false로 만든다.

### 3.2 어려웠던 점과 해결 방법

모달화면에서 배경 div에 onClick 이벤트로 show state를 false로 만들어 모달창을 클릭했을때 이벤트 버블링이 발생해 모달창이 꺼지는 문제가 발생하였다. 따라서 이벤트 버블링, 캡처링을 막는 stopPropagation을 이용하여 해결하였다.

### 3.3 실행 방법

open modal버튼을 누르면 modal이 열리고 x버튼 또는 modal 바깥 부분을 클릭하면 modal이 닫힌다.

![modal](https://user-images.githubusercontent.com/85268135/152663453-d376233c-793c-42c8-8972-26f15fbe72b8.gif)

## 4. Tab

### 4.1 구현 방법

tab이름과 component를 가진 object들로 menu 배열을 만들고 menu 배열에 map을 이용하여 각각 tab 메뉴를 만든다. tab 메뉴를 클릭하여 onClick 이벤트가 발생하면 tab state에 tab이름을 저장하고 content state 에 component를 저장하여 렌더링한다.

### 4.2 실행 방법

각 tab메뉴를 클릭하여 tab을 이동할 수 있다.

![tab](https://user-images.githubusercontent.com/85268135/152663332-f5473042-37b0-459f-ab49-02cd178b1f2a.gif)

## 5. Tag

### 5.1 구현 방법

입력한 tag들은 tags state에 저장되고 map을 이용하여 tag를 나열한다.
나열된 tag의 x버튼을 누르면 tags state에서 filter를 이용하여 tag를 제거한다.
input 태그에 onChange 이벤트를 이용하여 input 입력값이 변할 때마다 input state에 입력값을 저장하고 onKeyDown 이벤트를 이용하여 enter를 누르면 tags state에 input state값을 추가하고 input state를 초기화한다.

### 5.2 실행 방법

input창에 입력 후 enter를 치면 태그가 생성된다. 태그의 x버튼을 클릭하면 태그가 삭제된다.

![tag](https://user-images.githubusercontent.com/85268135/152663473-00e896d4-4f16-4efa-af1d-50e2d0c358c8.gif)

## 6. Toggle

### 6.1 구현 방법

toggle state를 만들고 toggle 버튼을 클릭하면 onClick 이벤트로 toggle state를 true, false로 toggle해준다. transition을 주어 toggle 값에 따라 버튼의 위치와 배경색이 바뀌게 했다.

### 6.2 실행 방법

toggle버튼을 클릭하면 toggle 상태가 변한다.

![toggle](https://user-images.githubusercontent.com/85268135/152663484-c5afb6d9-953b-4478-9cf1-dbfeace97c8c.gif)
