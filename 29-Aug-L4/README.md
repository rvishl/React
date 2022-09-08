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

**caniuse**