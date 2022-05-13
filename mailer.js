// [Node.js] Nodemailer로 Gmail 연동하여 이메일 보내기 (https://jizard.tistory.com/150)
// npm i nodemailer nodemailer-smtp-transport -S
// https://velog.io/@npcode9194/NodeJS-nodemailer-%EB%AA%A8%EB%93%88%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-Gmail-API-%EC%82%AC%EC%9A%A9-hhjwgcmhsh
// 보안 수준이 낮은 앱 허용을 해줘야 테스트 하는 어플리케이션에서 메일 발송이 가능합니다.
// 아래 URL을 클릭하시면 로그인 되어있는 계정으로 바로 설정 가능합니다.
// https://myaccount.google.com/lesssecureapps

var nodemailer = require('nodemailer');
var smtpTransport = require('nodemailer-smtp-transport');
 
var transporter = nodemailer.createTransport(smtpTransport({
  service: 'natemail',
  host: 'smtp.mail.nate.com',
  auth: {
    user: 'lhs0806@nate.com',
    pass: 'leehs1181!'
  }
}));
 
var mailOptions = {
  from: '이홍석 <lhs0806@nate.com>',
  to: 'lhs0806@gmail.com',
  subject: 'Node.js[nodemailer]을 사용한 test메일',
  text: ' test메일 의 내용입니다.'
};
 
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  