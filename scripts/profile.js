var user = firebase.auth().currentUser;

/** updates user information */
function writeUserData(userId, name, email, imageUrl) {
    firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    }, function(error) {
        if(error) {
            firebase.database().ref('users/' + userId).set({
                username: null,
                email: null,
                profile_picture: null
            })
        } else {
            return Promise;
        }
    });
  }
var userRef = firebase.database().ref("users");
var adaFirstNameRef = userRef.child('name/first');
  detailRef.child("age").setValue(age);
  detailRef.child("imageURL").setValue(imageURL);
  detailRef.child("address").setValue(address);