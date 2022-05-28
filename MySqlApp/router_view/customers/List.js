const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

const tableName = 'customers';
const tableNameKor = '고객';

const fields = [ {name: 'customerNumber',         nameKor: '고객번호',         isListView: false },
                 {name: 'customerName',           nameKor: '상호명',           isListView: true },
                 {name: 'contactLastName',        nameKor: '담당자_성',        isListView: true },
                 {name: 'contactFirstName',       nameKor: '담당자_이름',      isListView: true },
                 {name: 'phone',                  nameKor: '전화',             isListView: true },
                 {name: 'addressLine1',           nameKor: '주소1',            isListView: true },
                 {name: 'addressLine2',           nameKor: '주소2',            isListView: true },
                 {name: 'city',                   nameKor: '시',               isListView: true },
                 {name: 'state',                  nameKor: '주',               isListView: true },
                 {name: 'postalCode',             nameKor: '우편번호',         isListView: true },
                 {name: 'country',                nameKor: '국가',             isListView: true },
                 {name: 'salesRepEmployeeNumber', nameKor: '담당영업사원번호', isListView: true },
                 {name: 'creditLimit',            nameKor: '신용한도',         isListView: true }
               ]               

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    return res.render('customers/List',{title:"고객 리스트"});
})

module.exports = router
