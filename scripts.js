//this function will grab the array from the users the array is called arr
getActivities();
var act = localStorage.getItem("activities");
console.log(act);
function getActivities() {
    firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
            .onSnapshot(function (snap) {
                x = snap.data().arr;
                console.log(snap.data().arr);
				localStorage.setItem("activities",x);
            });
    });
}

//this function will remove the item to be removed for the users
    function removeActivities(){
        firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
        .update({
           
            arr: firebase.firestore.FieldValue.arrayRemove("item to be removed")
        
        })
    });
}
//array union ensures there are no repeats in our array so no 2 items will be the same.
function addActivities(){
var inputItem = document.getElementById("item").value;
        firebase.auth().onAuthStateChanged(function (user) {
        db.collection("Users").doc(user.uid)
        .update({
           
            arr: firebase.firestore.FieldValue.arrayUnion(inputItem)
					
        })
				
    });
}