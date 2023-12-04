 import jwt from "jsonwebtoken";
 import {
     jwt_secret
 } from "./secret-key.js"

 const credential = {
     username: "orwa1988",
     password: "11235813"
 }

 const isAuthenticated = (req, res, next) => {
console.log('i am in ausentecated !! ')
     const error = {}
     const encodedAuth = (req.headers.authorization || '').split(' ')[1] || '';
     // logs: dGVzdDpkc2Fk  (without "Basic ")
     
    let decoded = undefined
     try {
          decoded = jwt.verify(encodedAuth, jwt_secret);
     } catch (err) {

         error.message = "unvalid token"
         return res.status(401).json({
             ok: false,
             error
         })
     }

     if (decoded) {
         
         const username = decoded ?.username;
         const password = decoded ?.password;
        
         if (username === credential.username && password === credential.password) {
             // the user is authenticated, everything fine - continue!
             return next()
         } else {
             error.message = "Unauthorized access"
             res.status(401).json({
                 ok: false,
                 error
             })
         }



     }



 }

 export default isAuthenticated;