# PentaRolling

## 롤링페이퍼 문화를 웹으로 구현한 커뮤니티형 플랫폼

---

## 프로젝트 소개
'PentaRolling'은 상대방의 페이퍼에 들어가서 카드를 작성하는 등 기본적인 CRUD 작업과 이모지를 누르는 이모지 리액션, Modal, Toast, Dropdown 등 UI 요소들이 있는 프로젝트 입니다.


### 주요 기능

- **롤링페이퍼 생성**: 이름을 입력하여 나만의 롤링페이퍼 생성
- **메세지 보내기**: 롤링페이퍼에 메세지 보내기
- **메세지 관리**: 받은 롤링페이퍼 수정/삭제
- **반응하기**: 롤링페이퍼에 이모지 반응
- **공유하기**: 카카오톡, 링크 복사로 피드 공유
- **반응형 디자인**: 모바일, 태블릿, 데스크톱 최적화

---

## 사용 중인 라이브러리

- React
- React-router-dom
- styled-components
- Prettier
- Husky
- ESLint

---

## 프로젝트 구조

```
└─src
    ├─assets
    │  ├─icons
    │  └─images
    ├─components
    │  ├─Card
    │  ├─CardList
    │  ├─CardModal
    │  ├─common
    │  │  ├─Avatar
    │  │  ├─Button
    │  │  ├─Dropdown
    │  │  ├─EmojiBadge
    │  │  ├─Input
    │  │  ├─RelationshipBadge
    │  │  ├─Textarea
    │  │  └─Toast
    │  ├─Header
    │  └─ModalLayout
    ├─constants
    ├─contexts
    ├─hooks
    ├─layouts
    ├─lib
    │  └─api
    ├─pages
    │  ├─CreateRollingPaperPage
    │  ├─EditMessage
    │  ├─ListPage
    │  ├─MainPage
    │  ├─PostMessage
    │  ├─SendMessage
    │  ├─Test
    │  └─UpdateMessage
    └─styles
```

---

## 팀원 및 역할

<table>
<tr>

<td align="center" width="150px">
<a href="https://github.com/Hanbh97">
<img src="https://github.com/Hanbh97.png" width="100px" style="border-radius:50%"/>
</a>
<br/>
<b>한병현</b>
<br/>
<sub>팀 리더<br/>프로젝트 일정 관리, 유저 플로우 최종 확정, 회의 주도, 공통 컴포넌트 Input, Dropdown, Header 제작 및 메인 페이지 제작 </sub>
</td>

<td align="center" width="150px">
<a href="https://github.com/ekdmskwon">
<img src="https://github.com/ekdmskwon.png" width="100px" style="border-radius:50%"/>
</a>
<br/>
<b>권다은</b>
<br/>
<sub>팀원<br/>디자인 제작, 공통 컴포넌트 Textarea, Avatar, Card_list 제작 및 롤링 페이퍼 목록 제작</sub>
</td>

<td align="center" width="150px">
<a href="https://github.com/gnath12">
<img src="https://github.com/gnath12.png" width="100px" style="border-radius:50%"/>
</a>
<br/>
<b>박진아</b>
<br/>
<sub>팀원<br/>공통 컴포넌트 Button, Card 제작 및 롤링 페이퍼에 메세지 보내기, 생성된 롤링 페이퍼 페이지 제작</sub>
</td>

<td align="center" width="150px">
<a href="https://github.com/Evo1ver">
<img src="https://github.com/Evo1ver.png" width="100px" style="border-radius:50%"/>
</a>
<br/>
<b>정태양</b>
<br/>
<sub>팀원<br/>공통 컴포넌트 Toast, Modal, Badge 제작 및 롤링 페이퍼 만들기 페이지, 생성된 롤링 페이퍼 수정 페이지 제작</sub>
</td>


</table>

---

## 코딩 컨벤션

### Commit Convention

| Type | Description |
|------|-------------|
| `feat` | 새로운 기능 추가 |
| `fix` | 버그 수정 |
| `docs` | 문서 수정 |
| `style` | 코드 포맷팅, 세미콜론 누락 등 |
| `design` | 사용자 UI 디자인 변경 |
| `test` | 테스트 코드 추가 |
| `refactor` | 코드 리팩토링 |
| `build` | 빌드 파일 수정 |
| `ci` | CI 설정 파일 수정 |
| `perf` | 성능 개선 |
| `chore` | 빌드 과정 또는 보조 도구 변경 |
| `rename` | 파일 혹은 폴더명을 수정만 한 경우 |
| `remove` | 파일을 삭제만 한 경우 |
