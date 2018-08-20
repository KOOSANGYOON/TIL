RDBMS - 관계형 DB
<Oracle, MySQL, MS-SQL, postgreSQL 등>

NOSQL - 비 관계형 DB (Not only sql)
<mongoDB, Redis, Hadoop, Neo4j, elastic search 등>

---
DB는 병렬성을 보장한다. (동시에 여러 query를 실행할 수 있다.)

---
CAP - 일관성, 가용성, 파티션 내성

일관성(Consistency) - 똑같은 요청에 대해 언제나 똑같은 응답을 주어야 한다.

가용성(Availability) - 서버의 down time이 없다.

파티션 내성 - 서버 여러대가 있을 때, 한대가 망가지더라도 서비스가 내려가면 안된다. (minimum 서버는 3대)

분산시스템 - 여러대의 서버에서 하나의 서비스를 제공해주는 것

---
ACID (transaction의 성질)

원자성(Atomicity) - 더이상 쪼갤 수 없다. transaction 보장. (DB는 commit되지 않은 트랜잭션은 role-back을 보장한다.)

일관성(Consistency) - 똑같은 요청에 대해 언제나 똑같은 응답을 주어야 한다.

고립성(Isolation) - 현재 서버에서 query를 동시에 실행 하더라도, 나 혼자만 처리되는 것 처럼 operation이 되야한다. (= serial schedule을 처리한 결과가 나와야 한다.) (트랜잭션의 고립성 이라고 한다. 실제로 여러 요청들이 들어오면 한개씩 수행되지는 않는다.) 아래의 OS지식을 읽어본다면, 이와 같은 성질이 고립성이란 것을 알 수 있다.

(Durability) - 데이터를 한번 저장하면 절대 깨지지 않는다.

---
OS 지식)

process / thread

process - program in execution. 어떠한 프로그램이 실행중일 때, 우리는 프로세스라고 부른다. 즉, 메모리에 있고 CPU가 실행할 것을 프로세스라고 한다. (디스크에 있는 프로그램이 메모리로 올라가고, CPU가 실행을 한다.)

여기서 실행이란 무엇일까? 메모리의 코드 영역에 프로그램 코드가 올라간다. 이 코드는 어떻게 실행이 될까? CPU가 실행을 한다.

명령어가 실행되는 흐름을 쓰레드라고 한다.

모든 프로그램은 실행되면 프로세스가 되고, 한 프로세스에는 적어도 한 개의 쓰레드를 포함하고 있다.

single threaded program - 한번에 한 흐름으로 흘러간다는 프로그램을 의미한다. 예를들어 "hello world"를 출력하는 프로그램은, 아무리 for문을 돌건 while문을 돌건 하나의 흐름으로만 흘러가게 된다.

multi-thread 프로그램의 장점은, 쓰레드를 분리해서 여러 작업을 동시에(완전한 동시는 아니지만,) 진행하기 때문에 속도(성능)상의 이점이 있다.

하지만, 동시에 같은 데이터에 접근하는 경우 멀티쓰레드 환경은 문제가 있을 수 있다. 이를 해결하기 위하여 나온 이슈가 synchronized issue이다.(동기화 문제)

---
ERD (모델링의 기법 중 하나)

데이터 모델링이란 ?

- 현실세계에서 응용에 필요한 데이터를 잘 고르고 다듬어서 DBMS에 저장하는 방법
- 최소한의 데이터만 저장하도록 노력해야한다.

옛날에는 물리적 설계까지도 개발자들이 모두 해주었다. 요즘은 RDBS가 이 부분을 담당해주기 때문에 물리적 설계까지 개발자가 할 필요는 없다.

---
Table -> (row, column)

Relations -> (record, field)

---
CASCADE 속성 -> DB 테이블에서 한 값을 바꿨을 때, 연관된 다른 테이블에서도 값을 바꿔줘야 한다. 이 때, ON UPDATE CASCADE 쿼리를 이용하면 연관된 모든 테이블에도 적용이 된다.

JOIN을 가장 효율성이 안좋게 구현한 것 -> NESTED LOOP JOIN (복잡도가 O(N X M) 이다.)

---
PK에는 자동으로 B+ tree index가 걸린다.

B+ tree는 디스크용 자료구조이다.

나머지 Binary Search Tree 등 많은 자료구조들은 메모리용 자료구조이다.

Secondary index에 대해 학습해보자.

---
Relational | File system | DB

relation | file | table

tuple | record |

attribute |

---
### transaction Isolation level

1. read uncommitted (Isolation low) - 같은시간에 처리량이 많다.(throughput 이 높다.)

2. read committed

3. repeatable read

4. serializable (Isolation high) - 같은시간에 처리량이 적다. 대신, 직렬적으로 처리하기 때문에 안정성이 높다.

---
### Database 쿼리 튜닝

- 튜닝이란?
  - 쿼리의 성능을 높이기 위한 방법

- 암달의 저주(법칙)
  - 시스템에서 차지하는 비율이 P인 구성요소의 성능을 S만큼 개선했을 때의 전체 성능 비율을 나타내는 공식

  - 1 / {(1 - P) + (P / S)}

  - 두 가지를 알려준다.
    - 비율이 큰 요소를 성능개선해야한다.
    - 성능을 아주 좋게 해도 큰 차이는 없을 것이다.

- 병렬 프로그래밍 분야에서 왜 저주라고 하는가 ?
  - 19.8배의 한계에 부딪힌다. (꼭 그런것은 아니다.)

- 전반적인 scale out의 문제점이라고 볼 수 있다. (동기화 이슈)

- 함수형 프로그래밍이 side effect로 성능의 감소를 막을 수 있기 때문에 뜨고있다.

- DB 쿼리의 성능을 높이는 방법
  - 더 비싼 하드웨어로 교체
  - 시스템 튜닝
  - 데이터 모델링을 통한 성능 개선
  - 쿼리 튜닝

- RDB vs NoSQL (mongoDB, Hadoop, NoSQL)
  - RDB는 수평확장이 안된다..

- 원인을 알아야한다.
  - 정적 분석 : 실제 실행 전 성능을 예측하는 방법, 쿼리 플랜보기
  - 프로파일링 : 실제 실행 후, 실행결과를 분석하는 방법

- MySQL에서 쿼리 플랜을 보려면, explain 명령어를 써야한다.
  - 예를 들어, select * from user; 라는 명령어의 쿼리플랜을 보려면,
  > explain select * from user;

    라고 치면 된다.

---
