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
