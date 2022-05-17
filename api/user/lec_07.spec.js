const assert = require('assert')
const { download } = require('express/lib/response')
const should = require('should')
const request = require('supertest')
const { runInNewContext } = require('vm')
const app = require('../../lec_07_app')

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


describe('Get /users/:id', () => {
    describe('성공', () => {
        it('유저 객체를 반환한다.',(done) => {
            request(app)
                .get('/users/1')
                .end((err, res) => {
                    //res.body.should.have.property('id',1)
                    res.body.should.have.property('name','Alice')
                    console.log(res.body)
                    done()
                })
        } )
    })
    describe('실패', () => {
        it('id가 숫자가 아닐경우 400으로 응답한다.',(done) => {
            request(app)
                .get('/users/one')
                .expect(400)
                .end(done)
        })
        it('찾을 수 없는 id일 경우 404응답한다.',(done) => {
            request(app)
                .get('/users/9')
                .expect(404)
                .end(done)
        })
    })
})

describe('DELETE /users/:id', () => {
    describe('성공', () => {
        it('id:1을 삭제하고 204를 응답한다.',(done) => {
            request(app)
                .delete('/users/1') // Alice를 삭제한다.
                .expect(204)
                .end(done)
        } )
    })
    describe('실패', () => {
        it('id가 숫자가 아닐경우 400',(done) => {
            request(app)
                .delete('/users/three')
                .expect(400) 
                .end(done)
        })
        it('찾을 수 없는 id일 경우 404응답한다.',(done) => {
            request(app)
                .delete('/users/9')
                .expect(404)
                .end(done)
        })
    })
})

describe('POST /users ', () => {
    describe('성공', () => {
        it('201을 응답, 생성한 유저 객체를 응답', done => {
            request(app)
                .post('/users').send({name: 'Daniel'})
                .expect(201)
                .end((err, res) => {
                    res.body.should.have.property('name','Daniel')
                    done()
                })                 
        })
    })
    describe('실패', () => {
        it('name이 없으면 400 응답', done => {
            request(app)
                .post('/users').send({})
                .expect(400).end(done)
        })
        it('name이 중복이면 409 응답', done => {
            request(app)
                .post('/users').send({name: 'Chris'})
                .expect(409).end(done)
        })
    })
})
