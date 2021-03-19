# Poll Application

This is a basic poll application where you can create a question and possible 10 answers. After you vote your answers, the result is going to be displayed on the chart. Following stack used to build this application:

- [React.js](https://reactjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [Cypress.io](https://www.cypress.io/)
- [react-chartjs-2](https://www.npmjs.com/package/react-chartjs-2)
- [node-sass](https://www.npmjs.com/package/node-sass)

## Information

- This application is a Create React App project with TypeScript.
- Cypress is used for the e2e automation testing.
- State is located on top of the tree. So each user interactions changing state of the application refreshes the relevant information on the page(adding question, adding answer, voting, clicking reset button etc..)
- It is only possible to write 10 answers
- Without question user can not add an answer or click the add button
- User can add, edit, delete the answer
- User can add, edit the question
- User needs to provide at least 2 answers to be able to vote, so vote button is disabled until 2 answers are provided.
- It is only possible write 80 characters in the input field.
- Empty answer can not be added.
- User can see the vote result in the chart.
- User can reset the application by clicking reset button
- Page is responsive, can be used on the mobile as well.

## Deployed version

- This application is deployed the netlify. You can access the online version with this url: [https://poll-emrearas.netlify.app/](https://poll-emrearas.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm install`

This command creates a `node_modules` directory with the required dependencies to be able to run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `./node_modules/.bin/cypress open`

This command runs the cypress and opens the browser. You can select the e2e test you would like to run. To be able to run the test successfully the application must be running in the development mode on [http://localhost:3000](http://localhost:3000).


