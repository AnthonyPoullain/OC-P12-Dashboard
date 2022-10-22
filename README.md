# Project 12 - SportSee React Analytics Dashboard
This repo contains the source code to run the frontend for the sports analytics dashboard **SportSee**.

## 1. General information
This project runs in 2 parts:
- The [**backend**](https://github.com/AnthonyPoullain/OC-P12-Backend)
- The **frontend** (you are here)

Follow the installation instructions below.

## 2. Installing the backend
 For the frontend to be able to access the data, the backend will first need to be running. To install and run the backend, clone [this repo](https://github.com/AnthonyPoullain/OC-P12-Backend) and follow the instructions from the **README**.

## 3. Installing the frontend
### 3.1 Prerequisites
- [Node.js (Version 16.17)](https://nodejs.org/en/) (You can use [nvm](https://github.com/nvm-sh/nvm) to manage node versions)
- [NPM](https://www.npmjs.com/)

### 3.2 Launching the project
1. Fork the repository
2. Clone it on your computer.
3. The `npm install` command will allow you to install the dependencies.
4. The `npm run start` command will allow you to run the React app.
5. *(Optional)* The `npm run docs` command will allow you to generate the jsdoc documentation. It will be located in *docs/index.html*

> ***Note:** The backend will run on port **3000**. To allow for both the backend and the frontend to run concurrently, the default React port has been changed to port **5000**. You can access these settings in the .env file contained in the root directory.*
