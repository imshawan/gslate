const assert = require('chai').assert;
var Should = require('chai').should();
const { expect } = require('chai');
const Translater = require('../lib/index');

describe('Testing the Translater module', () => {
    
    it('It should return a JSON response of all the supported languages', (done) => {
        Translater.getLanguages()
        .then((response) => {
            assert.exists(response);
            Should.exist(response.sl);
            done();
        })
    })
    
    it('It Should return a translated string, depending upon the query', (done) => {
        Translater.Translate("Hello", "hi").then((response) => {
            assert.exists(response);
            assert.isString(response, 'string');
            expect(response).to.eql('नमस्ते');
            done();
        })
    });
    
});