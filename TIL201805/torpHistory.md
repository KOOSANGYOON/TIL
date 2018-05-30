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
