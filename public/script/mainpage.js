
const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

//when the 'About' button is clicked, call openModal() function
openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    console.log("opened successfully");
  })
})

//when the button is clicked anywhere other than the container, call closeModal() function
overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

//when the button is clicked anywhere other than the container, call closeModal() function
closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

//open the modal by adding class name active
function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

//close the modal by removing the active class name
function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}

//before User logs in 
function goToLogin() {
  window.location.replace("login.html");
}

//after User logs in 
function signOut() {
  firebase.auth().signOut().then(function() {
    console.log('Signed out');
    window.location.replace("index.html");
  }, function(error) {
    console.error('Sign out Error: ', error);
  });
}

//displays User's name on the mainpage when the user logs in 
var user = firebase.auth().currentUser;
function showName() {
  firebase.auth().onAuthStateChanged(function (user) {
    if(user != null) {
      document.getElementById("getUserName").innerHTML = user.displayName;
    }
  });
}

showName();

//directs to feedback page 
function goToFeedback(){
  window.location.replace("feedback.html");
}