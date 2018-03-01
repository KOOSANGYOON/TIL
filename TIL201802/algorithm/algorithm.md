# TIL (알고리즘)

# 2018.02.01 ~ 2018.02.28 (예정)

## 1. String

## 2. Sorting

## 3. DP (Dynamic Programming) - 동적 프로그래밍

## 4. 그래프 이론
---
## 1. String

- 문자열 삭제 / ascii 코드 사용 / 문자열 추가 등의 문제

  String builder / buffer 사용하면, append / delete 등의 기능을 사용할 수 있다. 단일 스레드일 때는 builder를 쓰고, 아닐때에는(멀티 스레드일 때,) buffer를 쓰는게 맞는것 같지만, 현재의 알고리즘 문제에서는 거의 builder 를 사용하면 될 것 같다.

- hacker rank - two character 문제

    dynamic programming 을 배우고 나면 굉장히 쉽게 풀 수 있다. 그 전에는 생각보다
    어려우니 좌절하지 말자.

- ascii 코드 문제

    '%' 를 이용해 범위를 지정해주는 것 중요.

---
## 2. Sorting

- bubble sort
- quick sort

---
## 3. DP (Dynamic Programming) - 동적 프로그래밍

### 동적 프로그래밍의 기초

**동적 계획법(Dynamic Programming)**, 줄여서 DP는 특정 범위까지의 값을 구하기 위해서 그것과 다른 범위까지의 값을 이용하여 효율적으로 값을 구하는 알고리즘 설계 기법이다.

- 최적화 기법 중 하나로 `재귀(recursion)를 이용` 하여 `최적화 솔루션을 얻어내는 방식` 을 사용한다.

- 동적 프로그래밍으로 풀 수 있는 가장 유명한 문제로 피보나치 문제를 들 수 있다.

이것만 살펴보면 DP를 쉽게 이해할 수 있다.

- 피보나치 수열을 이용한 이해

  피보나치 수열을 수학적으로 구해보면,
  ```
  f(1) = 1
  f(2) = 1
  f(n) = f(n-1) + f(n-2) when n > 2
  ```
  와 같이 구현되고, 이를 컴퓨터 언어로 작성하면,

  ```java
  int f(int n)
  {
      if(n <= 2)
          return 1;
      else
          return f(n-1)+f(n-2);
  }
  ```
  와 같이 구현된다. 이는 숫자가 작을때에는 상관없지만, 숫자가 클 경우에 시간 복잡도 뿐 아니라
  공간 복잡도가 엄청나게 커진다.(이런 걸 Exponential Explosion이라고 한다)

  시간 복잡도야 기다린다고 해도, 공간 복잡도의 경우 스택 오버플로우가 발생해 프로그램이 튕기게
  된다. DP에서는 이러한 반복계산을 막기 위해 이전에 계산한 값들을 저장해둔다.

  ```java
  static int f_data[N] = {1, 1}; // N은 정의하기 나름
  static int last_pos = 1; // 마지막으로 계산한 지점. 이 코드에선 이미 f_data[1]까지 정의되어있기 때문에 1로 초기화한다.
  static int f(int n) { //피보나치 수열의 제 n항을 구한다. 배열의 관점에서는 n-1번째 요소를 구하는 것.
      int i;
      if(f_data[n-1] == 0)  // 아직 구한 적이 없으면 구한다
      {
          for(i=last_pos+1; i<n; ++i)
          {
              f_data[i] = f_data[i-1] + f_data[i-2];
          }
          last_pos = n-1;
      }
      return f_data[n-1];
  }
  ```

---
## 4. 그래프 이론

### 그래프의 탐색

- 그래프의 탐색 기법

  크게 `너비 우선 탐색(BFS`) / `깊이 우선 탐색(DFS)` / `다익스트라` / `플로이드 와샬` 4가지로 구분된다. 이 중 `BFS` 와 `DFS` 를 확실하게 이해하자.
