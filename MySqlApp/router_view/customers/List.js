const express = require('express')
const router = express.Router({mergeParams: true}) // https://velog.io/@nittre/Node.jsExpress-라우터에-req.params-값-넘기기

const tableName = 'customers';
const tableNameKor = '고객';

const fields = [ {name: 'customerNumber',         nameKor: '고객번호',         isListView: false,   maxLength: 50 },
                 {name: 'customerName',           nameKor: '상호명',           isListView: true,    maxLength: 50 },
                 {name: 'contactLastName',        nameKor: '담당자_성',        isListView: true,    maxLength: 50 },
                 {name: 'contactFirstName',       nameKor: '담당자_이름',      isListView: true,    maxLength: 50 },
                 {name: 'phone',                  nameKor: '전화',             isListView: true,    maxLength: 50 },
                 {name: 'addressLine1',           nameKor: '주소1',            isListView: true,    maxLength: 50 },
                 {name: 'addressLine2',           nameKor: '주소2',            isListView: true,    maxLength: 50 },
                 {name: 'city',                   nameKor: '시',               isListView: true,    maxLength: 50 },
                 {name: 'state',                  nameKor: '주',               isListView: true,    maxLength: 50 },
                 {name: 'postalCode',             nameKor: '우편번호',         isListView: true,    maxLength: 50 },
                 {name: 'country',                nameKor: '국가',             isListView: true,    maxLength: 50 },
                 {name: 'salesRepEmployeeNumber', nameKor: '담당영업사원번호', isListView: true,    maxLength: 4 },
                 {name: 'creditLimit',            nameKor: '신용한도',         isListView: false,    maxLength: 10 }
               ]               

const searchs =  [ {name: 'customerName',    nameKor: '상호명',    isListView: true,   maxLength: 50 },
                   {name: 'contactLastName', nameKor: '담당자_성', isListView: true,   maxLength: 50 }
                 ]  

router.get('/', (req, res) => {
    console.log(` ${req.originalUrl} [${req.method}] 요청 `)
    return res.render('customers/List',{title: `${tableNameKor} 리스트`, searchs, fields});
})

module.exports = router
