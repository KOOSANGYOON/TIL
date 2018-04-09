# POBI MAKE SITE TIP

## SPRING BOOT 기반의 팁이다.

###

---
intelij 에서는 new project-spring initializr을 이용하면 된다.

문서 참고본은 JWP 반복주기 파트1 을 이용하면 된다.

---
1. start.spring.io 에서 시작한다. (STS와 동일한 것이다.)
  - gradle / maven 빌드 도구에 익숙한 지 확인한다.
  - 스프링 버젼을 선택한다.
  - Group : 그룹(회사)의 고유한 ID 를 부여하는 것 (도메인을 많이 쓴다.)
  - 그 회사마다의 고유한 프로젝트ID 는 Artifact에 적는다.
  - web 프로젝트이기 때문에 dependency를 설정해야 한다. (나중에 추가할 수도 있다.)
  - generate project 하면 프로젝트가 다운로드 된다.
  - intelij 를 실행시켜 import project 로 방금 다운받은 프로젝트를 열어준다.
  - (gradle home 설정등은 신경쓰지 않는다.)
  - group명과 artifact명이 합해진 프로젝트 네임으로 생성이 된다.
  - test 폴더내에 있는 java 폴더와 / src 폴더내에 있는 java 폴더가 색이 다를것이다. (그것이 setting이 완료됨을 의미한다.)
  - git 을 통해서 관리할 때, gradle 폴더를 꼭 관리해야 한다. (그래야 gradlew 가 사용 가능해지기 때문에)

2. Controller (test) 만들어서 웹에 잘 작용이 되는지 확인
  - 실행하면서 console창을 확인하면서 잘 맵핑이 되는지 확인한다.
  - spring boot 와 관련된 모든 설정은 application.properties에 있다.
    (포트를 변경해야 하거나 등등의 문제를 다룬다.)

3. 어떤 template 엔진을 사용할 지 정해야 한다.
  - JAVA 진영에서는 JSP를 가장 많이 이용한다.
  (mustache/handlebars/thymeleaf 등등이 있다.)

  이와 관련해서 잘 모르겠다면 검색을 해서 template 엔진을 배울 수 있다. (어렵지 않다.)
  템플릿 엔진 이라는 용어를 아는것, 무슨 역할을 하는지 아는것이 중요하다. (문법은 그때그때 배우면 된다.)

  (handlebars의 경우)
  handlebars spring boot 라고 검색하면 디펜던시 설정 등의 사용법이 잘 나와있다.

  이렇게 디펜던시를 추가해준다. external liberies 에서 방금 import가 잘 되었는지 확인한다. 자동 import가 안되는 경우 view -> tool windows -> gradle 로 가서 refresh 해준다.

  라이브러리와의 충돌이 나지 않게 버젼을 설정해줘야 한다. (꼼꼼히 읽고 디펜던시 추가하기를... 버젼설정..... 삽질과 연관된다.)

4. 템플릿 엔진을 적용할 때, 각 템플릿 엔진마다 달라지는 부분이 있다.
  - configuration 에서 default configuration 을 확인해보면 디폴트확장자가 다름을 알 수 있다. 이를 default 설정을 바꿔줌으로 해결해야 한다.

  - application.properties 파일에서 변경값을 적용해준다.
  (ex) handlebars.suffix=.html

  - 서버 재시작을 매번 하는것이 귀찮다면
  (ex) handlebars.cache=false

  - 설정 파일에 대해 얼마나 많은 파일이 있는지 모르기 때문에 확인하려면
    -> spring boot application.properties 검색해보면 된다.
    > 대부분의 default 값을 확인할 수 있다.

  - tomcat 의 default 값도 확인할 수 있다. (server.tomcat.max-threads=0)

5. 현재 상태(h2 로 설정한 database) 에서 mysql로 변경을 하는 방법
  - 검색 방법 : mysql jdbc driber dependency 와 같이 검색할 수 있다.
  > compile group: 'mysql', name: 'mysql-connector-java', version: '5.1.6'
  와 같이 나온다.
  >
  > 이는 compile('mysql:mysql-connector-java:5,1,6') 과 같은 뜻이다.

  - dependency 를 추가하고, JDBC 에 대한 설정을 추가해 주어야 한다.

  - spring boot mysql application.properties 와 같이 검색해본다.

  > spring.datasource.url = jdbc:mysql://localhost:3306/netgloo_blog?useSSL=false
  >
  > \# Username and password
spring.datasource.username = root
spring.datasource.password = root
  >
  > \# Keep the connection alive if idle for a long time (needed in production)
spring.datasource.testWhileIdle = true
spring.datasource.validationQuery = SELECT 1

  와 같은 내용이 뜬다. application.properties에 추가해준다.









---
