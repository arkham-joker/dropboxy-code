Created by Mohamad Moeen Shahbazi
its the raw code of dropboxy project of mine,(just src ad public folder),
justdownload it and paste in somewhere ,run npm install to install node-modoules in that folder and then run npm start

dependencies are as follow:
axios,
material design,
redux,
react-redux,
react-router-dom,
redux-thunk,
node-sass,
##################################################################################################################
DESCRIPTION:
this project uses below  reactjs concepts:
STATELESS FUNCTION and MATERIAL UI:
the entire of project is based on stateless functions which grid systems and other ui element are based on material-ui framework
stateless function has been prefered because they use ECSCRIPT 5 and no need for convertion,while if Statefull component was implemented a convergion between ECscript 6 to 5 was needed that it means more loading time was needed;##################
####################################################################################################################
ASYNCHRONOUS FUNCTION AND REACT-REDUX:
middleware is used for asynchronos functions(signin/signup)
sending and getting info in login/logout processes have been done via sending rests by axios
redux and react-redux hooks(useDispatch and use selectore) are used for generalizing a store for the entire project
###########################################################################################################
REACT ROUTING:
a protected route which use useContext and creatContext hook is used for implementing a protecting route procedure
protected route implement a neccassary signin for navigating user from signin.js to loggeduser.js
 routing has been implemented through below concepts:
  ordinary routing=><route path='/' component={COMPONENt}/>
  conditional rendering
using render props in routing procedure...
#################################################################################################################

STYLING:
some elements have been styled with sass and inline-styling
#################################################################################################################
transferring state and props has been done using below concepts:
react-redux;
history.push();
useContext hook;
 OTHER HOOKS such as useEffect has been used in order to detect refreshing and mounting of pages,


