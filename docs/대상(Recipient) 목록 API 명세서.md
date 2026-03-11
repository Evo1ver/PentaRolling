# 대상 (Recipient)

게시판에 등록하는 롤링 페이퍼 대상 데이터를 저장합니다.

## 반환 모델

- **id: integer**
  - 롤링 페이퍼 대상 객체에 대한 고유 식별자.

- **name: string**
  - 롤링 페이퍼 대상의 이름.

- **backgroundColor: string** (`“beige” | “purple” | “blue” | “green”`)
  - 롤링 페이퍼 대상 게시글이 사용할 배경색. `“beige” | “purple” | “blue” | “green”` 중 하나의 값을 사용해야 한다.
  - 만약 그 이외의 값을 사용 시 error 반환

- **backgroundImageURL: string**
  - 롤링 페이퍼 대상 게시글이 사용할 배경 사진에 대한 URL.
  - null이 아닐 시 backgroundImage가 있다고 가정하고 이미지 불러오기
  - null이라면 backgroundColor가 배경

- **messageCount: integer**
  - 롤링 페이퍼 대상에 달린 총 메세지 수.

- **recentMessages: message\[]**
  - 롤링 페이퍼 대상에 대한 가장 최신 메세지 3개.

- **reactionCount: integer**
  - 롤링 페이퍼 대상에 달린 리액션 총 수.

- **topReactions: reaction\[]**
  - 롤링 페이퍼 대상에 가장 많이 달린 리액션 3개.

- **createdAt: string**
  - 객체가 생성된 시점.

## 엔드포인트

```
POST   /{team}/recipients/
GET    /{team}/recipients/
GET    /{team}/recipients/{recipientId}/
DELETE /{team}/recipients/{recipientId}/
```

/{team} 부분은 [[API Test#Team 파라미터]] 확인

## 롤링 페이퍼 대상 생성

### 엔드포인트

```
POST /{team}/recipients/
```

파라미터로 넘겨준 값을 사용해서 새로운 롤링 페이퍼 대상 객체를 생성합니다.

### 바디 파라미터

- **name: string required**
  - 롤링 페이퍼 대상의 이름.

- **backgroundColor: string required**
  - 롤링 페이퍼 대상 게시글이 사용할 배경색. `“beige” | “purple” | “blue” | “green”` 중 하나의 값을 사용해야 한다.
  - `backgroundImageUrl` 속성은 넘겨주지 않으면 자동으로 null 취급

### 리퀘스트 예시

```
POST https://rolling-api.vercel.app/23-2/recipients/
```

```json
{
  "name": "강영훈",
  "backgroundColor": "purple"
}
```

### 리턴 내용

객체 생성 성공할 시, 201 상태 코드와 함께 롤링 페이퍼 대상 객체가 리스폰스 바디로 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

```json
{
  "id": 13,
  "name": "강영훈",
  "backgroundColor": "purple",
  "backgroundImageURL": null,
  "createdAt": "2023-11-01T08:00:09.135025Z",
  "messageCount": 0,
  "recentMessages": [],
  "reactionCount": 0,
  "topReactions": []
}
```

## 롤링 페이퍼 대상 목록 조회

### 엔드포인트

```
GET    /{team}/recipients/
```

롤링페이퍼 대상 객체 목록을 조회합니다

### 쿼리(Query) 파라미터

**limit: integer**

리턴받기 원하는 질문 대상 객체 수. 값을 전달하지 않으면 8개의 객체가 리턴됩니다.

**offset: integer**

가장 앞 객체부터 건너뛰고 싶은 객체 수. 값을 전달하지 않으면 건너뛰지 않습니다.

**sort: string (`”like”`)**

객체 목록 정렬 기준. `"like"` 를 전달하면 목록이 총 리액션 수 (`reactionCount`) 순서대로 목록이 정렬돼서 리턴됩니다. 값을 전달하지 않으면 최신순으로 정렬됩니다.

### 리퀘스트 예시

```
GET https://rolling-api.vercel.app/22-2/recipients/
```

### 리턴 내용

유효한 파라미터를 보냈을 시, 200 상태 코드와 함께 롤링 페이퍼 대상 객체 목록과 메타 데이터가 바디로 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

**count: integer**

총 질문 대상 객체 수.

**next: string**

리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 다음 limit개 객체를 리턴받기 위한 URL. 순서상 앞에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

**previous: string**

리퀘스트에 사용된 offset, limit, sort 파라미터 기준, 목록 순서상 전 limit개 객체를 리턴받기 위한 URL. 순서상 뒤에 limit개 이상의 객체가 없으면 `null` 이 리턴됩니다.

**results: recipient[]**

롤링 페이퍼 대상 객체 목록.

### 성공 리스폰스 바디 예시

https://rolling-api.vercel.app/22-2/recipients/?limit=5&sort=like

```json
{
  "count": 23,
  "next": "https://rolling-api.vercel.app/22-2/recipients/?format=json&limit=5&offset=5&sort=like",
  "previous": null,
  "results": [
    {
      "id": 16225,
      "name": "이사통",
      "backgroundColor": "beige",
      "backgroundImageURL": "https://picsum.photos/id/683/3840/2160",
      "createdAt": "2026-02-05T15:39:24.528157Z",
      "messageCount": 1,
      "recentMessages": [
        {
          "id": 31660,
          "recipientId": 16225,
          "sender": "무희",
          "profileImageURL": "https://picsum.photos/id/547/100/100",
          "relationship": "친구",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":\"center\"},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#6a58f9\"}},{\"type\":\"bold\"},{\"type\":\"highlight\",\"attrs\":{\"color\":\"#ffffff\"}}],\"text\":\"\\\"나랑 오로라 보러 갈래?\\\"\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null}}]}",
          "font": "나눔손글씨 손편지체",
          "createdAt": "2026-02-05T15:41:52.275199Z"
        }
      ],
      "reactionCount": 57,
      "topReactions": [
        {
          "id": 15654,
          "emoji": "🌈",
          "count": 50
        },
        {
          "id": 15747,
          "emoji": "🍐",
          "count": 6
        },
        {
          "id": 15870,
          "emoji": "😁",
          "count": 1
        }
      ]
    },
    {
      "id": 16216,
      "name": "김석진",
      "backgroundColor": "beige",
      "backgroundImageURL": "https://picsum.photos/id/599/3840/2160",
      "createdAt": "2026-02-05T13:37:23.144474Z",
      "messageCount": 3,
      "recentMessages": [
        {
          "id": 31755,
          "recipientId": 16216,
          "sender": "김민지",
          "profileImageURL": "https://picsum.photos/id/859/100/100",
          "relationship": "가족",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"안녕\"}]}]}",
          "font": "나눔손글씨 손편지체",
          "createdAt": "2026-02-06T12:22:38.078745Z"
        },
        {
          "id": 31624,
          "recipientId": 16216,
          "sender": "아미2",
          "profileImageURL": "https://picsum.photos/id/494/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~ \"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"컴백 축하합니다~~\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null}}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T13:38:56.150845Z"
        },
        {
          "id": 31619,
          "recipientId": 16216,
          "sender": "아미1",
          "profileImageURL": "https://picsum.photos/id/522/100/100",
          "relationship": "동료",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"잘생겼다!!!!\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T13:37:37.394404Z"
        }
      ],
      "reactionCount": 33,
      "topReactions": [
        {
          "id": 15647,
          "emoji": "😍",
          "count": 32
        },
        {
          "id": 15650,
          "emoji": "🤣",
          "count": 1
        }
      ]
    },
    {
      "id": 16215,
      "name": "김현진",
      "backgroundColor": "beige",
      "backgroundImageURL": "https://picsum.photos/id/683/3840/2160",
      "createdAt": "2026-02-05T13:37:12.422200Z",
      "messageCount": 17,
      "recentMessages": [
        {
          "id": 31761,
          "recipientId": 16215,
          "sender": "아일릿",
          "profileImageURL": "https://learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com/sprint-proj-image/default_avatar.png",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"완벽한 날씨\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"딱 맞는 playlist\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"오늘의 selfie\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"I say I'm lucky\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"세상은 chocolate\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"삼키자 so sweet\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"긍정의 치트키\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Lucky girl syndrome oh\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"I don't need I don't need I don't need\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"어떤 golden ticket도\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"All I need all I need all I need\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"내 자신을 믿는 것\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Finally finally finally\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"다 이뤄질 거야\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"매일 주문을 외워\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah I'm a lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah you're a lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah we're so lucky\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Luck luck luck luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Luck 주문을 걸어 luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"난 정말 lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"넌 정말 lucky girl girl girl girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"찍어봐 breakfast\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"선택은 best choice\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"도착한 crossroad\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"신호는 green light\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"마주친 눈에\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"터진 웃음에\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"붙여봐 hashtag\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"#lucky_girl_syndrome oh\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"설렘이 설렘이 설렘이\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"계속 차오르는 걸\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"I believe I believe I believe\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"이뤄져 믿는 대로\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Finally finally finally\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"넌 이유를 아니? (why?)\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Together you and me\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah I'm a lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah you're a lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Yeah we're so lucky\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Luck luck luck luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Luck 주문을 걸어 luck\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"난 정말 lucky girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"넌 정말 lucky girl girl girl girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Oh my girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"주문을 걸어 say\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"That's my girl\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}]},{\"type\":\"text\",\"marks\":[{\"type\":\"textStyle\",\"attrs\":{\"color\":\"#82c6d3\"}}],\"text\":\"Lucky girl syndrome\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-06T14:49:49.418392Z"
        },
        {
          "id": 31724,
          "recipientId": 16215,
          "sender": "윤동주",
          "profileImageURL": "https://picsum.photos/id/571/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"The only way out is through\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-06T04:49:24.660311Z"
        },
        {
          "id": 31652,
          "recipientId": 16215,
          "sender": "박이도",
          "profileImageURL": "https://picsum.photos/id/571/100/100",
          "relationship": "동료",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"You’re not behind—you’re becoming.\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"bold\"}]},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Every step that feels slow is shaping clarity, resilience, and direction.\"},{\"type\":\"hardBreak\",\"marks\":[{\"type\":\"bold\"}]},{\"type\":\"text\",\"marks\":[{\"type\":\"bold\"}],\"text\":\"Keep moving with intention; the version of you you’re building is already on its way.\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T14:04:10.149846Z"
        }
      ],
      "reactionCount": 28,
      "topReactions": [
        {
          "id": 15652,
          "emoji": "🫡",
          "count": 8
        },
        {
          "id": 15728,
          "emoji": "☺️",
          "count": 3
        },
        {
          "id": 15724,
          "emoji": "😉",
          "count": 2
        }
      ]
    },
    {
      "id": 16222,
      "name": "강민재",
      "backgroundColor": "beige",
      "backgroundImageURL": "https://picsum.photos/id/1058/3840/2160",
      "createdAt": "2026-02-05T14:00:30.507837Z",
      "messageCount": 1,
      "recentMessages": [
        {
          "id": 31647,
          "recipientId": 16222,
          "sender": "김경수",
          "profileImageURL": "https://picsum.photos/id/547/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"토요일 축구 ㄱㄱㄱㄱㄱ\"}]}]}",
          "font": "나눔명조",
          "createdAt": "2026-02-05T14:01:18.076830Z"
        }
      ],
      "reactionCount": 27,
      "topReactions": [
        {
          "id": 15742,
          "emoji": "⚽",
          "count": 19
        },
        {
          "id": 15741,
          "emoji": "🏣",
          "count": 4
        },
        {
          "id": 15743,
          "emoji": "🧥",
          "count": 3
        }
      ]
    },
    {
      "id": 16224,
      "name": "코드잇",
      "backgroundColor": "purple",
      "backgroundImageURL": null,
      "createdAt": "2026-02-05T14:06:53.867249Z",
      "messageCount": 3,
      "recentMessages": [
        {
          "id": 31671,
          "recipientId": 16224,
          "sender": "배고픈 사람“‘(\u003C]{]",
          "profileImageURL": "https://picsum.photos/id/1082/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"테스트해본다아~\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T18:06:30.652879Z"
        },
        {
          "id": 31655,
          "recipientId": 16224,
          "sender": "스프린터1",
          "profileImageURL": "https://picsum.photos/id/437/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"밑줄이 나오네~?\"}]}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T14:07:26.407516Z"
        },
        {
          "id": 31654,
          "recipientId": 16224,
          "sender": "송현",
          "profileImageURL": "https://picsum.photos/id/547/100/100",
          "relationship": "지인",
          "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"underline\"}],\"text\":\"너무 어렵다......\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null}}]}",
          "font": "Noto Sans",
          "createdAt": "2026-02-05T14:07:03.933293Z"
        }
      ],
      "reactionCount": 27,
      "topReactions": [
        {
          "id": 15656,
          "emoji": "☺️",
          "count": 11
        },
        {
          "id": 15655,
          "emoji": "😊",
          "count": 8
        },
        {
          "id": 15657,
          "emoji": "😉",
          "count": 8
        }
      ]
    }
  ]
}
```

## 롤링 페이퍼 대상 조회

### 엔드포인트

```
GET /{team}/recipients/{recipientId}/
```

URL 파라미터 `recipientId` 에 해당하는 롤링 페이퍼 대상 객체를 조회합니다.

### 리퀘스트 예시

```
GET https://rolling-api.vercel.app/22-2/recipients/16224/
```

### 리턴 내용

유효한 URL 파라미터를 제공했을 시, 200 상태 코드와 함께 바디에 롤링 페이퍼 대상 객체가 리턴됩니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.

### 성공 리스폰스 바디 예시

```json
{
  "id": 16224,
  "name": "코드잇",
  "backgroundColor": "purple",
  "backgroundImageURL": null,
  "createdAt": "2026-02-05T14:06:53.867249Z",
  "messageCount": 3,
  "recentMessages": [
    {
      "id": 31671,
      "recipientId": 16224,
      "sender": "배고픈 사람“‘(\u003C]{]",
      "profileImageURL": "https://picsum.photos/id/1082/100/100",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"테스트해본다아~\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-05T18:06:30.652879Z"
    },
    {
      "id": 31655,
      "recipientId": 16224,
      "sender": "스프린터1",
      "profileImageURL": "https://picsum.photos/id/437/100/100",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"text\":\"밑줄이 나오네~?\"}]}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-05T14:07:26.407516Z"
    },
    {
      "id": 31654,
      "recipientId": 16224,
      "sender": "송현",
      "profileImageURL": "https://picsum.photos/id/547/100/100",
      "relationship": "지인",
      "content": "{\"type\":\"doc\",\"content\":[{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null},\"content\":[{\"type\":\"text\",\"marks\":[{\"type\":\"underline\"}],\"text\":\"너무 어렵다......\"}]},{\"type\":\"paragraph\",\"attrs\":{\"textAlign\":null}}]}",
      "font": "Noto Sans",
      "createdAt": "2026-02-05T14:07:03.933293Z"
    }
  ],
  "reactionCount": 27,
  "topReactions": [
    {
      "id": 15656,
      "emoji": "☺️",
      "count": 11
    },
    {
      "id": 15655,
      "emoji": "😊",
      "count": 8
    },
    {
      "id": 15657,
      "emoji": "😉",
      "count": 8
    }
  ]
}
```

## 롤링 페이퍼 대상 삭제

### 엔드포인트

```
DELETE /{team}/recipientId/{recipientId}/
```

URL 파라미터 `recipientId` 에 해당하는 롤링 페이퍼 대상 객체를 삭제합니다.

### 리퀘스트 예시

```
DELETE https://rolling-api.vercel.app/23-2/recipients/16556/
```

### 리턴 내용

유효한 URL 파라미터를 제공했을 시, 204 상태 코드가 리턴됩니다. 바디에는 아무 데이터가 리턴되지 않습니다. 실패 시, 적절한 에러 상태 코드와 메세지가 리턴됩니다.
