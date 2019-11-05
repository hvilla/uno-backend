const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
let should = chai.should();
var assert = chai.assert;
var faker = require('faker/locale/es_MX')

const apiUrl = 'http://localhost:8000/api/v1/auth';
var userCreatedId=null;

describe('Auth User Tests',async () => {
    it('Should Create User',async () => {
        const data = {
            first_name:faker.name.firstName(),
            last_name:faker.name.lastName(),
            username:faker.internet.userName(),
            password:faker.internet.password()

        }
        const res = await chai.request(apiUrl).post('/user').send(data);
        console.log(res.body);
        userCreatedId = res.body._id;
        res.should.have.status(201);
    });

    it('Should Get User',async () => {
        const res = await chai.request(apiUrl).get(`/user/${userCreatedId}`);
        console.log(res.body);
        res.should.have.status(200);
    });
});