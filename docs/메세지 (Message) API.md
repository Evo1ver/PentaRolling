# 메세지 (Message)

롤링 페이퍼 대상에게 남기는 메세지 데이터를 저장합니다.

## 반환 모델

- **id: integer**
  - 객체에 대한 고유 식별자.

- \*\*team: string
  - sprint team
  - 일반적으로 숫자를 넣는 듯

- **recipientId: integer**
  - 롤링 페이퍼 대상 객체에 대한 고유 식별자. “누구”에 대한 메세지인지를 저장합니다.

- **sender: string**
  - 메세지를 남긴 사람의 이름.

- **profileImageURL: string**
  - 메세지가 사용할 프로필 사진에 대한 URL.

- **relationship: string (**`”친구” | “지인” | “동료” | “가족”`**)**
  - 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. `”친구” | “지인” | “동료” | “가족”` 중 하나의 값이어야 한다.

- **content: string**
  - 메세지 내용.

- **font: string (**`"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”`**)**
  - 메세지가 사용할 폰트. `"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”` 중 하나의 값이어야 한다.

- **createdAt: string**
  - 객체가 생성된 시점.

### 예시

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 31924,
      "recipientId": 16351,
      "sender": "힘내자",
      "profileImageURL": "https://picsum.photos/id/1082/100/100",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"화이티잉~~\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-09T05:31:08.455826Z"
    },
    {
      "id": 31923,
      "recipientId": 16351,
      "sender": "익명",
      "profileImageURL": "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"화이팅\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-09T05:27:24.145789Z"
    }
  ]
}
```

## 엔드포인트

```
POST   /{team}/recipients/{recipientId}/messages/
GET    /{team}/recipients/{recipientId}/messages/
GET    /{team}/messages/{messageId}/
PUT    /{team}/messages/{messageId}/
PATCH  /{team}/messages/{messageId}/
DELETE /{team}/messages/{messageId}/
```

/{team} 부분은 [[API Test#Team 파라미터]] 확인

## 대상에게 보내는 메세지 생성

### 엔드포인트

```
POST   /{team}/recipients/{recipientId}/messages/
```

URL 파라미터 `recipientId` 대상에게 보내는 메세지 객체를 생성합니다.

### 바디 파라미터

- **sender: string required**
  - 메세지를 남긴 사람의 이름.

- **profileImageURL: string required**
  - 메세지가 사용할 프로필 사진에 대한 URL.

- **relationship: string (**`”친구” | “지인” | “동료” | “가족”`**) required**
  - 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. `”친구” | “지인” | “동료” | “가족”` 중 하나의 값이어야 한다.

- **content: string required**
  - 메세지 내용.

- **font: string (**`"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”`**) required**
  - 메세지가 사용할 폰트. `"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”` 중 하나의 값이어야 한다.

### 리퀘스트 예시

https://rolling-api.vercel.app/23-2/recipients/16557/messages/

```json
{
  "id": 32797,
  "recipientId": 16557,
  "sender": "ㅇㅇ",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "동료",
  "content": "열심히 일하는 모습 멋있습니다.",
  "font": "Pretendard",
  "createdAt": "2026-03-06T16:43:49.722510Z"
}
```

### 리턴 내용

유효한 URL 파라미터를 제공했을 시, 201 상태 코드와 함께 바디에는 새롭게 생성된 메세지 객체가 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

### 성공 리스폰스 바디 예시

```json
{
  "id": 32,
  "recipientId": 2,
  "sender": "김하은",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "가족",
  "content": "열심히 일하는 모습 멋있습니다.",
  "font": "Pretendard",
  "createdAt": "2023-11-01T08:33:02.124377Z"
}
```

## 대상에게 보낸 메세지 목록 조회

### 엔드포인트

```
GET    /{team}/recipients/{recipientId}/messages/
```

URL 파라미터 `recipientId` 대상에게 보낸 메세지 목록을 조회하는 데 사용됩니다. 객체 목록은 최신순으로 리턴됩니다.

### 쿼리(Query) 파라미터

- **limit: integer**
  - 리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.

- **offset: integer**
  - 가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.

### 리퀘스트 예시

```
GET https://rolling-api.vercel.app/22-2/recipients/16351/messages/
```

### 리턴 내용

유효한 파라미터를 보냈을 시, 200 상태 코드와 함께 메세지 **객체 목록**과 메타 데이터가 바디로 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

- **count: integer**
  - 총 메시지 객체 수.

- **next: string**
  - 리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 다음 limit개 객체를 리턴받기 위한 URL. 순서상 앞에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

- **previous: string**
  - 리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 전 limit개 객체를 리턴받기 위한 URL. 순서상 뒤에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

- **results: message[]**
  - 메세지 객체 목록.

### 성공 리스폰스 바디 예시

```json
{
  "count": 2,
  "next": null,
  "previous": null,
  "results": [
    {
      "id": 31924,
      "recipientId": 16351,
      "sender": "힘내자",
      "profileImageURL": "[https://picsum.photos/id/1082/100/100](https://picsum.photos/id/1082/100/100)",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"화이티잉~~\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-09T05:31:08.455826Z"
    },
    {
      "id": 31923,
      "recipientId": 16351,
      "sender": "익명",
      "profileImageURL": "[https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png](https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png)",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"화이팅\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-09T05:27:24.145789Z"
    }
  ]
}
```

## 특정 메세지 조회

### 엔드포인트

```
GET    /{team}/messages/{messageId}/
```

### 리퀘스트 예시

```
GET    https://rolling-api.vercel.app/23-2/messages/32797/
```

### 리턴 내용

```json
{
  "id": 32797,
  "recipientId": 16557,
  "sender": "ㅇㅇ",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "동료",
  "content": "열심히 일하는 모습 멋있습니다.",
  "font": "Pretendard",
  "createdAt": "2026-03-06T16:43:49.722510Z"
}
```

## 특정 메세지 내용 전체 변경

### 엔드포인트

```
PUT    /{team}/messages/{messageId}/
```

### 바디 파라미터

- **team: string required**
  - 해당하는 team
  - 다른 요청들(POST 등)은 request를 보낼 때 주소 창에 {team}이 있어서 자동으로 처리하는 것 같지만 현재 요청에서는 멱등성을 지키기 위해 (아마도?) 요청 시 team 속성을 넣어야만 하게 강제하고 있다.

- **recipientId: string required**
  - 해당 메세지가 속한 대상의 id

- **sender: string required**
  - 해당 메세지를 보낸 발신자

- **profileImageURL: string required**
  - 메세지가 사용할 프로필 사진에 대한 URL.

- **relationship: string (**`”친구” | “지인” | “동료” | “가족”`**) required**
  - 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. `”친구” | “지인” | “동료” | “가족”` 중 하나의 값이어야 한다.

- **content: string required**
  - 메세지 내용.

- **font: string (**`"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”`**) required**
  - 메세지가 사용할 폰트. `"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”` 중 하나의 값이어야 한다.

### 리퀘스트 예시

https://rolling-api.vercel.app/23-2/messages/32797/

```json
{
  "team": "23-2",
  "recipientId": 16557,
  "sender": "asdf",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "친구",
  "content": "Test",
  "font": "Pretendard"
}
```

### 리턴 내용

```json
{
  "id": 32797,
  "recipientId": 16557,
  "sender": "asdf",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "친구",
  "content": "Test",
  "font": "Pretendard",
  "createdAt": "2026-03-06T16:43:49.722510Z"
}
```

## 특정 메세지 내용 일부 변경

### 엔드포인트

```
PATCH  /{team}/messages/{messageId}/
```

### 바디 파라미터

- **team: string**
  - 해당하는 team
  - 다른 요청들(POST 등)은 request를 보낼 때 주소 창에 {team}이 있어서 자동으로 처리하는 것 같지만 현재 요청에서는 멱등성을 지키기 위해 (아마도?) 요청 시 team 속성을 넣어야만 하게 강제하고 있다.

- **recipientId: string**
  - 해당 메세지가 속한 대상의 id

- **sender: string**
  - 해당 메세지를 보낸 발신자

- **profileImageURL: string**
  - 메세지가 사용할 프로필 사진에 대한 URL.

- **relationship: string (**`”친구” | “지인” | “동료” | “가족”`**)**
  - 롤링 페이퍼 대상과 메세지를 남기는 사람 사이 관계. `”친구” | “지인” | “동료” | “가족”` 중 하나의 값이어야 한다.

- **content: string**
  - 메세지 내용.

- **font: string (**`"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”`**)**
  - 메세지가 사용할 폰트. `"Noto Sans” | "Pretendard” | "나눔명조” | "나눔손글씨 손편지체”` 중 하나의 값이어야 한다.

### 리퀘스트 예시

https://rolling-api.vercel.app/23-2/messages/32798/

```json
{
  "font": "Noto Sans"
}
```

### 리턴 내용

```json
{
  "id": 32798,
  "recipientId": 16557,
  "sender": "ㅇㅇ",
  "profileImageURL": "https://fastly.picsum.photos/id/311/200/200.jpg?hmac=CHiYGYQ3Xpesshw5eYWH7U0Kyl9zMTZLQuRDU4OtyH8",
  "relationship": "동료",
  "content": "열심히 일하는 모습 멋있습니다.",
  "font": "Noto Sans",
  "createdAt": "2026-03-06T18:26:38.056864Z"
}
```

## 특정 메세지 삭제

### 엔드포인트

```
DELETE /{team}/messages/{messageId}/
```

URL 파라미터 `messageId` 에 해당하는 메세지 객체를 삭제합니다.

### 리퀘스트 예시

```
DELETE https://rolling-api.vercel.app/23-2/messages/32797/
```

### 리턴 내용

유효한 URL 파라미터를 제공했을 시, 204 상태 코드가 리턴됩니다. 바디에는 아무 데이터가 리턴되지 않습니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.
