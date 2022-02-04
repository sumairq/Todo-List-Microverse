![](https://img.shields.io/badge/Microverse-blueviolet)

# To Do List Application

![screenshot](./screenshot.png)

> A simple to do list application made with Html, CSS, JavaScript.

## Built With

- Languages:
  - HTML, CSS, JS, GIT.
-Frameworks:  
  - Webpack, FontAwesome, jist.
- Technologies:
  - Github, VS Code, WebStorm, window 10 OS, Kubuntu 21.10 OS, Node.js

## Live Demo (if available)

[Live Demo Link](<https://sumairq.github.io/Todo-List-Microverse/>))

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Install Webpack package bundler.

### Setup

Clone this link [repo](https://github.com/sumairq/Todo-List-Microverse.git) to setup the repository.

### Install

run the following commands:
npm install webpack webpack-cli --save-dev
npm install --save-dev html-webpack-plugin
npm install --save-dev style-loader css-loader
npm install --save-dev webpack-dev-server

### Usage

Use the following commands to spin up the project.  
npm run start

### Run tests

In order to test the app we used a library named `jist`.
You can test the app by yourself. Just follow the next steps:

1.Make sure you have nodejs installed locally:

2.Go to the terminal that you regularly use. It may change depending on the OS you are using (e.g. CMD, PowerShell, Konsole, etc). Once there type in `node -v` if you got as output the version `V16.13.0` you are good to go for the next step. Note that you can work this with any version above > 13.

3.Make sure you have NPM installed locally. On the same terminal, type in `nmp -v` if the out put is the version you are good to go.

> Note: if you lack of these libraries you can go to [this link](https://nodejs.org/en/download/) and follow the proper instructions. The latest version of node had embebed npm.  

4.Go to the folder where you cloned the repo. Once on that folder run the follow command `npm init -y` in order to create a simple package in your local machine. You should have a new `package.json` file as output.

5.Now lets configurate jest library as dependency on the project. In the same root folder that you are working, type in this command `npm install --save-dev jest`. It also can be done by the shorthand `npm i -D jest`. Now you `package.json`file should have a new entry that states  **{devDependency: 'jest'}**. Also you will have a new `package-lock.json` file. That file include all the dependencies that jest use to work. leave it as it is.

6. To continue, lets find the script section on the `package.json`file. By default  the `test` script comes with a generic error message. Lets change it to be jist. it should be as follow:

> { scripts: [{
> "tests": 'jest',
> "......": '......'
> <"any other script you have>" : <' the name of the dependency>
>}]

*Note that the second and third entries are only for this example purpose. We only need to focus on the tests jest script.

7.We are all set in order to begging you testing scripts. On this [link](https://jestjs.io/) you will find the proper documentation to do so.

> The project has already some testing scripts on it, you may find them under the folder "src/tests" & "src/_mocks_"


## Authors

👤 **Sumair Qaisar Jadoon**

- GitHub: [@sumairq](https://github.com/sumairq)
- Twitter: [@sumair_qaisar](https://twitter.com/sumair_qaisar)
- LinkedIn: [LinkedIn](https://linkedin.com/in/sumair-qaisar-jadoon-84a877164)


👤 **Sergio Valadez**
- GitHub: [@sergiogval](https://github.com/sergiogval/)
- Tweeter [@srgvldz](https://twitter.com/srgvldz)
- LinkedIn [@Sergio_Valadez](https://www.linkedin.com/in/sergio-valadez-282153216/)
## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- For this project I followed the Minimalist design for to do list, that is not existing anymore,
This is the demo for the Todo List [Minimalist](https://www.youtube.com/watch?v=AcUd-_Yjjqg)

## 📝 License

This project is [MIT](./MIT.md) licensed.
