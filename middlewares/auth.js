const adminAuth = (req, res, next)=>{
    console.log("Admin auth is getting checked!!");
    const token = "xyz";
    const isAdminAuthorized = token ==="xyz";
    if(!isAdminAuthorized){
        res.status(404).send("Unauthorized request");
    }else{
        next();
    }
}

const userAuth = (req,res,next)=>{
    console.log("User auth getting checked");
    const token = "PQR";
    const isUserAuthorized = token ==="PQR";
    if(!isUserAuthorized){
        res.status(404).send("Unauthorized request");
    }else{
        next();
    }
}

module.exports = {adminAuth,userAuth}

