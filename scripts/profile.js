
var user = firebase.auth().currentUser;
if(!user == null) {
  console.log("logged in");
} else {
  console.log("user not found!");
}

function myProfile() {
  if (user) {
    // User is signed in.
    var db = firebase.firestore();
      var docRef = db.collection("Users").doc(user.uid);
      docRef.get().then(function(doc) {
         if(doc && doc.exists) {
         const myData = doc.data();
         const name = myData.username;
         const age = myData.age;
         const gender = myData.gender;
         const description = myData.description;
         document.getElementById("userName").value = name;
         document.getElementById("age").value = age;
         document.getElementById("gender").value = gender;
         document.getElementById("description").value = description;

    }
    }).catch(function(error) {
    console.log("Got an error: ",error);
    });
  } else {
    // No user is signed in.
  }
}


function writeUserData(userName, userAge, userGender, userDescription) {
  if (user) {
    // User is signed in.
    db.collection("Users").doc(user.uid).set({
      username: userName,
      age: userAge,
      gender: userGender,
      description: userDescription
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      console.log("User profile successfully written!");
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
  } else {
    console.log("no user is found!");
  }
}


function getUserData() {
  firebase.auth().onAuthStateChanged(function (user) {
    db.collection("Users").doc(user.uid)
    .onSnapshot(function (snap) {
      name = snap.data().username
      age = snap.data().age
      gender = snap.data().gender
      description = snap.data().description
      localStorage.setItem("userName", name)
      localStorage.setItem("age", age)
      localStorage.setItem("gender", gender)
      localStorage.setItem("description", description)
      console.log(userName)
      console.log(userAge)
      console.log(userGender)
      console.log(userDescription)
    })
  })
    //user.updateProfile({
     // username: name,
     // age: age,
     // gender: gender,
     // description: description
   // }).then(function() {
     // console.log('Update successful.');
  //  }).catch(function(error) {
     // console.error(error);
  //  })

    //firebase.database().ref("Users/" + user.uid).set({
      //username: name,
      //age: age,
      //gender: gender,
     // description: description
    //}, function(error) {
       // if(error) {
            
        //} else {
            //return Promise;
       // }
   // }).then(function () {
      //window.location.replace("/profile");
   // });
}
