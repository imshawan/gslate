# Google Translator API

An open-source javascript library for your NodeJS projects that enables speech translation. Inspired from [goslate](https://pypi.org/project/goslate/).

## Install via [npm](https://npmjs.com)

```sh
$ npm install --save @imshawan/gslate
```

## Changelog
- **v1.0.0**: Initial release

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
