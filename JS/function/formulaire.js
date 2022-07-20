var form = document.getElementsByTagName('form')
var iconFaEye = document.querySelectorAll(".far");
var firstName = document.forms[0]['firstName'];
var lastName = document.forms[0]['lastName'];
var email = document.forms[0]['email'];
var password = document.forms[0]['password'];
var confirmePassword = document.forms[0]['passwordConfirme'];
var check = {}

let listenerFunction = {
    toggleInputType: (e) =>{
        e.target.classList.toggle('fa-eye-slash')
    let input = e.target.parentNode.children[0];

        if(input.type === "password"){
            input.type = "text";
        }else {
            input.type = "password";
        }
    },
    checkFirstName: (ev) => {
        let input = ev.target;
        let content = input.value.trim();
        document.querySelector('#errorName').innerHTML = '';
        let error = '';

            if(!content){
                error = 'Champ prénom ne doit pas être vide !';
                document.querySelector('#errorName').textContent = 'Le champ prénom ne doit pas être vide !';
            }else if(!/^[a-zA-Z]{2,15}$/.test(content)){
                document.querySelector('#errorName').textContent = 'Champ prénom est invalide';
            }
            if(error){
                check = {...check, firstName:false}
                document.querySelector('#errorName').innerHTML = error;
            }else {
                check = {...check, firstName:true}
            }
            setSubmitButton()
    },
    checkLastName: (ev) => {
        let input = ev.target;
        let content = input.value.trim();
        document.querySelector('#errorLastName').innerHTML = '';
        let error = '';

            if(!content){
                error = 'Champ nom ne doit pas être vide !';
                document.querySelector('#errorLastName').textContent = 'Champ nom ne doit pas être vide !';
            }else if(!/^[a-zA-Z-]{2,20}$/.test(content)){
                document.querySelector('#errorLastName').textContent = 'Champ nom est invalide';
            }
            if(error){
                check = {...check, lastName:false}
                document.querySelector('#errorLastName').innerHTML = error;
            }else {
                check = {...check, lastName:true}
            }
            setSubmitButton()
    },
    checkEmail: (ev) => {
        let input = ev.target;
        let content = input.value.trim();
        document.querySelector('#errorEmail').innerHTML = '';
        let error = '';

            if(!content){
                error = 'Champ email ne doit pas être vide !';
                document.querySelector('#errorEmail').textContent = 'Champ nom ne doit pas être vide';
            }else if(!/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(content)){
                document.querySelector('#errorEmail').textContent = 'Champ email est invalide !';
            }
            if(error){
                check = {...check, email: false}
                document.querySelector('#errorEmail').innerHTML = error;
            }else {
                check = {...check, email: true}
            }
            setSubmitButton()
    }, 
    checkPassword: (ev) => {
        let input = ev.target;
        let content = input.value.trim();
        let regPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
        document.querySelector('#errorPassword').innerHTML = '';
        let error = '';

            if(!content){
                error = 'Champ password ne doit pas être vide';
                document.querySelector('#errorPassword').textContent = 'Champ password ne doit pas être vide !';
            }else if(!regPassword.test(content)){
                document.querySelector('#errorPassword').textContent = 'Champ password doit contenir une majuscule, un chiffre, un caractère spécial et faire entre 8 et 20 caractères !';
            }
            if(error){
                check = {...check, password: false}
                document.querySelector('#errorPassword').innerHTML = error;
            }else {
                check = {...check, password: true}
            }
            setSubmitButton()
    },
    checkPasswordConfirme: (ev) => {
        let input = ev.target;
        let content = input.value.trim();

        document.querySelector('#errorConfPassword').innerHTML = '';
        let error = '';

            if(!content){
                error = 'Champ confirme password ne doit pas être vide';
                document.querySelector('#errorConfPassword').textContent = 'Champ confirme password ne doit pas être vide !';
            }else if(content != password.value){
                document.querySelector('#errorConfPassword').textContent = 'Champ confirme password ne correspond pas avec champ password !';
            }
            if(error){
                check = {...check, confirmePassword: false}
                document.querySelector('#errorConfPassword').innerHTML = error;
            }else {
                check = {...check, confirmePassword: true}
            }
            setSubmitButton()
    }
}

let checkFormValid = () => {
    if(form){
        var result = true;
        if(Object.keys(check).length === 5){
            for (const key in check){
                const value = check[key];
                result = result && value
                    if(!result) return result
            }
            return result
        }
    }
    return false
}

let setSubmitButton = () => {

        if(form){
            if(checkFormValid()){
                if(form[0].elements[5]){
                    form[0].elements[5].disabled = false;
                    return
                }   
            }
            form[0].elements[5].disabled = true;
        }
}


let setUpListeners = () => {
    firstName ? firstName.onkeyup = listenerFunction.checkFirstName : null;
    lastName ? lastName.onkeyup = listenerFunction.checkLastName : null; 
    email ? email.onkeyup = listenerFunction.checkEmail : null; 
    password ? password.onkeyup = listenerFunction.checkPassword : null; 
    confirmePassword ? confirmePassword.onkeyup = listenerFunction.checkPasswordConfirme : null; 
        
        for(let index = 0; index < iconFaEye.length; index++){
            const iconEye = iconFaEye[index];
            iconEye.onclick = listenerFunction.toggleInputType;
        }
}