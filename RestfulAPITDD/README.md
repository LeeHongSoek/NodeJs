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


## 1xx (조건부 응답)

요청을 받았으며 작업을 계속한다.

이 상태의 상태 코드는 상태-라인과 선택적 헤더(컴퓨터에서 출력될 때 각 페이지 맨 윗부분에 자동으로 붙는 부분)만을 포함하는 임시의 응답을 나타내고 빈 라인에 의해서 종결된다. HTTP/1.0이래로 어떤 1XX 상태 코드들도 정의 되지 않았다. 서버들은 1XX 응답을 실험적인 상태를 제외하고 HTTP/1.0 클라이언트(서버에 연결된 컴퓨터)로 보내면 안 된다.

* 100(계속): 요청자는 요청을 계속해야 한다. 서버는 이 코드를 제공하여 요청의 첫 번째 부분을 받았으며 나머지를 기다리고 있음을 나타낸다.
* 101(프로토콜 전환): 요청자가 서버에 프로토콜 전환을 요청했으며 서버는 이를 승인하는 중이다.
* 102(처리, [RFC 2518](https://tools.ietf.org/html/rfc2518))

## 2xx (성공)

이 클래스의 상태 코드는 클라이언트가 요청한 동작을 수신하여 이해했고 승낙했으며 성공적으로 처리했음을 가리킨다.

* 200(성공): 서버가 요청을 제대로 처리했다는 뜻이다. 이는 주로 서버가 요청한 페이지를 제공했다는 의미로 쓰인다.
* 201(작성됨): 성공적으로 요청되었으며 서버가 새 리소스를 작성했다.
* 202(허용됨): 서버가 요청을 접수했지만 아직 처리하지 않았다.
* 203(신뢰할 수 없는 정보): 서버가 요청을 성공적으로 처리했지만 다른 소스에서 수신된 정보를 제공하고 있다.
* 204(콘텐츠 없음): 서버가 요청을 성공적으로 처리했지만 콘텐츠를 제공하지 않는다.
* 205(콘텐츠 재설정): 서버가 요청을 성공적으로 처리했지만 콘텐츠를 표시하지 않는다. 204 응답과 달리 이 응답은 요청자가 문서 보기를 재설정할 것을 요구한다(예: 새 입력을 위한 양식 비우기).
* 206(일부 콘텐츠): 서버가 GET 요청의 일부만 성공적으로 처리했다.
* 207(다중 상태, [RFC 4918](https://tools.ietf.org/html/rfc4918))
* 208(이미 보고됨, [RFC 5842](https://tools.ietf.org/html/rfc5842))
* 226 IM Used ([RFC 3229](https://tools.ietf.org/html/rfc3229))

## 3xx (리다이렉션 완료)

클라이언트는 요청을 마치기 위해 추가 동작을 취해야 한다.^[[1]](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C#cite_note-RFC_2616-1)^

* 300(여러 선택항목): 서버가 요청에 따라 여러 조치를 선택할 수 있다. 서버가 사용자 에이전트에 따라 수행할 작업을 선택하거나, 요청자가 선택할 수 있는 작업 목록을 제공한다.
* 301(영구 이동): 요청한 페이지를 새 위치로 영구적으로 이동했다. GET 또는 HEAD 요청에 대한 응답으로 이 응답을 표시하면 요청자가 자동으로 새 위치로 전달된다.
* 302(임시 이동): 현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.
* 303(기타 위치 보기): 요청자가 다른 위치에 별도의 GET 요청을 하여 응답을 검색할 경우 서버는 이 코드를 표시한다. HEAD 요청 이외의 모든 요청을 다른 위치로 자동으로 전달한다.
* 304(수정되지 않음): 마지막 요청 이후 요청한 페이지는 수정되지 않았다. 서버가 이 응답을 표시하면 페이지의 콘텐츠를 표시하지 않는다. 요청자가 마지막으로 페이지를 요청한 후 페이지가 변경되지 않으면 이 응답(If-Modified-Since HTTP 헤더라고 함)을 표시하도록 서버를 구성해야 한다.
* 305(프록시 사용): 요청자는 프록시를 사용하여 요청한 페이지만 액세스할 수 있다. 서버가 이 응답을 표시하면 요청자가 사용할 프록시를 가리키는 것이기도 하다.
* 307(임시 리다이렉션): 현재 서버가 다른 위치의 페이지로 요청에 응답하고 있지만 요청자는 향후 요청 시 원래 위치를 계속 사용해야 한다.
* 308(영구 리다이렉션, RFC에서 실험적으로 승인됨)

## 4xx (요청 오류)

4xx 클래스의 상태 코드는 클라이언트에 오류가 있음을 나타낸다.

* 400(잘못된 요청): 서버가 요청의 구문을 인식하지 못했다.
* 401(권한 없음): 이 요청은 인증이 필요하다. 서버는 로그인이 필요한 페이지에 대해 이 요청을 제공할 수 있다. 상태 코드 이름이 권한 없음(Unauthorized)으로 되어 있지만 실제 뜻은 인증 안됨(Unauthenticated)에 더 가깝다.^[[2]](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C#cite_note-2)^
* 402(결제 필요): 이 요청은 결제가 필요합니다.
* [403](https://ko.wikipedia.org/wiki/HTTP_403 "HTTP 403")(Forbidden, 금지됨): 서버가 요청을 거부하고 있다. 예를 들자면, 사용자가 리소스에 대한 필요 권한을 갖고 있지 않다. (401은 인증 실패, 403은 인가 실패라고 볼 수 있음)
* [404](https://ko.wikipedia.org/wiki/HTTP_404 "HTTP 404")(Not Found, 찾을 수 없음): 서버가 요청한 페이지(Resource)를 찾을 수 없다. 예를 들어 서버에 존재하지 않는 페이지에 대한 요청이 있을 경우 서버는 이 코드를 제공한다.
* 405(허용되지 않는 메소드): 요청에 지정된 방법을 사용할 수 없다. 예를 들어 POST 방식으로 요청을 받는 서버에 GET 요청을 보내는 경우, 또는 읽기 전용 리소스에 PUT 요청을 보내는 경우에 이 코드를 제공한다.
* 406(허용되지 않음): 요청한 페이지가 요청한 콘텐츠 특성으로 응답할 수 없다.
* 407(프록시 인증 필요): 이 상태 코드는 401(권한 없음)과 비슷하지만 요청자가 프록시를 사용하여 인증해야 한다. 서버가 이 응답을 표시하면 요청자가 사용할 프록시를 가리키는 것이기도 한다.
* 408(요청 시간초과): 서버의 요청 대기가 시간을 초과하였다.
* 409(충돌): 서버가 요청을 수행하는 중에 충돌이 발생했다. 서버는 응답할 때 충돌에 대한 정보를 포함해야 한다. 서버는 PUT 요청과 충돌하는 PUT 요청에 대한 응답으로 이 코드를 요청 간 차이점 목록과 함께 표시해야 한다.
* [410](https://ko.wikipedia.org/wiki/410_Gone "410 Gone")(사라짐): 서버는 요청한 리소스가 영구적으로 삭제되었을 때 이 응답을 표시한다. 404(찾을 수 없음) 코드와 비슷하며 이전에 있었지만 더 이상 존재하지 않는 리소스에 대해 404 대신 사용하기도 한다. 리소스가 영구적으로 이동된 경우 301을 사용하여 리소스의 새 위치를 지정해야 한다.
* 411(길이 필요): 서버는 유효한 콘텐츠 길이 헤더 입력란 없이는 요청을 수락하지 않는다.
* 412(사전조건 실패): 서버가 요청자가 요청 시 부과한 사전조건을 만족하지 않는다.
* 413(요청 속성이 너무 큼): 요청이 너무 커서 서버가 처리할 수 없다.
* 414(요청 URI가 너무 긺): 요청 URI(일반적으로 URL)가 너무 길어 서버가 처리할 수 없다.
* 415(지원되지 않는 미디어 유형): 요청이 요청한 페이지에서 지원하지 않는 형식으로 되어 있다.
* 416(처리할 수 없는 요청범위): 요청이 페이지에서 처리할 수 없는 범위에 해당되는 경우 서버는 이 상태 코드를 표시한다.
* 417(예상 실패): 서버는 Expect 요청 헤더 입력란의 요구사항을 만족할 수 없다.
* 418(I'm a teapot, [RFC 2324](https://tools.ietf.org/html/rfc2324) ,[https://google.com/teapot](https://google.com/teapot))
* 420(Enhance Your Calm, 트위터)
* 422(처리할 수 없는 엔티티, WebDAV; [RFC 4918](https://tools.ietf.org/html/rfc4918))
* 423(잠김,WebDAV; [RFC 4918](https://tools.ietf.org/html/rfc4918)): 접근하려는 리소스가 잠겨 있다.
* 424(실패된 의존성, WebDAV; [RFC 4918](https://tools.ietf.org/html/rfc4918))
* 424(메쏘드 실패, WebDAV)
* 425(정렬되지 않은 컬렉션, 인터넷 초안)
* 426(업그레이드 필요, [RFC 2817](https://tools.ietf.org/html/rfc2817)): 클라이언트는 업그레이드 헤더 필드에 주어진 프로토콜로 요청을 보내야 한다.
* 428(전제조건 필요, [RFC 6585](https://tools.ietf.org/html/rfc6585))
* 429(너무 많은 요청, [RFC 6585](https://tools.ietf.org/html/rfc6585)): 사용자가 일정 시간 동안 너무 많은 요청을 보냈다.
* 431(요청 헤더 필드가 너무 큼, [RFC 6585](https://tools.ietf.org/html/rfc6585))
* 444(응답 없음, Nginx)
* 449(다시 시도, 마이크로소프트)
* 450(윈도 자녀 보호에 의해 차단됨, 마이크로소프트)
* 451(법적인 이유로 이용 불가, 인터넷 초안)
* 451(리다이렉션, 마이크로소프트)
* 494(요청 헤더가 너무 큼, Nginx)
* 495(Cert 오류, Nginx)
* 496(Cert 없음, Nginx)
* 497(HTTP to HTTPS, Nginx)
* 499(클라이언트가 요청을 닫음, Nginx)

## 5xx (서버 오류)

서버가 유효한 요청을 명백하게 수행하지 못했음을 나타낸다.^[[1]](https://ko.wikipedia.org/wiki/HTTP_%EC%83%81%ED%83%9C_%EC%BD%94%EB%93%9C#cite_note-RFC_2616-1)^

* 500(내부 서버 오류): 서버에 오류가 발생하여 요청을 수행할 수 없다.
* 501(구현되지 않음): 서버에 요청을 수행할 수 있는 기능이 없다. 예를 들어 서버가 요청 메소드를 인식하지 못할 때 이 코드를 표시한다.
* 502 (Bad Gateway, 불량 게이트웨이): 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 잘못된 응답을 받았다.
* 503(서비스를 사용할 수 없음): 서버가 오버로드되었거나 유지관리를 위해 다운되었기 때문에 현재 서버를 사용할 수 없다. 이는 대개 일시적인 상태이다.
* 504(게이트웨이 시간초과): 서버가 게이트웨이나 프록시 역할을 하고 있거나 또는 업스트림 서버에서 제때 요청을 받지 못했다.
* 505(HTTP 버전이 지원되지 않음): 서버가 요청에 사용된 HTTP 프로토콜 버전을 지원하지 않는다.
* 506(Variant Also Negotiates, [RFC 2295](https://tools.ietf.org/html/rfc2295))
* 507(용량 부족, WebDAV; [RFC 4918](https://tools.ietf.org/html/rfc4918))
* 508(루프 감지됨, WebDAV; [RFC 5842](https://tools.ietf.org/html/rfc5842))
* 509(대역폭 제한 초과, Apache bw/limited extension)
* 510(확장되지 않음, [RFC 2774](https://tools.ietf.org/html/rfc2774))
* 511(네트워크 인증 필요, [RFC 6585](https://tools.ietf.org/html/rfc6585))
* 520(Unknown Error, 알 수 없음)
* 598(네트워크 읽기 시간초과 오류, 알 수 없음)
* 599(네트워크 연결 시간초과 오류, 알 수 없음)