# jsdom-query-html-element-text-content

> Extract html element text content using jsdom package

### Installation

````bash
$ npm install
````

### Usage
````bash
$ npm run jsdom
````

### NPM Script details

````json
{
  //..
  "scripts": {
    "jsdom": "node  jsdom.js --file=\"./index.html\" --query=.sub-title"
  }
  //..
}
````

**Important:**

NPM script arguments are mandatory

- `--file=\"./index.html\"` the html file path used by the `JSDOM.fromFile()` instance 
- `--query=.sub-title` the targetted CSS selector used by the `querySelectorAll()` method


List of Packages
----------------


__devDependencies__

| Package                                        | Description                                            |
| ---------------------------------------------- | ------------------------------------------------------ |
| [jsdom](https://github.com/jsdom/jsdom#readme) | A JavaScript implementation of many web standards      |
| [yargs](https://yargs.js.org/)                 | Yargs the modern, pirate-themed, successor to optimist |


<div>
  List of Packages generated by <a href="git+https://github.com/Drozerah/dep-to-doc-cli.git">Dep to Doc CLI</a> 1.2.0
  </div>


## Author

* **Thomas G. aka Drozerah** - [Github](https://github.com/Drozerah)

## Licence

* ISC