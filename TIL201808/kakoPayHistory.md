

1. A -> B 일때, B -> A로 설정하려고 하면 에러가 나와야한다.

  - OneToMany 관계로 양 측을 구성하다보니 생기는 예외

2. service 단에서 ToDo참조를 걸 때, A registring B / B registered A 를 private로 만들어 두고 계속 사용하면 좋을 것 같음.

3. 로그인이 되 있는 상태에서 /login 으로 요청시에, 로그인을 다시하는것이 아니라, 페이지가 자동으로 main으로 넘어가야 한다.

4. 로그아웃 구성 필요. 회원가입 구성 필요.

5. HttpFormDataBuilder 학습 필요.

6. FETCH_TYPE=EAGER / LAZY 공부하기.

7. 로그인 일단 빼!

8. refering / refered 를 같이 실행하는 toDoService.addref (@transactional) 에서 refering는 다른값을 계속 add 할 수 있는데, refered는 add가 되지 않는 것 같다. 문제를 알아보자.
