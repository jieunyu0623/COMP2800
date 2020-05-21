const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
    console.log("opened successfully");
  })
})

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
    closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function openModal(modal) {
  if (modal == null) return
  modal.classList.add('active')
  overlay.classList.add('active')
}

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
    window.location.replace("mainpage.html");
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

function goToWheel() {
  window.location.replace("wheel.html");
}
