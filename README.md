# Google Translator API

[![npm](https://img.shields.io/npm/v/@imshawan/gslate.svg?style=flat-square)](https://www.npmjs.com/package/@imshawan/gslate)
[![npm license](https://img.shields.io/npm/l/@imshawan/gslate.svg?style=flat-square)](https://www.npmjs.com/package/@imshawan/gslate)

An open-source javascript library for your NodeJS projects that enables speech translation. Inspired from [goslate](https://pypi.org/project/goslate/).

## Install via [npm](https://www.npmjs.com/package/@imshawan/gslate)

```sh
$ npm install --save @imshawan/gslate
```

## Usage

##### `Translator.Translate(param1, param2, param3 [optional] )`

- `param1` String (Your query)
- `param2` String (Translation language)
- `param3` String (From Language), **Default:** `auto`
- Returns a promise based object
>  **Note:** Keep the param3 (from Language) as auto, in order to auto-detect your query language


#### Example

```js
const Translator = require( '@imshawan/gslate' )
Translator.Translate("Hello", "hi") // "hi" is the language code for Hindi
        .then((response) => {
            console.log(response)
        })
```

### Languages Help
This method will help you in getting all the languages that are supported along with their language code in JSON format.


#### Example

```js
const Translator = require( '@imshawan/gslate' )
Translator.getLanguages()
        .then((response) => {
            console.log(response)
        })
```

## About
Copyright (c) 2021 Shawan Mandal.
