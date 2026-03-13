# 리액션(Reaction)

롤링 페이퍼 객체에 대한 리액션 데이터를 저장합니다.

## 반환 모델

- **id: integer**
  - 답변 객체에 대한 고유 식별자.

- **recipientId: integer**
  - 롤링 페이퍼 대상 객체에 대한 고유 식별자. 어떤 대상에 대한 리액션인지를 저장합니다.

- **emoji: string**
  - 이모지 이름.

- **count: integer**
  - 총 받은 리액션 수.

## 엔드포인트

```
POST /{team}/recipients/{recipient_id}/reactions/
GET  /{team}/recipients/{recipient_id}/reactions/
```

/{team} 부분은 [[API Test#Team 파라미터]] 확인

## 대상에게 리액션 달기

### 엔드포인트

```
POST /{team}/recipients/{recipient_id}/reactions/
```

URL 파라미터 `recipientId` 대상에 대한 리액션을 답니다.

### 바디 파라미터

**emoji: string required** 이모지 이름.

**type: string (**`”increase” | “decrease”`**) required**

이모지 개수를 늘릴 건지 줄일 건지. `”increase” | “decrease”` 중 하나의 값이어야 한다.

### 리퀘스트 예시

https://rolling-api.vercel.app/23-2/recipients/16557/reactions/

```json
{
  "emoji": "👍",
  "type": "increase"
}
```

### 리턴 내용

유효한 URL 파라미터를 제공했을 시, 201 상태 코드와 함께 바디에는 새롭게 생성된 답변 객체가 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

```json
{
  "emoji": "👍",
  "id": 15981,
  "recipient_id": 16557,
  "count": 1
}
```

## 대상에게 단 리액션 조회

### 엔드포인트

```
GET  /{team}/recipients/{recipient_id}/reactions/
```

URL 파라미터 `recipientId` 대상에 단 리액션을 조회합니다. 객체 목록은 리액션이 많은 순서로 리턴됩니다.

### 쿼리(Query) 파라미터

- **limit: integer**
  - 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.

- **offset: integer**
  - 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.

### 리퀘스트 예시

```
GET https://rolling-api.vercel.app/23-2/recipients/16557/reactions/
```

### 리턴 내용

유효한 파라미터를 보냈을 시, 200 상태 코드와 함께 메세지 **객체 목록**과 메타 데이터가 바디로 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

- **count: integer**
  - 총 리액션 대상 객체 수.

- **next: string**
  - 리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 다음 limit개 객체를 리턴받기 위한 URL. 순서상 앞에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

- **previous: string**
  - 리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 전 limit개 객체를 리턴받기 위한 URL. 순서상 뒤에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

- **results: reaction[]**
  - 리액션 객체 목록.

### 성공 리스폰스 바디 예시

https://rolling-api.vercel.app/23-2/recipients/16557/reactions/

```json
{
  "count": 1,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 15981,
      "emoji": "👍",
      "count": 1
    }
  ]
}
```
