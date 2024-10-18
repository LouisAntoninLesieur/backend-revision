# BACKEND REVISION

## 1 - Start an Express Server

To start a new Express Sever, you MUST initialize your project with node and install express package.

### Open a new terminal

```bash
mkdir your-project
cd your-project

npm init -y
npm i express
code .
```

### Create a new file (index.js) at the root of your repository

```js
// import express
import express from 'express'

// stock express in a variable
const app = express()

// several methods are now available in variable app
// let's use the 'get' method to try this out
app.get('/', (req, res) => {
  res.send('Hello World !')
});

// define a port varibale
const port = 3000

// let's use the 'listen' method from express
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
```

### Open a new terminal from repository (mind the path)

Run the following command line:

```bash
node index.js
```

Open a new browser tab. `Hello World !` should be displayed on screen.

**CONGRATS ! You launched you server ! :)**

*Something went wrong ? Check the value given to the `main` key in `package.json` and assure it is named `index.js`*

## 2 - Project architecture

```text
REVISION
├── data
│   ├── create_table.sql
│   ├── seeding_tables.sql
├── docs
│   ├── mcd.drawio
│   ├── mld.drawio
├── src
│   ├── controllers
│      ├── pokemon.controller.js
│      ├── type.controller.js
│   ├── models
│      ├── association.js
│      ├── index.js
│      ├── pokemon.model.js
│      ├── sequelize-client.js
│      ├── test.js
│      ├── type.model.js
│   ├── routers
│      ├── controller-wrapper.js
│      ├── index.js
│      ├── pokemon.router.js
│      ├── type.router.js
├── .env.example
├── .gitignore
├── index.htlm
├── index.js
├── package-lock.json
├── package.json
├── README.md
```

## 3 - Feel free to ask

Any question ? Request ? Feel free to ask me ! PR, Discord, Slack, you know how to reach me buddy ! 😁