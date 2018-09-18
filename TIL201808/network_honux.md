

## Network 란 ?

- 통신망
- 목적 : 통신을 한다.
  - 통신 : n대의 기기들이 서로 메세지 혹은 데이터를 안정적으로 주고 받는 행위.

- 기기 2대를 가지고 통신을 한다 (이더넷 환경) -> L1 물리적 계층 데이터 교환
  - LAN선(Local Area Network)이 필요하다. <-> WAN (Wide Area Network) : 반댓말
  - 이를 통해 소켓 통신이 가능하다. (혹은 TCP/IP or HTTP)

- 기기 3개를 가지고 통신을 한다. -> L1 물리적 계층 데이터 교환
  - 리피터를 이용한 통신. A에서 행위가 있을때, B,C에 broadcasting 해주는 방식. (L1 통신장치)
  - 하드웨어 MAC어드레스를 이용한 데이터 교환.
  - 장비가 많아질수록 부하가 심하다. 이를 해결하기 위한 장비가 아래에 나온다.

- 기기 3대의 통신 -> L2 스위치를 이용
  -

- TCP/IP 인터넷의 특징
  - 군사용으로 나온 것이기 때문에, 전쟁을 대비하여 내구성이 강하다. (특정 노드가 끊어져도 문제없다. 다른 경로를 타고 가면 된다.)

- 메세지를 주고 받는 2가지 방법 (2가지 방법을 다 사용한다.)
  > 2가지 방식
  - Point to Point
  - broadcasting

  - 특정 대상을 향해 (Point to Point)
    - 장점 : 부하가 많이 걸리지 않는다.
    - 단점 : 특정 대상이 누군지를 모르면 보낼 수 없다.

  - 뿌리기 (broadcasting)
    - 단점 : 부하가 심하게 걸린다.

  - 정확한 위치를 알 지 못할때에는 broadcasting을 이용하여, 위치를 파악하고, 이후에 Point to Point방식으로 메시지를 전달한다.

  - 내부적으로 복잡한 알고리즘을 통해, 최단거리를 구해서 정보를 주고받는다.

- 그렇다면 최단거리(메시지가 전달될 선로를)를 결정하는 방법은?
  > 2가지가 있다.
  - 시작점부터 도착접까지의 길을 완벽하게 제시하는 방법 -> 1번
  - 현재 상태에서 바로 다음에 어디 갈지만 제시하는 방법 -> 2번

  - 1번 : Circuit-Switched방식 : 옛날 교환원을 생각하면 된다.
  - 2번 : Packet-Switched 방식 : 오늘날의 전화 방식과 유사.

- 이러한 네트워크를 제대로 구성하기 위해 OSI 7계층을 만들었다. (가상의 표준이다.)
  - 역할에 따라 나눔.
  - 일반적인 순서에 따라 계층을 나눔.
  - 중간 노드들은 1,2,3계층 까지만 가지고 있고, 상위 계층은 신경쓰지 않는다. (라우터 들)

- 그렇다면 7계층을 다 알아야 하는가 ?
  - TCP/IP 4계층을 알면 된다.

- TCP/IP라고 말하면 대부분 이 모델을 이야기 하는 것이다. (5,6,7 계층이 합해져서 Application layer가 되었다.)
  - `Application 계층`
  - `Transprot (Host to Host) 계층` : 메시지가 상대방의 App에 전달될 수 있도록 함. 대표적으로 TCP / UDP
    - PORT 개념이 추가된다. (PORT정보 추가적으로 사용)
  - `Internet 계층` : 실제 메시지가 상대방의 컴퓨터에 전달될 수 있도록 함. 우리가 흔히 "IP주소" 라고 하는 것.
  - `Network Interface 계층` : MAC주소를 가지고 데이터 통신.

- TCP - UDP
  - 한 줄 요약 :
    - TCP : 신뢰성 있는 통신. 속도가 느리다.
    - UDP : 패키지가 손실 될 가능성이 있는 통신. 속도가 빠르다.

  - 연결 / 노연결
    - 여기서 연결은 "메시지 주고받는 서로가 서로를 알고, 메시지 통로가 유지되는가"
  - 비휘발 / 휘발
  - 신뢰 / 비신뢰
    - "메시지가 정상적으로 도착했다는 것을 보증할 수 있는가 아닌가"
    - "중간에 메시지가 사라질 경우 어떻게 할 것인가"
  - 순서보장 / 순서 미보장
  - 흐름 / 뭉텅이
    - 데이터를 쪼개서 보내고 받을 수 있음.
    - 처음의 한 덩어리로만 보내고, 쪼개지면 버림.

  - 둘 다 IP layer 위에서 작동한다. 즉, 특정 컴퓨터(IP주소를 통해 알고있는)의 특정프로그램(port)에 데이터를 전달하고 싶어함.

  - 도메인 네임을 IP로 변환해주는 것 : DNS server
    - www.test.com ----DNS----> IP로 변환

- TCP가 메시지가 잘 도착했는지 확인을 해야한다. 어떻게 할까?
  - Connection 이다. 이 방식을 3번에 걸쳐서 연결한다고 하여 `3 ways handshake connection` 이라고 한다.
  - 생각보다 굉장히 무거운 작업이다.

- 연결이 의미하는 것?
  - 상태를 관리하겠다는 것

- TCP가 패킷의 순서를 보장하는 법 -> Sequence
  - 패킷을 보냈는데 ack 가 오지 않으면, timeout이 날 때까지, 계속해서 시도한다.

- 패킷 / 프레임
  - IP layer 에서 데이터들을 보낼 때, 패킷 단위로 보낸다.
  - IP layer 의 아랫단 물리 계층에서 데이터를 교환할 때, 프레임 단위로 이용한다.

- 허브 / 스위치 / 라우터
  - 허브 : 물리적으로 패킷을 구분할 수 없다.
  - 스위치 : CPU가 달려 있어서, 물리적으로 패킷을 구분할 수 있다. (L2 layer에서 데이터를 중계)
  - 라우터 : IP layer에서 데이터를 중계.

- L4 스위치 : Transprot layer : 로드밸런싱에 사용한다.
- L7 스위치 : application layer : 패킷을 구분할 수 있는 스위치. (패킷을 까서 쿠키를 읽는등의 작업)

- WWW
  - HTTP / HTTPS
  - WebSocket

- 



---