window.onload = () => {
    setUpListeners()
}
// formArray = [];
// console.log(formArray)
// const myForm = document.querySelector('form');
// // console.log("myForm as", myForm)

// // Condition pour valide firtsName
// const isValidFirstName = function() {
//     const myInputFirstName = document.querySelector("input[name=firstName]");
//         myInputFirstName.addEventListener('change', () => {
//         forValidFirstName(this)
//         })   
// }
// function forValidFirstName() {
//     const myInputFirstName = document.querySelector("input[name=firstName]");
//     valid = true;
//     const regexFirstName = new RegExp(/^[a-zA-Z]$/);
//     let testRegexFirstName = regexFirstName.test(myInputFirstName.value);
//     let testFirstNameLength = myInputFirstName.value >= 3 && myInputFirstName.value <=20;
//         if(testRegexFirstName, testFirstNameLength === valid){
//             return true;
//         }else {
//             return false;
//         }
// }

// // Condition pour valid lastName
// const isValidLastName = function() {
//     const myInputLastName = document.querySelector("input[name=lastName]");
//         myInputLastName.addEventListener('change', () => {
//             forValidLastName(this)
//         })

// }
// function forValidLastName() {
//     const myInputLastName = document.querySelector("input[name=lastName]");
//     valid = true;
//     const regexLastName = new RegExp(/^[a-zA-Z  -]$/);
//     let testRegexLastName = regexLastName.test(myInputLastName.value);
//     let testLastNameLengthMin = myInputLastName.value >= 2; 
//     let testLastNameLengthMax = myInputLastName.value <=20;
//         if(testRegexLastName, testLastNameLengthMin, testLastNameLengthMax === valid){
//             return true;
//         }else {
//             return false;
//         }
// }

// // Condition valid email
// const isValidEmail = function() {
//     const myInputEmail = document.querySelector("input[name=email]");
//         myInputEmail.addEventListener('change', () => {
//             forValidEmail(this);
//         })
// }
// function forValidEmail() {
//     const myInputEmail = document.querySelector("input[name=email]");
//     valid = true;
//     const regexEmail = new RegExp( /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
//     let testRegexEmail = regexEmail.test(myInputEmail.value);
//         if(testRegexEmail === valid){
//             return true;
//         }else {
//             return false;
//         }
// }

// // Condition valid password
// const isValidPassword = function() {
//     const myInputPass = document.querySelector("input[name=password]");
//     const myInputConfirmPass = document.querySelector("input[name=passwordConfirme]");
    
//         myInputPass.addEventListener('change', () => {
//             forValidPassword(this);
//         })
//         myInputConfirmPass.addEventListener('change', () => {
//             forValidConfPassword(this);
//         })

// }
// const forValidPassword = function(){
//     const myInputPass = document.querySelector("input[name=password]");
//     valid = true;
//     const regexPassword = new RegExp(/^(?=.*[0-9]) (?=.*[a-z]) (?=.*[A-Z]) (?=.*\d)$/);           
//     const regexPasswordLength = myInputPass.value >= 6
//         if(regexPassword, regexPasswordLength === valid){
//         formArray.push(myInputPass.value)

//             return true;
//         }
//         else {
//             return false;
//         }
// }
// const forValidConfPassword = function(){
//     const myInputConfirmPass = document.querySelector("input[name=passwordConfirme]");
//     valid = true;
//     const regexPassword = new RegExp(/^(?=.*[0-9]) (?=.*[a-z]) (?=.*[A-Z]) (?=.*\d)$/);           
//     const regexPasswordLength = myInputConfirmPass.value >= 6
//         if(regexPassword, regexPasswordLength === valid){
//             formArray.push(myInputConfirmPass.value)
//             return true;
//         }
//         else {
//             return false;
//         }
// }


// isValidFirstName();
// isValidLastName();
// isValidEmail(); 
// isValidPassword();
