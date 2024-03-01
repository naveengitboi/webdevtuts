//loginuser

const oldusername = document.querySelector('.oldusername')
const olduserpassword = document.querySelector('.olduserpassword')
const logInBtn = document.querySelector('.logInBtn')

const errorMsg = document.querySelector('.errorMsg')

const loginData = {
    logUsername: '',
    logUserPassword: ''
}

oldusername.addEventListener('change', (e) => {
    loginData.logUsername = e.target.value
})

olduserpassword.addEventListener('change', (e) => {
    loginData.logUserPassword = e.target.value
})

// validating based on username

//getting keys because we know keys are unique, since we add user only with unique usernames in databases
//console.log(Object.keys(localStorage))


//before this validate the form and userinputs

logInBtn.addEventListener('click', () => {
    const localKeys = Object.keys(localStorage);

    for (let i = 0; i < localKeys.length; i++) {

        //stringfy to objects
        const lsData = JSON.parse(localStorage[localKeys[i]])
        if (lsData.username == loginData.logUsername && lsData.password == loginData.logUserPassword) {
            //adding to session storage again if user is valid and navigate to home page
            sessionStorage.setItem('currentuser', localStorage[localKeys[i]])

            window.location.href = '/home.html'

        }
        else {
            errorMsg.textContent = 'Enter valid Credintials'
        }
    }
})