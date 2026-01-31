# Day-03
- Create a repository
- Initilizethe repository
- node_modules, package.json, package-lock.json
- Install express 
- Create a express server
- Listen to PORT 7777
- Write request handler  for /test, /hello
- Install nodemon and update scripts inside package.json
- What are dependencies?
- What is the use of "-g" while npm install
- Difference between caret and tilde (^ vs ~)

# Day-04 
- Initilize  git
- .gitignore
- Create a remote repo on github
- Push all code to remote location
- Play with route extensions - /hello, /hello/2, /xyz
- Order of the routes matter a lot
- Install Postman app and make a workspace/collection > test API call

# Day-05
- Multiple Route Handlers - Play with the code
- next()
- next function and errors along with res.send()
- app.use("/route", rH,[rH,rH3],rH4, rH5);
- What is a Middleware? Why do we need it?
- How express JS basically handles requests behind the scenes
- Difference app.use and app.all
- Write a dummy auth middleware for admin
- Write a dummy auth middleware for all user routes, except /user/login
- Error handling using app.use('/',(err,req,res,next) ={});

# Day-06
- koushikbajpayee06@gmail.com(MongoDB Connection)
- Create a free cluster on MongoDB official website(Mongo Atlas)
- Install mongoose library
- Connect your application to the Database <"connection-url">/devTinder
- Call the connectDB function and connect to database before starting application on 7777
- Create a userSchema & user Model
- Create POST/signup API to add data to database (create instance of an object to add data, not from req.body())
- Push some documents using API calls from postman
- Error handling using try catch.

- JS Object vs JSON(difference)
- Add the express.json middleware to your app
- Make your signup API dynamic to recive from the end user
-  

