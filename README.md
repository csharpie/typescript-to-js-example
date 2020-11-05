# TypeScript to JS Example

This goal of this project is have a small working sample of how you can create JS files from TypeScript files, for those who are new or unfamiliar with TypeScript.

## Directory Structure

```bash
├── dist
├── node_modules
├── src
│   ├── index.html
│   ├── index.ts
│   ├── languages.ts
│   ├── person.ts
├── CONTRIBUTING.md
├── README.md
├── package.json
├── tsConfig.json
├── webpack.config.js
├── yarn.lock
└── .gitignore
```

dist/

- this folder contains the output from running _webpack_ in the terminal

node_modules/

- these are the js libraries you'll need to run webpack and use TypeScript to compile your code
- never check this directory into source control; your devops pipeline should take care of installing these libraries in production

src/

- index.html
  - just the base file with our minimal markup and script reference to bundle.js
- index.ts
  - our entry point to the TypeScript code
  - it's here where we'll create our scripts to bind a our click event to the button on index.html
  - we also get a references to the other elements on the page, including the _select_, the _h3_ and the _input_ tags
  - you'll notice, we do this fancy thing up top that looks a heck of a lot like *import*ing objects or constants or what have you in your favorite object oriented language.
    - It's no surprise this syntax may have been slightly inspired by languages like Java and C#
- languages.ts
  - this defines a class, that we do not export, called _Language_
  - it also exports an array of languages
- person.ts
  - we export a class (with more familiar syntax) that has method called _greetMeInMyLanguage_
  - this class also has a property called _name_
  - this class also imports the exported _languages_, which is used for logic to determine the greeting to return

.gitignore

- directories and files to tell GitHub Repository not to track

package.json

- list of npm packages (js libraries) and command line scripts to run

tsConfig.json

- basic info to tell the TypeScript compiler how to handle the .ts files

webpack.config.js

- file that webpack uses to get information on the type of files it should try compile, copy, move, merge, etc. It's highly configurable to make webpack do what you need.

yarn.lock

- dependency tree of all npm packages

## Live Page

[Click Me](https://csharpie.github.io/typescript-to-js-example)

### Want to Contribute?

Please send Pull Requests
