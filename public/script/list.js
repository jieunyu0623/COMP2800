getname();
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

function removeActivities(){
        var deleteItem = document.getElementById("remove").value;
        firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
        .update({
           
            landed: firebase.firestore.FieldValue.delete()
        
        })
    });
}

function goBack() {
    window.location.replace("redirect_mainpage.html");
  }