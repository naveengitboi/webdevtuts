const username = document.querySelector('.userName');
const userEmail = document.querySelector('.userEmail')
const logoutBtn = document.querySelector('.logoutbtn')

// console.log(username)

//i will access the logged in user from the session storage


//we will get json string here
let userDetails = sessionStorage.getItem('currentuser');

//parsing to object
let currentUser = JSON.parse(userDetails)
// console.log(currentUser)


//now i will use this data to put in page

username.textContent = currentUser.username
userEmail.textContent = currentUser.email

//like this i can show wanted fields


//clearing session storage on logout and navigating to register page

logoutBtn.addEventListener('click', ()=>{
    sessionStorage.clear();
    window.location.href = '/index.html';
})

//remember that i deleted from session but not from local storage, so now i can use login 