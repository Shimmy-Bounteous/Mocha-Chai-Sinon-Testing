import axios from 'axios';
import fetchApiData from '../../api/users';
import sinon from 'sinon';
import chai, { expect, should } from 'chai';

chai.should();

//defining response for stubs and spies
const responseData = [{ id: 1, title: 'Test Post' }];
const response = { data: responseData };

// Creating Stubs
describe('fetchApiData Stubs & Spies', () => {

    // reset all mocked functions' states after each test
    afterEach(() => {
        sinon.restore();
    });

    it('handles API error', async () => {
        const errorMessage = 'Network Error';
        sinon.stub(axios, 'get').rejects(new Error(errorMessage));

        const response = await fetchApiData();
        response.should.be.an('error');
        if (response instanceof Error) {
            response.message.should.equal(errorMessage);
        }
    });

    it('fetches successfully data from API', async () => {
        sinon.stub(axios, 'get').resolves(response);

        const data = await fetchApiData();
        expect(data).to.deep.equal(responseData);
    });

    it('calls axios.get with correct URL', async () => {
        const axiosGetStub = sinon.stub(axios, 'get').resolves(response);

        await fetchApiData();

        sinon.assert.calledWith(axiosGetStub, process.env.API_ENDPOINT);
    });

    it('calls axios.get with correct URL using spyOn', async () => {
        const axiosGetSpy = sinon.spy(axios, 'get');

        await fetchApiData();

        sinon.assert.calledWith(axiosGetSpy, process.env.API_ENDPOINT);
    });

    it('calls console.log with fetched data', async () => {
        sinon.stub(axios, 'get').resolves(response);

        const consoleLogSpy = sinon.spy(console, 'log');

        await fetchApiData();

        sinon.assert.calledWith(consoleLogSpy, responseData);
    });
});