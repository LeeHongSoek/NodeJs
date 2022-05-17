# NodeJs

# Node.Js

node.js 공부를 위한 저장소...

# [토크ON 26차. Node.js 기반의 REST API 서버 개발 | T아카데미](https://www.youtube.com/watch?v=3dBnLSsnqic&list=PL9mhQYIlKEhfEAgBlIhl7iBKJcHGekml1)

https://www.youtube.com/playlist?list=PL9mhQYIlKEhfEAgBlIhl7iBKJcHGekml1

https://tacademy.skplanet.com/live/player/onlineLectureDetail.action?seq=134

**T아카데미 온라인 강의- [토크ON세미나]Node.js 기반의 REST API 서버 개발 (총7강)
**[https://tacademy.skplanet.com/live/pl...](https://www.youtube.com/redirect?event=playlist_description&redir_token=QUFFLUhqbHUyNFBGZTU3X2ZUVHZNMm9qUmZQczdRTWx0Z3xBQ3Jtc0tsTmtwazV5SUp5cEJOb01MRFpIVTdLNEE3US1nelpqbWtUQTRDTnJ3VDdPVDIwTWNhSEg5SC1kX0t0bk16Mjc1M3FQNGVXNVpVS1VhWDNUOUFLd0pqUEVvOWRCdUpISjdWbko1cy12NVdYaWZOY3I4WQ&q=https%3A%2F%2Ftacademy.skplanet.com%2Flive%2Fplayer%2FonlineLectureDetail.action%3Fseq%3D134)

[과정 소개]
스물 여섯 번째 세미나 주제는 ‘Node.js 기반의 서버 개발’입니다.
테스트주도개발(TDD)로 Node.js를 이용해 API 서버개발을 학습할 수 있는 세미나 입니다. 자바스크립트 기술로 구현된 Node.js와 대표적인 웹 프레임웍인 Express.js의 기본 원리를 이해하고, 이를 기반으로 모바일과 웹서비스에서 사용하는 REST API 개발 방법을 학습합니다.
바로 실무에서 API 서버 개발을 해야하거나, TDD를 업무에 적용하고 싶은 분들께 많은 도움이 될 것입니다.

[학습 대상]
Node.js 기반 백엔드 개발에 관심있는 대학(원)생, 취업준비생

이 밖에 다양한 IT 강좌를 T아카데미 홈페이지(tacademy.skplanet.com) 및 유투브 채널 (Skplanet Tacademy)에서 만나보실 수 있습니다.
[https://tacademy.skplanet.co](https://www.youtube.com/redirect?event=playlist_description&redir_token=QUFFLUhqbm5zeVB4WFROR0sxWkZ5cFBsN2lZS0RIOTg1Z3xBQ3Jtc0tsN3h5c1BRWmZkZDN0eTF2MHdWVVRWQURHTkFwaHRnMjJ5Nnl6eDFSREQ2bG91OGlTeThvZk45YngyVkZfS0JqbzdIek93cFdSaEQ1S3hyUEQwZmtYTjZ0bEdHSVk5aG5PbDJDU2VvWVg5d2ZRbmQ2Zw&q=https%3A%2F%2Ftacademy.skplanet.com)




// 서버자원 호출

app.get // 자원을 조회

app.post // 자원을 생성

app.delete  // 자원을 삭제

app.put // 자원을 갱신

app.patch // 자원을 갱신


HTTP 상태코드

• 1xx: 아직 처리중

• 2xx: 자, 여기있어!

• 3xx: 잘 가~ (redirect)

• 4xx: 니가 문제임

• 5xx: 내가 문제임

• 200: 성공(success), GET, PUT

• 201: 작성됨(created), POST

• 204: 내용 없음 (No Conent), DELETE

• 400: 잘못된 요청 (Bad Request)

• 401: 권한 없음 (Unauthorized)

• 404: 찾을 수 없음 (Not found)

• 409: 충돌 (Conflict)

• 500: 서버 에러 (Interel server error)
