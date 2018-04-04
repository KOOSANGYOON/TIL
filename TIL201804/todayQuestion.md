- 개인 사이트 관련 오늘의 질문 (2018.04.04)
  - mustache 로 controller 에서 `return "index"` 했을 때는 띄워지지 않던 index.html..
  - thymeleaf 로 실행하면 띄워진다.

  - application.properties 에서의 설정
    - handlebars.suffix=.html 로 되어있다. 따라서 controller 단에서
    `return "index.html";` 이라고 표현할 필요없이 `return "index";` 로 표현하면 되는데,
    이 또한 실행되지 않았었다.

    - 이 때문에 기존의
    ```java
    @GetMapping("/")
    public String home() {
        log.debug("home controller in");
        return "index";
    }
    ```
    가 아닌,
    ```java
    @GetMapping("/test")
    public ModelAndView home2() {
        ModelAndView result = new ModelAndView();
        result.setViewName("index");
        log.debug("home controller in");
        return result;
    }
    ```
    를 사용했더니 실행이 되었다. 그러나 잠시 뒤에 그렇게 고심하던 기존의 index 를 리턴하는 위의 코드가 실행이 되었다. 이는 무슨문제일까..?

  - index.html 파일을 보면, 위치가 templates 폴더 내에 있다. 그런데, css나 mp4파일의 위치는
  static 폴더 내에 각각의 폴더로 나뉘어 있다. 이를 html에 적용할 때,
  `href="../static/css/main.css"` 가 아닌 `href="../css/main.css"` 로 하는 이유?
  `href="../static/media/background.mp4"` 가 아닌
  `href="../media/background.mp4"` 로 하는 이유?

  - 처음 spring starter project 로 프로젝트 생성한 뒤, main 내에 web package를
  생성하고, 이 안에 controller파일을 넣었었더니, application 에서 읽지 못했다.
  이는 default 범위를 벗어났기 때문인가?


  -
