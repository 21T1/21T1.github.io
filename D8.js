var form=document.querySelector('form')
var username=document.querySelector('#username')
var email=document.querySelector('#email')
var password=document.querySelector('#password')
var confirmPassword=document.querySelector('#confirmPassword')
function showError(input,message){
    let parent=input.parentElement
    parent.classname='form-control error'
    let small=parent.querySelector('small')
    parent.classList.add('error')
    small.innerText=message
}
function showSuccess(input){
    let parent=input.parentElement;
    parent.classname='form-control success'
    let small=parent.querySelector('small')
    parent.classList.remove('error')
    small.innerText=''
}
function checkEmptyError(listInput){
    let isEmptyError=false
    Array.from(listInput).forEach(input => {
        if(!input.value){
            isEmptyError=true
            showError(input,'Khong duoc de trong')
        }else   
            showSuccess(input)    
    });
    return isEmptyError
}
function checkLengthError(input,min,max){
    input.value=input.value.trim()
    if(input.value.length<min){
        showError(input,`Phai co it nhat ${min} ky tu`)
        return true
    }
    if(input.value.length>max){
        showError(input,`Khong duoc vuot qua ${max} ky tu`)
        return true
    }
    return false
}
function checkEmailError(input){
    const regexEmail=
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value=input.value.trim()
    let isEmailError=!regexEmail.test(input.value)
    if(regexEmail.test(input))
        showSuccess(input)
    else
        showError(input,'Email Invalid')
    return isEmailError
}
function checkMatchPasswordError(passwordInput,cfPasswordInput){
    if(passwordInput.value!==cfPasswordInput.value){
        showError(cfPasswordInput,'Not match')
        return true
    }
    return false
}
form.addEventListener('submit',function(e){
    e.preventDefault()
    let isEmptyError=checkEmptyError([username,email,password,confirmPassword])
    let isUsernameLengthError=checkLengthError(username,8,30)
    let isEmailError=checkEmailError(email)
    let isPasswordLengthError=checkLengthError(password,8,100)
    let isCheckMatchPasswordError=checkMatchPasswordError(password,confirmPassword)
})