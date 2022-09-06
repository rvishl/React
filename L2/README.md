 **Aug-26, 2022**

**Note - Just like we have index.html for regular pages, for react application, the first file that needs to run should be App.js.**

**App.js is the index.html for React Applications.**

**We can customize the name and change it to anything instead of App.js. But we should not do it.**

## Details of src directory
    - App.css - This is the CSS for App component. That means, whatever HTML we write in App can access this CSS, outside of that, other components cannot access.
    - App.js - This is a component. This is the first component that is used in any react application.
    - App.test.js - This is a sample testcase that is for the basic react webpage which is developed.
    - index.css - This contains the whole CSS for your website. If we write any CSS code here, it will be available throughout the whole website.
    - index.js - This contains the whole JS for your website. This also contains the initialization code for React.
    - logo.svg - This is react's logo. which we see rotating on our default React application.
    - reportWebVitals.js - This is a feature developed by Google to check the health of any webpage.
    - setupTests.js - This is used for setting up the testcases. We typically use JEST package for testing. This is very very common.

## Package.json
- This contains information about the project that we are working on.
- This contains things like name, description, version, author, etc etc.
- This contains an object called as dependencies - This dependencies contains a collection of all the packages that we are using in out react application. All the packages that we have installed.
- Suppose, I import a package called as PackageA. It is possible that PackageA is using other packages as it's dependency, PackageAA, PackageAB, PackageAC.
- So, when I am installing packageA, indirectly I am also installing PackageAA and PackageAB and PackageAC. Total, we are installing 4 packages.
- devDependencies - This is the collection of packages which is used for development purposes.

## Package-lock.json
- This file contains all the list of addtional (indirect) dependency installations.
- This is a very comprensive list. (Detailed)
- We never touch this file. This is created by the node package manager automatically. we just use it and share with other team members.

## component