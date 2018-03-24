# POBI QNA

##

---
### ATDD

웹 프로그래밍을 할 때에는 사용자의 요청을 받아서 응답을 보내주는 방법은 2가지가 있다.

1. 응답을 html로 하는가?

2. json이나 xml로 반환하는가?

data 만 넘기는 json 같은 경우는 클라이언트 부분에서 ajax등을 이용하여 UI를 만들어준다.
즉, 웹 기능에서의 ajax를 대체하는 기능이다.

ajax와 스마트폰의 등장으로 발전되었다.

html 서비스가 json으로 넘어가고 있다. 즉, UI개발의 중요성이 낮아지고 있다는 것이다.
(UI는 클라이언트가 알아서해라~)

즉 백엔드 개발자는 UI없이 개발을 할 수 있어야 한다.
이를 위해 ATDD가 발달된 것이고 우리가 준비해야 하는 것이다.

api 가 붙어있지 않은 컨트롤러들은 html문서를 응답으로 보내준다.
api 가 붙어있는 컨트롤러는 json 데이터를 보내주어야 한다.
---
@Controller - @RestController 차이점

@Controller 어노테이션이 붙어있다면, return 뒤의

@RestController 어노테이션이 붙어있다면, 리턴값을 자동으로 json 형식으로 바꿔주고 리턴해준다는 의미이다.

@Controller 어노테이션을 사용하고 json 데이터를 넘겨주고 싶다면, return 값을
@ResponseBody 어노테이션을 붙여서 보내주어야 한다.

---
@RequestBody - @ResponseBody

form tag 에 정보를 적어서 서버에 데이터를 보내면 `key=value` 형태로 요청을 보낸다.

> params.add("key", "value"); 와 같은 코드가 이것을 구현한 것이다.

파라미터가 많아져서 메서드 작성이 어려워지면서 객체 (UserDto와 같은)로 묶어서 보내고,
Dto 클래스 내에 set메서드를 통해서 정보를 넘길 수 있다. 이 때에 보낸 형식과 받는 형식을 맞춰주어야 한다. (UserDto로 보냈으면 apicontroller에서 UserDto로 파라매터를 받아야 한다.)
코드의 가독성(깔끔하게 작성해야하니까)을 위해서 객체를 보내는 방법이 좋다고 할 수 있다.

> .postForEntity(이름, 나이, 이메일);

이 라이브러리가 바로 여러가지 정보들을 json데이터로 변경해서 서버로 보내주는 역할을 한다.

이렇게 json 형식으로 만들어서 apiController 로 보내주면, 컨트롤러에서는 @RequestBody 어노테이션을 파라미터 앞에 붙여줘야 한다.

---
스프링과 같은 거대한 프로젝트에 대해 학습을 할 때에도, ATDD를 이용해서 학습의 질을 높일 수 있다.

---
인터셉터 (interceptor)

> basicAuthTemplate() 메서드를 잘 확인해보자.

뒤에있는 Controller 메서드가 시작되기 전에
인터셉터 내의 preHandle 내에있는 로직을 무조건 먼저 시작하게 만들어준다.

handlerInterceptorAdapter 를 extend 해야하고,
preHandle 메서드를 @Override 해주어야 제대로 작동한다.

LoginUserHandlerMethodArgumentResolver() 클래스를 살펴보면 @LoginUser 어노테이션을 다루는 부분이다.

---
Transaction

두 개 이상 묶어놓은 객체들에 대한 변화가 있을때에, 한개의 메서드라도 에러가 나면 나머지 잘 된 메서드도 다시 원복시키는 것.

```java
@Transactional
public User update() {
  User user = userRepo.findOne(id);
  user.update();
  return user;
}
```

이렇게만 해도

```java
public User update() {
  User user = userRepo.findOne(id);
  user.update();
  return userRepo.save(user);
}
```

와 같은 효과를 낼 수 있으며, 이는 조금 더 객체지향적이라고 할 수 있다.
