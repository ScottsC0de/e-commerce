# e-commerce
A back-end app that uses the ORM Sequelize to communicate with a local database

<img src="https://octodex.github.com/images/daftpunktocat-thomas.gif" alt="github mascot with daft punk helmet on" width="200"/>

## 💡 Table of Contents

- [Description](#description-id)
- [Installation](#installation-id)
- [Usage](#usage-id)
- [Questions](#questions-id)

## <a id="description-id"></a>Description
This project demonstrates the use of *Object-Relational Mapping* through the technologies Insomnia and Sequelize. Object-Relational Mapping ('ORM' for short) is the bridge between object-oriented programming and relational databases. They are what allow us to connect our JavaScript code with our databases. Using an ORM called *Sequelize*, we can access a database we've created locally on our computer in VSCode. This database consists of data about products and their categories/tags. Using the app *Insomnia*, we can test post, get, put, and delete methods to assure our routes are working and our computer can access, add, and change the data within that database.

During this project, I learned how to successfully create routes, test methods in Insomnia, use Sequelize, and furthered my knowledge of databases and how to work with their files. These technologies and processes are key when it comes to working with databases.

## <a id="installation-id"></a>Installation
To use this application, you must download node onto your local machine. Please visit https://nodejs.org/en/ to install. You will also need VSCode: (https://code.visualstudio.com/download), Insomnia: (https://insomnia.rest), Sequelize: (https://www.npmjs.com/package/sequelize), mySQL: (https://www.mysql.com/downloads), and a copy of my code: (https://github.com/ScottsC0de/e-commerce)

## <a id="usage-id"></a>Usage
With node installed, you can now run node commands on JavaScript files. To use this app, you must be in its file from the CLI or an app that allows you to run CLI commands. For this app, we used VSCode’s Integrated Terminal. If you are using VSCode, right click on the server.js file and click ‘Open In Integrated Terminal’. Run a node server.js command to fire up our server. You should receive a console log message saying our server is servin' it up. This means we can access our database. First, we must initialize the database by right clicking the schema.sql file ands running mysql -u root -p, signing into mySQL. Then, run a source schema.sql command followed by a quit command. Then, run an npm run seed command. This will fill (or 'seed) our database with data. Head to Insomnia to run tests. Choose the method you'd like to try to the left of the input field and then type http:// localhost and your port name in the box. This is the name of our local host, or our server, connecting to our api routes. You can choose to add /api/categories /api/products/ or /api/tags at the end of the route to test each of the parts of the database. When using post, put, or delete methods, type the object in JSON format. Click on the link below for a demonstration!

Full visual demonstration: https://youtu.be/N2_ZViMa5r4

## <a id="questions-id"></a>Questions
You can check out my repositories here on my GitHub account: 
<a href="https://github.com/scottsc0de">scottsc0de</a>

AND

You can send an email to **Scott5902@gmail.com** with any questions!