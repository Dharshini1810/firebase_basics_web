import {createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";
const email=document.getElementById("email").value
const pswd=document.getElementById("password").value   
const form=document.querySelector('signupform') 
form.addEventListener('submit',(e) => {
    createUserWithEmailAndPassword(Auth,email,pswd).then((userCredential) => {
            const user = userCredential.user;
            alert("Account Created Successfully!!!")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Signup failed!!")
        }) 
})
// const Auth= getAuth(); 
// function create(){
//     const  UserCredential= createUserWithEmailAndPassword(Auth,email,pswd)
//         .then((UserCredential) => {
//             alert("Account Created Successfully!!!")
//         })
//         .catch((error) => {
//             alert("Signup failed!!")
//         }) 
// }