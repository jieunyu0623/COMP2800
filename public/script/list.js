getname();
//gets the name of the user and stores into local
function getname() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                x = snap.data().name;
                console.log(x);
                localStorage.setItem("name",x);
            });
    });
}
getlanded();

//gets the data from database that the wheel landed on
function getlanded() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                x = snap.data().landed;
                console.log(x);
                localStorage.setItem("landed",x);
            });
    });
}
//removes an activity from the database
function removeActivities(){
        var deleteItem = document.getElementById("remove").value;
        firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
        .update({
           
            landed: firebase.firestore.FieldValue.delete()
        
        })
    });
}
//goes back to home page.
function goBack() {
    window.location.replace("redirect_mainpage.html");
  }