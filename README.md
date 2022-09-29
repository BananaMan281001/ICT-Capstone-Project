# Setup instructions
First download git hub at https://git-scm.com/ \
Open the exe file and keep clicking 'Next' until git hub is installed. \
You can check git is installed by opening a new command window and running the command `git --version` to check the version installed. \
Install node js at https://nodejs.org/en/ \
Keep clicking 'Next' until node js is installed \
Install Visual Studio Code \
Open Visual Studio and select the 'Clone a Repository' option. Copy the address of this git repo into there and load it up. \
You may need to add a username and email once repository has been cloned. \
Happy Coding!

## How to update code
BEFORE adding new code, run `git pull` to update any changes made by other developers

## How to save your work
Once you are finished for the day, run `git pull` to ensure you have the latest code up to date \
Then run `git add .` or `git add *` to add all the files you made changes to/added \
Then run `git commit -m "____"` but replace the underscore with whatever you would like to call your changes (e.g "Adding new React component") \
Then run `git push -u origin master` \
If there are no errors then it is successful \
Check your work has saved by viewing the git repo online and verify your comment you added from the git commit is there. 

## How to run/test your code
Open a terminal in Visual Studio project folder and run the command `npm start` \
This will run the project on a local host and will open in your browser. \
To update your changes to the code, use CTRL+S and the code will automatically update in the browser

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

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
