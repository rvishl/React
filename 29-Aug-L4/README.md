# Aug-29

# JSX 
- JavaScript + XML
- JavaScriptXML
- Usage of JS and XML in a single file.
- This allows the use of HTML inside JS. 
- Purpose is to make easy development of websites.
- Makes development faster. 

**We can create React Application WITHOUT JSX.**
- Example:
    - React.createElement('div', null, 'Hello World');
    - ReactDOM.createRoot(document.blahblahblah);
    - Note: It is technically possible to create a whole React application without using JSX.

## NPX 
- It is Basically, Node Package Executer.
- This is used to execute any JS package or script that you have install.
- We install using npm and execute/run the package using npx.

## NPM 
- It is node package manager. 
- It is just use to manage.
- NPM Bassically, allows you to manage what module or what packages you going to need in your application. you can install, you can uninstall, you can upgrade, you can use it for development, you use it for production, you can install it globally, its available everywhere.

## create-react-app
- CRA is a third party package built by facebook.
- Executing this package will create the directory structure.
- We don't need thid package, we can create the same directory structure on our own. 
- But, using this package is going to be helpful. It saves time and reduces efforts.

**Note: The website used to manage packages is npmjs. It is like a telephone directory but for node packages.**

## Modules (import, export)
- This is for Modular Programming Paradigm.
- This is used for better security.
- In a certain file, we can have multiple functions/classes/variables/etc. Out of which we might want to share only a few.
- In that case, we only export those few things.
- Similarly, instead of everything being available, we import what we need. So, we don't import unnecesarily.
- Released somewhere between ES6 and ES9.
- Any file which is either importing and exporting is basically using a module, you have to write (type = module).
- Here, 1 single file is considered as 1 single module.

**caniuse**

### Two ways to import/export
## Default Export/Import
- This will export any variable/constant/function/object/etc.
- The restriction is , 1 file can have only 1 default export.
- The syntax is to tell which export is default:
    - export default <variable_name>;
- A single file can have 0 or 1 default exports. Nothing else.
- To import a default export, we just use 'import <name> from "filename";'
- This name can be anything.
- The reason we can give any name during import is that we are using default import. Now, from a single file, there can only be a single default export, therefore, when we import, JS will automatically map the custom name to the exported function.

## Named Export/Import
- This is the second approach.
- There can be multiple named export from a single file.
- There are multiple ways to export.
    - Approach 1 - During the variable declaration, give export keyword.
    - Approach 2 - Create an object and export it directly. `export {fn1, fn2, fn3}`.
- If we export a thousand things, it is possible to just import 1 of them.
- In a named import, we can use `import {} from "file.js"`.
- In 1 single line, we can have multiple imports. In fact, we can also combine default import and named imports in a single line of code.
- In order to rename the imported reference, we use the keyword `as`.
- Exaple `import {originalName as customName} from "./file.js"`.

**Note: In Vanilla JS, we give the filename with .js extension. In React, this is not mandatory.**

**Note: To use modules in Vanilla, we need to give type="module" when adding the script tag.**


   **In any way, we cannot export a single function twice.**

## Assingment:
- Create modules for a calculator app.
- In a file, have multiple functions (add, sub, mul, div, etc).
- Export them using named export.
- In index.js, import them and perform some sample calculations.
- No need fancy UI at this point.