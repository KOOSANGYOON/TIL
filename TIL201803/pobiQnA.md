## mvc pattern ?

- mvc 는 모델-뷰-컨트롤러 의 기본적인 골격

- 사용자의 요청이와서 응답을 받을때까지 flow를 그려보아라

  Client - Server

  Client -> Controller

  Controller -> Model
  Model -> Controller

  Controller -> View
  View -> Controller

  Controller -> Client

- 사용자의 요청(입력값)에 따른 유효성 체크는 Model 에서 해주는것이 맞다(객체지향적).
- 하지만, Controller에서 `@Valid` 와 같은 어노테이션을 이용하여 다루는 경우가 많다.
- 이 때, Model 에서 exception이 발생하면, Controller에서 이 exception을 다룬다.

- mvc로 보았을 때, 큰 의미의 Model / 작은 의미의 Model이 있다.
  - 큰 의미의 Model : Repository / Service 등을 모두 포함하여 Model 이라고 본다.
  - 작은 의미의 Model : View에서 필요한 데이터만 Model 이라고 보는 시점

## sync/async & blocking/non-blocking 이러한 골격이 등장한 배경

- 10K (10,000) problem

  서버 1대가 동시에 만명의 사용자를 받을 수 있게 하려면 어떻게 해야 할까요?

  -> 멀티 스레드 기반으로는 동시에 만명을 절대로 받을 수 없다.

  이에 따른 해결책으로 제안한것이 single thread model 이다.
  single thread model 이것을 이해하려면 `동기/비동기`, `blocking/non-blocking` 에 대해 명확히 이해해야 한다.

- 멀티 스레드 기반으로만 사용할 때에는 sync/async 만 알았어도 됐다.

- sync/async 는 어느 관점에서 보느냐에 따라 다른 의미가 된다.

  운영체제 단에서 I/O 모델과 관련하여 (not Server)

  sync / async

  blocking / non-blocking 이 존재한다.

- 함수를 통해 운영체제(커널) 로 요청을 보냈을 때, 응답을 받기까지의 주체가 누구냐에 따라 sync / async 가 나뉜다.

  - 요청을 보낸 뒤, 응답이 올 때 까지 계속해서 (요청을 보낸놈이) 응답에 대해 계속 모니터링(신경쓰고있는) 것이 sync 이다.

  - 일단 요청을 보낸 뒤, 응답이 오는지 오지 않는지에 대해 신경을 쓰지 않고, 운영체제(커널) 안의 쓰레드가 반대로 요청을 보낸쪽에 데이터가 도착했다고 알려주고, 이 때에 요청을 받아오는 것이 async 이다. ajax 가 바로 이러한 것을 이용한 것이다.

- 즉, sync 처럼 요청에대한 응답을 기다리면서, 내가 다른 작업을 할 수 있느냐 없느냐에 따라 blocking / non-blocking 이 결정된다.

  - blocking 은 응답을 받기까지 아무런 일을 하지 않는다. 응답받기를 기다림.
  - non-blocking 은 요청을 보낸 뒤, (응답이 도착하지 않았어.) 라는 응답을 즉시 받고, 바로 다른 작업을 시작한다. 그렇지만 작업 사이사이에 계속해서 요청에 대한 응답이 왔는지를 확인한다. (없을때마다 운영체제에서 '응답이 도착하지 않았어.' 라는 응답을 받게된다.) 응답이 도착했을 경우에는 운영체제에서 응답을 담아 보내준다.

- async & non-blocking 이 동작하는 방식은
  요청을 보내면 바로 응답을 주고('아직 응답이 도착하지 않았어.' 라는 응답을) 바로 다른작업 시작. 1000개의 요청이 발생했을 때, 1000번에 대한 요청을 보내고 신경쓰지 않는다. 운영체제가 이를 신경쓰고, 요청에 대한 응답이 도착하는 순서대로 응답을 보내준다. 요청을 보낸쪽에서는 응답에 대해 신경을 쓰지 않아도 되니 굉장히 효율적으로 다른 작업을 실행할 수 있다. 즉,

  > 1) 응용프로그램 - 2) 운영체제 - 3) 원격서버 일 때,

  1) 큐에 요청들을 쌓았다가, 순차적으로 실행 -> 2) 각 실행마다 원격서버에 요청할것이 있으면 callback함수 이용하여 서버에 요청 -> 3) 서버에서는 요청에대한 응답이 왔을때 운영체제로 보내줌 -> 2) 운영체제에서는 서버에서 받은 요청을 callback함수 에 맞춰 데이터를 만들고 응용프로그램의 큐로 보내줌 -> 1) 응용프로그램에서는 운영체제에서 보내는 응답을 기다리지 않고 계속해서 다른작업을 (while문을 돌며 큐에 있는 다음 요청을) 수행하고 있다가 큐에 응답이 들어오면 (들어온 뒤, 큐에서 그 응답의 차례가 되면) 그때에 응답을 보내준다.

### 추가

- 톰캣의 성능도 이것 때문에 차이가 난다.
  - apache : 멀티 스레드 프로그래밍
  - nginX : 싱글 스레드 프로그래밍 (async non-blocking 방식을 더 사용하기 때문에 인기가 증가함.)

- 추가
  - OS 에서 Process 와 Thread 에 대해 공부하자.
  - 이후에는, sync / async & blocking / non-blocking 에 대해 심도깊게 고민하자.
  - 백엔드 개발자로써 큰 발전을 이루게 된다.
  - context switching(멀티 스레드의 단점)이란 무엇인가 ? 추가 학습 필요
