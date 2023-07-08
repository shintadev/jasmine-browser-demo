# jasmine-browser-demo
## How To Use

To clone and run this demo, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```powershell
# Clone this repository
$ git clone https://github.com/NamTNDEV/jasmine-browser-demo.git

# Go into the repository
$ cd jasmine-browser-demo

# Install dependencies
$ npm install

# Run the demo
$ npm run test
#or
$ npm run serve
```

## Config

Open `spec\support\jasmine-browser.json` and modify these option for your demo configurations:

1. `browser` section:

```json
"browser": {
    "name": "MicrosoftEdge"
  }
```

Its value can be "internet explorer", "firefox", "safari", "MicrosoftEdge", "chrome", or "headlessChrome".

2. `env` section:

```json
"env": {
    "stopSpecOnExpectationFailure": false,
    "stopOnSpecFailure": false,
    "random": false
  }
```

> **Note**
> I personally use these options, but if you need more control, read [Jasmine env’s configuration](https://jasmine.github.io/api/edge/Configuration.html).

> **Note**
> This demo referenced from [Using Jasmine in the browser](https://jasmine.github.io/setup/browser.html).
