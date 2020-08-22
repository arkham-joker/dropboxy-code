its the raw code of dropboxy project of mine,without node modules and build folder,
therefore if yo u want to run this app you have yo download it and paste the content of it somewhere in you system and run npm install and after that run npm start
dependencies are as follow:
axios,
material design,
redux,
react-redux,
react-router-dom,
redux-thunk,
description:
this project uses below concepts:
the entire of project is based on stateless functions which grid systems and other ui element are based on material-ui framework
middleware is used for asynchronos functions(signin/signup)
redux and react-redux hooks(useDispatch and use selectore) are used for generalizing a store for the entire project
a protected route witch use useContext and creatContext hook is used for implementing a protecting route procedure
protected route implement a neccassary signin for navigating user from signin.js to loggeduser.js
