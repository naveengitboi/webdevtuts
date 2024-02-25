//register user

const newusername = document.querySelector('.newusername');
const newuseremail = document.querySelector('.newuseremail');
const newuserpassword = document.querySelector('.newuserpassword');
const registerBtn = document.querySelector('.registerBtn')


var newUserDetails = {
    username: '',
    email: '',
    password: ''
}

function registerUserFunc(e) {
    e.preventDefault()
    const data = JSON.stringify(newUserDetails);
    //adding new user to session storage. I can number of useers in this local storage.
    localStorage.setItem(newUserDetails.username, data)

    //also adding it into session storage.  I will add only use who logged in currently in session storage and remove him from session storage after clicking logout
    sessionStorage.setItem('currentuser', data)

    //on successful submission
    window.location.href = '/home.html';
}



newusername.addEventListener('change', (e) => {
    newUserDetails.username = e.target.value
})
newuseremail.addEventListener('change', (e) => {
    newUserDetails.email = e.target.value
})
newuserpassword.addEventListener('change', (e) => {
    newUserDetails.password = e.target.value
})

registerBtn.addEventListener('click', registerUserFunc)





