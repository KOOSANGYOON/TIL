# 문제 발생 및 해결

---
## 2018.05.30
- database 에서 @ManyToOne - @OneToMany 설정

  > database를 설정할 때, `@ManyToOne` `@OneToMany` 를 설정해야 할 때가 있다.
  >
  > 이 때에 Many 쪽에서는 `@JoinColumn` 을 이용해서 One 을 필드로 받는다. 이 때에 ForeignKey를 명명해준다.
  >
  > 동시에 One 쪽에서는 Column을 추가하는 것이 아니라, Many 쪽에서 무엇으로 mapped 했는지를 명명해주어야 한다.
  >
  > 예를들면,

  ```java
  @OneToMany(mappedBy = "nameOne", cascade = CascadeType.ALL)
  ```
  > 와 같은 방식이다. 이 때, nameOne에 들어가야 할 이름으로는, Many쪽에서 ForeignKey로 명명해준 이름이 아니라, Many 쪽에서 One을 사용하는 필드의 이름을 넣어준다.
  >
  > 만약 Many 쪽에서 아래와 같이 설정이 되어있다면,

  ```java
  @ManyToOne
    @JoinColumn(foreignKey = @ForeignKey(name = "toDoDecks"))
    private ToDoBoard toDoBoard;
  ```
  > One 쪽에서 받을때에는,

  ```java
  //잘못된 예시
  @OneToMany(mappedBy = "toDoDecks", cascade = CascadeType.ALL)
    @Where(clause = "deleted = false")
    @OrderBy("id ASC")
    private List<ToDoDeck> toDoDecks = new ArrayList<ToDoDeck>();
  ```
  > 이렇게 mapped 해주면 실패이다. "toDoDecks" 가 아닌, "toDoBoard"로 mapped 해줘야 정상 테이블 생성이 가능하다.

  ```java
  //정답 예시
  @OneToMany(mappedBy = "toDoBoard", cascade = CascadeType.ALL)
    @Where(clause = "deleted = false")
    @OrderBy("id ASC")
    private List<ToDoDeck> toDoDecks = new ArrayList<ToDoDeck>();
  ```

---
## 2018.05.30
- to_do_board / to_do_deck 을 만들고 난 뒤, 바로 접근해 볼 수 없고, refresh를 한 뒤에 접근 가능한 문제 발견.


---
## quartz cron expression 을 구글링해보자.
- 자동화 배포시에 정확한 매 요일 등의 기능도 적용할 수 있다.

- 개인적인 게시판이 아닐경우에 '캐싱' 기능을 이용하면 굉장히
의미가 있다. -> 성능 개선을 위해 중요한 부분이다. 현업에서도 많이 사용하고, 면접에서도 분명히 의미가 있다.

- 책을 통한 지식의 체계화가 중요하다. -> 현업에서도 마찬가지이다.

---
## 2018.06.04
- ajax 로 board, deck, card를 구성하다보니, `{{# deck }} ... {{/ deck }}` 과 같은 `for문` 처럼 돌아가는 html 안에는 append 시키는데에 한계가 있었다. 이 부분은 수정이 필요하다. (현재는 refresh하는 방식으로 사용중이다.)

---
## 2018.06.05
- board.js 내부에 openCardModel 메서드 내에서

  ```javascript
  var cardId = $(e.target).closest(".deck-card").attr("value");
  $(".close-moadl").text(cardId);
  ```
  와 같이 클래스 내부에 card의 id값을 숨겨 두려고 함.
  이 때도 역시나 기존에 구성되어있던 card들에 대해서는 `cardId` 값을 잘 받아온다. 하지만, 방금 만든 카드는, js로

  ```javascript
  var $deckWrapper = $(eventTarget.closest(".deck-wrapper"));
  $deckWrapper.find(".deck-cards-exist").append(card);
  ```

  와 같이 append 시켜주기 때문에 html 안에 있는 card 리스트에 포함되지 않고, 그저 포함된 것처럼 띄워지기만 한다. 이로인해 card의 id값을 받아오지 못해 `undefined` 되는 경우가 발생한다. 추 후 수정이 필요하다.

---
## 2018.06.06
- board.js 에서 `addComment` 메서드 실행 시, 데이터베이스에는 잘 저장이 되나, 새로고침 후에 다시 card를 눌렀을 때, Comment들이 띄워지지 않음. jquery 문법에 익숙치 않아서 구현되지 않은 기능이다. 추 후 질문 필요.

---
## 2018.06.07
- board.js 내부에 openCardModel 메서드 수정.

  - 기존 코드
  ```javascript
  function openCardModal(e){

        $("#modal").modal('open');

        var boardId = $(".board-header-area").attr("value");
        var cardId = $(e.target).closest(".deck-card").attr("value");
        var deckId = $(e.target).closest(".deck-cards-exist").attr("value");
        console.log("target : ", e.target);
        console.log("card id : ", cardId);
        console.log("deck id : ", deckId);

        $(".hiddenCardTitle").text(cardId);
        $(".hiddenDeckTitle").text(deckId);

        var description = $(e.target).closest(".deck-card-description").attr("value");
        console.log("description : ", description);
        $(".card-description").text(description);

        var title = $(e.target).text();
        $(".card-title-in-modal").text(title);
        var deckName = $(e.target).closest(".deck-content").find(".deck-header-name").val();
        $(".deck-name").text(deckName);

    }
  ```

  - 수정 후
  ```javascript
  function openCardModal(e){

        $("#modal").modal('open');

        var boardId = $(".board-header-area").attr("value");
        var cardId = $(e.target).closest(".deck-card").attr("value");
        var deckId = $(e.target).closest(".deck-cards-exist").attr("value");
        console.log("target : ", e.target);
        console.log("card id : ", cardId);
        console.log("deck id : ", deckId);

        $(".hiddenCardTitle").text(cardId);
        $(".hiddenDeckTitle").text(deckId);

        var url = "/api/boards/" + boardId + "/" + deckId + "/" + cardId + "/cardInfo";
        console.log("url : ", url);

        $.ajax({
            type: 'post',
            url: url,
            contentType: 'text/html; charset=utf-8',
            data: cardId,
            dataType: 'json'}).done(function getCardSuccess(data) {
                console.log("data : ", data);
                $(".card-description").text(data.description);
                $(".card-title-in-modal").text(data.title);
                $(".deck-name").text(data.toDoDeck.title);

                for (var i = 0; i < data.comments.length; i++) {
                    var writerSection = data.comments[i].writer.userId + "'s comment :";
                    var comment = data.comments[i].comment;
                    $(commentTemplate({"comment-contents":comment, "writer-name":writerSection})).appendTo(".comments");
                }
        }).fail(function getCardFail() {
            console.log("get card info fail.");
        });
    }
  ```
  - ajax 처리를 이용해서 객체를 model에 담아주는 형식으로 변환. 이를 통해서 card를 눌러서 상세 정보를 볼 때에 모든 comment 가 같이 뜰 수 있게 만들었다.

  ### 여기서 문제 발생!
  - comment 들은 동적으로 잘 받아오지만,

  > 1. A 카드에 comment들을 추가하고, B 카드를 클릭했을 때,
  >
  > 2. A 카드를 눌러 상세보기 했다가, B 카드를 눌러 상세보기할 때,

  이와 같은 경우에 A 카드에만 append 되어야 하는데 B 카드에도 A 카드의 comment가 append 되어있는 상황이 발생했다. 이는 <div class='comments'></div> 라는 태그 안에 계속해서 append 되고, refresh 되는 부분이 없어서 발생하는 것으로 판단했고, openCardModal 내부의 ajax success 부분에 아래와 같은 한 줄을 추가했다.

  ```javascript
  $(.comments).empty();
  ```

  이 구문을 이용해서 기존에 append 되어있던 것들을 clear 하고, 다시 그 카드에 맞게 append 시키는 동작을 수행함으로써 가각의 카드에 맞는 comment 들만 띄워지게 만들었다.

---
### ToDoBoard 의 name 을 수정하는 부분 UI 수정 필요.

```javascript
$(".edit-board-title-btn").on("click", editBoardForm);
$(".edit-board-title-btn-submit").on("click", editBoardName);
$(".edit-board-title-btn-cancel").on("click", cancelEditBoardName);
```

부분의 수정이 필요하다.

---
## drag - drop
## chat bot

두가지 기능을 생각해보자.

---
## 2018.06.08 (수정 완료.)
- 카드 이름 변경시 카드 상에서, 그리고 데이터베이스 상에서는 잘 변경이 된다. 하지만, Deck에 적혀있는 이름은 refresh하지않으면 변경되지 않는 문제가 남았다. 이 부분만 수정하면 카드이름변경 기능 완성이다.

## 2018.06.09
- 어제의 문제를 수정 완료함. 자세한 코드를 첨부하여 이러한 코드가 성능적으로는 문제가 없는지 알아볼 필요가 있음.

  > 첨부 : 'board.js' file의 editCardTitle() method
  >
  > 불필요한 부분은 적지 않고, 중요 부분만 작성

  ```javascript
  function editCardTitle(e) {
        ...
        $.ajax({
            type: 'put',
            url: url,
            contentType: 'text/html; charset=utf-8',
            data: newCardTitle,
            dataType: 'json'
        }).done(function editCardTitleSuccess() {
            console.log("edit success.");
            var test = $(".deck-cards-exist").find(".deck-card-title");

            //이 for문의 필요성에 대해 생각해봐야 한다.
            for (var i = 0; i < test.length; i++) {
                if ($(test.get(i)).attr('value') === cardId) {
                    console.log($(test.get(i)).attr('value'));
                    $(test.get(i)).text(newCardTitle);
                }
            }

            console.log("test : ", test);
        }).fail(function editCardTitleFail() {
            console.log("edit fail.");
        });
    }
  ```

---
## 20180610

- board delete 시에 modal이 뜨는 것 까지만 구현 완료.
- css 및 주요 기능은 아직 구현이 안됨. (restcontroller)
- 추가 구현 필요.

- 카드 삭제 기능을 구현 하더라도, 현재는 view단에 뿌려줄 때, deck들을 가져오고, 그 deck이 가지고 있는 card들을 {{# cards }} ... {{/ cards}} 와 같이 뿌려주고 있다. 만약 각각의 카드가 boolean delete 값이 true 가 되었을 때, 어떻게 해야 view단에 제대로 뿌려줄 수 있을까? 고민해보자.

- 삭제를 할 때, boolean delete = true; 와 같이 하다보니, 하위 객체의 repository에서 상위 객체의 boolean delete 값을 보고 그 하위에 해당하는 모든 자신이 관리하는 객체들의 delete 상태를 true 로 바꿔주는 기능을 구현하고 싶다. 방법이 없을까? 생각해보자.

---
## session timeout 설정을 수정해줘야 한다.
- session 의 장단점.
- 마지막 주에는 project 한 것에 대해서 정리를 하고 모의 면접을 본다.
  (포트폴리오 작성 후 모의면접)
- 문제해결능력과 빠른학습능력을 어필할 수 있는것이 중요하다. (문제만 해결하고 넘어가는 것이 아니라, 그 사이드 이펙트들에 대해서도 잘 정리하면서 학습했다. 식의 어필.)

---
## 20180612

- @Autowired / @Resource 의 차이점이 뭘지 정리해보자
- UnAuthenticationException / UnAuthorizationException 의 차이점이 뭘지 정리해보자

---
## 20180620

- Travis CI 연동 관련해서 문제 발생
  - 그동안 귀찮아서 root 계정으로 mysql 을 사용했었는데, Travis에서 제공되는 root 계정과 충돌이 났었던 것 같음.

  - admin 계정을 추가, 권한 부여하고 (로컬, 원격 모두) 이후에 Travis 빌드 실행해보니 데이터베이스에 접근 까지는 가능했음.

  - 에러 로그를 읽어보니, 데이터베이스에 한글이 들어가는 부분에서 ```Incorrect string value: '\xEC\x9E\x90\xEB\xB0\x94...' for column 'name' at row 1``` 라는 에러가 뜸. -> 한글이 부적합한 String 값이라고 하는 것을 보니, 데이터베이스 설정 시, 한글화 기능을 넣지 않은 것 같았음... 그게 맞았음... 데이터베이스 새로 셋팅 후 빌드 실시해보니 바로 통과 ... ㅋㅋ
