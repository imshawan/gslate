//  Author: Shawan Mandal
//  License: MIT

const cheerio = require('cheerio');
const axios = require('axios');

const Translator = module.exports;
Translator.getLanguages = async () => {
    const TRANSLATOR = String.fromCharCode(104,116,116,112,58,47,47,116,114,97
        ,110,115,108,97,116,101,46,103,111,111,103,108,101,46,99,111,109,47,116,
        114,97,110,115,108,97,116,101,95,97,47,108);
    const TRASLATOR_PARAMS = new URLSearchParams({
        client: 't',
        });

    const URL = TRANSLATOR + '?' + TRASLATOR_PARAMS;
    const { data } = await axios.get(URL);
    return data;
}

Translator.Translate = async (query, translationLang, fromLang = "auto") => {
    const TRANSLATOR = String.fromCharCode(104,116,116,112,58,47,47,116,114,
        97,110,115,108,97,116,101,46,103,111,111,103,108,101,46,99,111,109,47,109);
    const TRASLATOR_PARAMS = new URLSearchParams({
        tl: translationLang,
        sl: fromLang,
        q: query
        });
    const URL =  TRANSLATOR + '?' + TRASLATOR_PARAMS;
    const { data } = await axios.get(URL);
    const $ = cheerio.load(data);
    return $('.result-container').text();
}