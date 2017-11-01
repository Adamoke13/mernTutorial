# mernTutorial

## Steps to walk through tutorial step by step:

Prerequisites
* Go here: https://appdividend.com/2017/06/28/mern-stack-tutorial/ this is the tutorial you will be walking through step by step.
* While walking through that tutorial use the PRs in this repo to see what the changes should look like after completing each step and feel free to pull down the branches for any specific step if you are having difficulties getting the app working after manually making changes for that step in the tutorial. Each branch has the completed working code for that specific step.

Steps
1. Step 1: create-react-app
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/1/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-1---simple-react-app
2. Step 2: add routing with just one route
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/2/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-2---add-routing
3. Step 3: add component and second route
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/3/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-3---add-component-and-second-route
4. Step 4: create form, bring in bootstrap css and add submit logic
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/4
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-4---create-a-form
5. Step 5: Import axios and create itemService
    1. **Missing Step** run "npm install --save axios -d"
    2. PR: https://github.com/Adamoke13/mernTutorial/pull/5/files
    3. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-5---import-axios-and-create-itemService
6. Step 6: make a nodejs express project
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/6/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-6---make-a-nodejs-express-project
7. Step 7: install expressjs framework
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/7/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-7---install-expressjs-framework
8. Step 8: make app.js file
    1. **Missing Step** app.get() in app.js
    2. PR: https://github.com/Adamoke13/mernTutorial/pull/8/files
    3. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-8---make-appjs-file
9. Step 9-11: setup backend - grouped these together since the server would not launch successfully with only one or two of them in place
    1. **Missing Step** "npm install --save mongoose -d"
    2. **Missing Step** "npm install --save body-parser -d"
    3. **Missing Step** "npm install --save cors -d"
    4. **Missing step** "npm install --save bluebird -d"
    5. **Altered step** I couldn't get through my proxy to mlab DB so setup my own hosted on my VDE. mongoose.connect('mongodb://localhost:27017/myDb')
    6. PR: https://github.com/Adamoke13/mernTutorial/pull/9/files
    7. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-9---install-cors-middleware
10. Step 12: Add route to display all existing items
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/10/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-12---register-routes-at-frontend
11. Step 13: Add edit page and routing
    1. **Missing Step** top of TableRow.js: import { Link } from 'react-router-dom';
    2. PR: https://github.com/Adamoke13/mernTutorial/pull/11/files
    3. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-13---make-edit-item-route
12. Step 14: Add support to actually update items:
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/12/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-14---update-items-in-db
13. Step 15: Add support to delete items:
    1. PR: https://github.com/Adamoke13/mernTutorial/pull/13/files
    2. Branch: https://github.com/Adamoke13/mernTutorial/tree/step-15---delete-items


## Steps to clone complete version of the application:

Prerequisites
1. Recommended but not necessary... install yarn: `npm install -global yarn`

Steps
1. Clone this repo
2. Go to the project folder "react-frontend"
3. run the command `yarn install` in your terminal or `npm install`
4. after that, run the command `npm start`
6. Go to the project folder "nodejs-backend"
7. run the command `yarn install` in your terminal or `npm install`
8. In app.js file change MongoDB URI to your particular URI
9. run the command `npm start`
10. Now, go this URL: http://localhost:3000/add-item