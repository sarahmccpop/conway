# How I got to this point
I opened a terminal window and used `cd ~` to ensure I was in my home directory. 
I used `nvm ls` to check which versions of node version manager were already installed. 
I used `nvm install --lts node` to install the most recent version of node that has the latest long term support. 
Once again I used `cd ~` to ensure I was in home directory (could also have used `pwd`). 
I then used `create-react-app conway` to create a new react app in a directory called conway. 
I used `cd conway` to change directory into conway. 
I used `npm start` to start the web server. This launched a tab in my chrome browser which was web address  `localhost:3000`. 
From here I couldn't run any further command lines, so I opened another tab in terminal to continue. This tab opened in the conway directory. 
The live terminal window had suggested running `npm run build` so (once in conway) I ran this command. 
I then used `ls` to confirm the presence of a `src` directory. I used `cd src` to change directory into src. 
I used `ls` again to confirm presence of App.js file in src folder. 
I used `nano App.js` to edit the App.js file. I found a line which contained `Edit <code>src/App.js</code> and save to reload.`. I removed this text and changed it to I am great. Thanks Andrew :)
I used control & X to open the option for save in nano and responded `Y` to save. I refreshed `localhost:3000` and the edited message appeared onscreen. 

On my internet browser, I opened github and completed the following steps -> 
* clicked the "home" octocat icon in the top left to get to the homepage
* clicked plus icon in top right of screen and click New repository
* entered the name "conway"
* left description blank
* selected "public"
* didn't tick any of the three boxes for adding a README, gitignore or license.
* clicked  Create repository 

On my terminal, I used `pwd` to ensure I was in the conway directory. 
I ran `git remote add origin git@github.com:sarahmccpop/conway.git`
I ran `git branch -M main` to ensure it was the main branch
I ran `git push -u oigin main`

I used `nano README.md` to open this file. I typed in this 'How I got to...' and will save and push it to github, hoping it's formatted well. 

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
