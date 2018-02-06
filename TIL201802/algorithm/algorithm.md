# TIL (알고리즘)

# 2018.02.01 ~ 2018.02.28 (예정)

## 1. String

## 2. Sorting

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
