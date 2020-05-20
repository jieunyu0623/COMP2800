getUser();
function getUser(){
		db.collection("Users").doc(user.uid).onSnapshot(function (snap) {
								console.log("uid: ", user.uid);
								console.log("current data is...", snap.data()['name']);
								document.getElementById("userN").innerHTML = snap.data()['name'];
		});
}
console.log(getUser());