const assert = require('chai').assert;
const Translater = require('../lib/index');

describe('Testing the Translater module', () => {
    
    it('It should return a JSON response of all the supported languages', () => {
        Translater.getLanguages()
        .then((response) => {
            assert.exists(response);
            Should.exist(response.sl);
        })
    })
    
    it('It Should return a translated string, depending upon the query', () =>{
        Translater.Translate("Hello", "hi") // "hi" is for Hindi
        .then((response) => {
            assert.exists(response);
            assert.isString(response, 'string');
        })
    });
    
});