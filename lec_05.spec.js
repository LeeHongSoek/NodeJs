const assert = require('assert')
const should = require('should')
const request = require('supertest')
const { runInNewContext } = require('vm')
const app = require('./lec_05_app')

describe('Get /users',() => {

    describe('성공',()=>{
        it('배열을 반환한다.',(done) => {
            request(app) // supertest 예
                .get('/users')
                .end((err,res)=>{
                    if(err) throw err
                    res.body.should.be.instanceof(Array)  // res.body 가 배열임을 확인한다.
                    res.body.forEach(user => {
                        user.should.have.property('name')  // user의 속성 중 name이 반드시 있어야한다.
                    })
    
                    done()
                })
        })
        it('최대 limit 갯수만큼 응답한다.', (done) =>{
            request(app)
                .get('/users?limit=2')
                .end((err,res)=>{
                    res.body.should.have.lengthOf(2)
        
                    done()
                })
        })
    
    })
    
    describe('실패', ()=>{
        it('limit이 정수가 아니면 400을 응답한다', (done) => {
            request(app)
                .get('/users?limit=two')
                .expect(400)
                .end(done)
            })
    })
}) 