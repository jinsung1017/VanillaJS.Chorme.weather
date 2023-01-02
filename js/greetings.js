const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const Hidden_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(Hidden_CLASSNAME)
    const username = loginInput.value
    localStorage.setItem("USERNAME_KEY", username)
    paintGreatings(username)
 
}

function paintGreatings(username) {
    greeting.innerHTML = `hello ${username}`
    greeting.classList.remove(Hidden_CLASSNAME)
}

const saveUsername = localStorage.getItem("USERNAME_KEY")

if(saveUsername === null) {
    loginForm.classList.remove(Hidden_CLASSNAME)
    loginForm.addEventListener('submit', onSubmit)
}else {
    paintGreatings(saveUsername)
}