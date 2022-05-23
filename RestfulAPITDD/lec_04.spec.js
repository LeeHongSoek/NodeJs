const assert = require('assert')
const should = require('should')
const request = require('supertest')
const app = require('./lec_04_app')

describe('Get /users',() => {
    it('Display aray(배열을 반환한다.)',(done) => {
        
        // assert.equal(1, 0)  // aassert 예
        
        // (1).should.equal(1)  // should 예
        
        request(app) // supertest 예
            .get('/users')
            .end((err,res)=>{
                if(err) throw err
                
                console.log('res.body 는.. : ',res.body)  // users 출력..

                res.body.should.be.instanceof(Array)  // res.body 가 배열임을 확인한다.
                res.body.forEach(user => {
                    user.should.have.property('name')  // user의 속성 중 name이 반드시 있어야한다.
                })

                done()
            })
    })
}) 