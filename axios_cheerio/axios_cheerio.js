/**
 * https://velog.io/@yesdoing/Node.js-에서-웹-크롤링하기-wtjugync1m
 * 
 * Node.js 에서 웹 크롤링하기    # npm install axios cheerio
 * 
 * 참조 : https://www.youtube.com/watch?v=aoQSOZfz3vQ
 *   
 */
const axios = require('axios');
const cheerio = require('cheerio');
const log = console.log;

const getHtml = async () => {
    try {
        // 연합뉴스 스포츠
        return await axios.get('https://www.yna.co.kr/sports/all'); 
    } catch (error) {
        console.error(error);
    }
};

getHtml()
    .then((html) => {
        let ulList = [];
        const $ = cheerio.load(html.data);
        const $bodyList = $('div.list-type038 ul').children('li');

        $bodyList.each(function (i, elem) {
            ulList[i] = {
                date: $(this).find('span.txt-time').text(),
                title: $(this).find('strong.tit-news').text(),
                url: $(this).find('a.tit-wrap').attr('href'),
                image_url: $(this).find('a.img img').attr('src'),
                image_alt: $(this).find('a.img img').attr('alt'),
            };
        });

        const data = ulList.filter((n) => n.title);
        return data;
    })
    .then((res) => log(res));

/*
PS C:\MyProject\NodeJs\axios_cheerio> node .\axios_cheerio.js
[
  {
    date: '11-18 22:42',
    title: `맨유, '구단 비난' 호날두에 대응…"계약 위반으로 제소할 듯"(종합)`,
    url: '//www.yna.co.kr/view/AKR20221118158551007?section=sports/all',
    image_url: '//img0.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118158551007_01_i_P2.jpg',
    image_alt: `맨유, '구단 비난' 호날두에 대응…"계약 위반으로 제소할 듯"(종합)`
  },
  {
    date: '11-18 21:59',
    title: "[월드컵] 경기장 주위 맥주 판매, 개막 이틀 앞두고 '금지'",
    url: '//www.yna.co.kr/view/AKR20221118159200007?section=sports/all',
    image_url: '//img9.yna.co.kr/photo/etc/af/2022/11/18/PAF20221118225501009_P2.jpg',
    image_alt: "[월드컵] 경기장 주위 맥주 판매, 개막 이틀 앞두고 '금지'"
  },
  {
    date: '11-18 21:46',
    title: '[프로배구 중간순위] 18일',
    url: '//www.yna.co.kr/view/AKR20221115165553007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 21:44',
    title: '여자배구 흥국생명 4연승 신바람…선두 현대건설 맹추격(종합)',
    url: '//www.yna.co.kr/view/AKR20221118155751007?section=sports/all',
    image_url: '//img9.yna.co.kr/photo/yna/YH/2022/11/18/PYH2022111819140006500_P2.jpg',
    image_alt: '여자배구 흥국생명 4연승 신바람…선두 현대건설 맹추격(종합)'
  },
  {
    date: '11-18 21:42',
    title: "맨유, '구단 비난' 호날두에 대응 시작…내년 1월 방출 등 검토",
    url: '//www.yna.co.kr/view/AKR20221118158500007?section=sports/all',
    image_url: '//img6.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118158500007_01_i_P2.jpg',
    image_alt: "맨유, '구단 비난' 호날두에 대응 시작…내년 1월 방출 등 검토"
  },
  {
    date: '11-18 21:36',
    title: '[프로배구 전적] 18일',
    url: '//www.yna.co.kr/view/AKR20221118158400007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 21:32',
    title: '[월드컵] 아르헨티나, 개막 전 부상 악재…곤살레스·호아킨 코레아 낙마',
    url: '//www.yna.co.kr/view/AKR20221118158200007?section=sports/all',
    image_url: '//img3.yna.co.kr/photo/etc/epa/2022/11/17/PEP20221117033901009_P2.jpg',
    image_alt: '[월드컵] 아르헨티나, 개막 전 부상 악재…곤살레스·호아킨 코레아 낙마'
  },
  {
    date: '11-18 21:20',
    title: '프로농구 인삼공사, 20점 오세근 앞세워 DB 꺾고 단독 1위 도약',
    url: '//www.yna.co.kr/view/AKR20221118157600007?section=sports/all',
    image_url: '//img8.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118157600007_01_i_P2.jpg',
    image_alt: '프로농구 인삼공사, 20점 오세근 앞세워 DB 꺾고 단독 1위 도약'
  },
  {
    date: '11-18 21:01',
    title: '[프로농구 중간순위] 18일',
    url: '//www.yna.co.kr/view/AKR20221118156700007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 20:58',
    title: '[월드컵] 케인도 힘겨워한 불볕더위…잉글랜드, 56년 만의 우승 도전 시작',
    url: '//www.yna.co.kr/view/AKR20221118156500007?section=sports/all',
    image_url: '//img8.yna.co.kr/photo/yna/YH/2022/11/18/PYH2022111818660001300_P2.jpg',
    image_alt: '[월드컵] 케인도 힘겨워한 불볕더위…잉글랜드, 56년 만의 우승 도전 시작'
  },
  {
    date: '11-18 20:55',
    title: "[월드컵] BBC 전문가의 선택…13명 중 7명 '브라질 우승'",
    url: '//www.yna.co.kr/view/AKR20221118156300007?section=sports/all',
    image_url: '//img1.yna.co.kr/photo/etc/af/2022/11/18/PAF20221118007301009_P2.jpg',
    image_alt: "[월드컵] BBC 전문가의 선택…13명 중 7명 '브라질 우승'"
  },
  {
    date: '11-18 20:53',
    title: '피겨 차준환, 점프 실수로 NHK 트로피 쇼트 6위…파이널 먹구름',
    url: '//www.yna.co.kr/view/AKR20221118156200007?section=sports/all',
    image_url: '//img1.yna.co.kr/photo/reuters/2022/11/18/PRU20221118292101009_P2.jpg',
    image_alt: '피겨 차준환, 점프 실수로 NHK 트로피 쇼트 6위…파이널 먹구름'
  },
  {
    date: '11-18 20:52',
    title: '여자농구 우리은행, 2경기 연속 20점 차 이상 완승…단독 선두로',
    url: '//www.yna.co.kr/view/AKR20221118155900007?section=sports/all',
    image_url: '//img5.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118155900007_01_i_P2.jpg',
    image_alt: '여자농구 우리은행, 2경기 연속 20점 차 이상 완승…단독 선두로'
  },
  {
    date: '11-18 20:51',
    title: '[프로농구 전주전적] LG 63-62 KCC',
    url: '//www.yna.co.kr/view/AKR20221118156100007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 20:49',
    title: '[프로농구 원주전적] KGC인삼공사 80-78 DB',
    url: '//www.yna.co.kr/view/AKR20221118155800007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 20:47',
    title: '여자배구 흥국생명 4연승 신바람…선두 현대건설 맹추격',
    url: '//www.yna.co.kr/view/AKR20221118155700007?section=sports/all',
    image_url: '//img9.yna.co.kr/photo/yna/YH/2022/11/18/PYH2022111819140006500_P2.jpg',
    image_alt: '여자배구 흥국생명 4연승 신바람…선두 현대건설 맹추격'
  },
  {
    date: '11-18 20:44',
    title: '[여자농구 중간순위] 18일',
    url: '//www.yna.co.kr/view/AKR20221116159752007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 20:44',
    title: '[여자농구 아산전적] 우리은행 74-52 KB',
    url: '//www.yna.co.kr/view/AKR20221118155600007?section=sports/all',
    image_url: undefined,
    image_alt: undefined
  },
  {
    date: '11-18 17:59',
    title: '"진 팀이 예산안 양보?"…여야, 대립속 22년만에 친선 축구대회(종합)',
    url: '//www.yna.co.kr/view/AKR20221118116451001?section=sports/all',
    image_url: '//img4.yna.co.kr/photo/yna/YH/2022/11/18/PYH2022111814410001301_P2.jpg',
    image_alt: '"진 팀이 예산안 양보?"…여야, 대립속 22년만에 친선 축구대회(종합)'
  },
  {
    date: '11-18 17:59',
    title: 'KPGA 코리안투어 2승 류현우, 퀄리파잉 토너먼트 최종전 1위',
    url: '//www.yna.co.kr/view/AKR20221118143300007?section=sports/all',
    image_url: '//img6.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118143300007_01_i_P2.jpg',
    image_alt: 'KPGA 코리안투어 2승 류현우, 퀄리파잉 토너먼트 최종전 1위'
  },
  {
    date: '11-18 17:35',
    title: '[월드컵] 미국 데이터 업체 "벤투호, 가나 꺾을 가능성 56％"',
    url: '//www.yna.co.kr/view/AKR20221118139600007?section=sports/all',
    image_url: '//img3.yna.co.kr/photo/yna/YH/2022/11/16/PYH2022111623920001300_P2.jpg',
    image_alt: '[월드컵] 미국 데이터 업체 "벤투호, 가나 꺾을 가능성 56％"'
  },
  {
    date: '11-18 17:33',
    title: "[월드컵] 벤투호 훈련장 라커룸 보니…등번호 순 개별 좌석에 '참가증서'",
    url: '//www.yna.co.kr/view/AKR20221118139400007?section=sports/all',
    image_url: '//img2.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118139400007_01_i_P2.jpg',
    image_alt: "[월드컵] 벤투호 훈련장 라커룸 보니…등번호 순 개별 좌석에 '참가증서'"
  },
  {
    date: '11-18 17:27',
    title: '[월드컵] 벤투호 만날 우루과이 GK 모친상…동료들은 묵념으로 애도',
    url: '//www.yna.co.kr/view/AKR20221118138400007?section=sports/all',
    image_url: '//img5.yna.co.kr/etc/inner/KR/2022/11/18/AKR20221118138400007_01_i_P2.jpg',
    image_alt: '[월드컵] 벤투호 만날 우루과이 GK 모친상…동료들은 묵념으로 애도'
  },
  {
    date: '11-18 16:50',
    title: '[월드컵] 월스트리트저널 "2002년 이후 큰 성공 없는 한국 축구"',
    url: '//www.yna.co.kr/view/AKR20221118129300007?section=sports/all',
    image_url: '//img3.yna.co.kr/photo/yna/YH/2022/11/16/PYH2022111623920001300_P2.jpg',
    image_alt: '[월드컵] 월스트리트저널 "2002년 이후 큰 성공 없는 한국 축구"'
  },
  {
    date: '11-18 16:34',
    title: '"오늘만큼은 웃고 격려"…여야, 대립속 22년만에 친선 축구대회',
    url: '//www.yna.co.kr/view/AKR20221118116400001?section=sports/all',
    image_url: '//img4.yna.co.kr/photo/yna/YH/2022/11/18/PYH2022111814410001301_P2.jpg',
    image_alt: '"오늘만큼은 웃고 격려"…여야, 대립속 22년만에 친선 축구대회'
  }
]
*/