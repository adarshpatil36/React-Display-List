# React-Display-List

Pre-requisite: Visual Studio 2017, Node

1. In test folder run ‘npm install’ command.
2. In  React-Display-List-master run the following commands <br />
a. cordova platform add windows <br />
b. cordova build <br />
c. cordova prepare <br />
3. In case of app, run React-Display-List-master\platforms\windows\CordovaApp.sln in emulator(VS 2017)
4. In case of web, run 'npm start' command in 'React-Display-List-master\test' folder.
   Open http://localhost:3000 to view it in the browser.
   
In case if the API fails while fetching Data just replace the "from=2019-11-04" key with the latest date format present in 'test/src/components/Home.js'.

In case of this error 
'MSBuild v4.0 is not supported, aborting.
 No valid MSBuild was detected for the selected target: AppPackages folder doesn't exist' 
 Visit 'https://visualstudio.microsoft.com/downloads/' and download 'Build Tools for Visual Studio 2019'
 under 'Tools for Visual Studio 2019' section
