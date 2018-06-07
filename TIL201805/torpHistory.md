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
