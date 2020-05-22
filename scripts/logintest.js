var firebaseConfig = {
    apiKey: "AIzaSyCi4D1jyaQAs-gNfwWcAp9BHq7QvNmnQKE",
    authDomain: "comp2800-164b5.firebaseapp.com",
    databaseURL: "https://comp2800-164b5.firebaseio.com",
    projectId: "comp2800-164b5",
    storageBucket: "comp2800-164b5.appspot.com",
    messagingSenderId: "237429609040",
    appId: "1:237429609040:web:a9a9771f951b389a163755",
    measurementId: "G-0B93PCK42R"
  };


const db = firebase.firestore();
firebase.initializeApp(config);

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    document.getElementById("login-div").style.display="none";
    document.getElementById("logout-div").style.display="block";
  } else {
    // No user is signed in.
    document.getElementById("login-div").style.display="block";
    document.getElementById("logout-div").style.display="none";
  }
});

function login(){
    var email=document.getElementById("username").value;
    var pass=document.getElementById("password").value;

    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    var uiConfig = {
        callbacks: {
            signInSuccessWithAuthResult: function (authResult, redirectUrl) {
                // User successfully signed in.
                // Return type determines whether we continue the redirect automatically
                // or whether we leave that to developer to handle.
                //------------------------------------------------------------------------------------------
                // The code below is modified from default snippet provided by the FB documentation.
                //
                // If the user is a "brand new" user, then create a new "user" in your own database.
                // Assign this user with the name and email provided.
                // Before this works, you must enable "Firestore" from the firebase console.
                // The Firestore rules must allow the user to write. 
                //------------------------------------------------------------------------------------------
                var user = authResult.user;
                if (authResult.additionalUserInfo.isNewUser) {
                    db.collection("Users").doc(user.uid).set({
                            name: user.displayName,
                            email: user.email,
                        }).then(function () {
                            console.log("New user added to firestore");
                            window.location.assign("mainpage.html");
                        })
                        .catch(function (error) {
                            console.log("Error adding new user: " + error);
                        });
                } else {
                    return true;
                }
                return false;
            },
            uiShown: function () {
                // The widget is rendered.
                // Hide the loader.
                document.getElementById('loader').style.display = 'none';
            }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: 'mainpage.html',
        signInOptions: [
            // Leave the lines as is for the providers you want to offer your users.
            //firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            //firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            //firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: 'mainpage.html',
        // Privacy policy url.
        privacyPolicyUrl: 'mainpage.html',
        accountChooserEnabled: false
    };
    // The start method will wait until the DOM is loaded.
    // Inject the login interface into the HTML
    ui.start('#firebaseui-auth-container', uiConfig);
}

function logout(){
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
    }).catch(function(error) {
        // An error happened.
    });
}