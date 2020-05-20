function addFeedback() {
  firebase.auth().onAuthStateChanged(function (user) {
    document.getElementById("feedbacksubmit").addEventListener("click", function(e) {

        var feedbackdescription = document.getElementById("description").value;

        var docRef = db.collection('Users').doc(user.uid);
         //update timestamp gies us time
        var updateTimestamp = docRef.update({
              timestamp: firebase.firestore.FieldValue.serverTimestamp()
          })
      if (feedbackdescription === "") {
        window.alert("No feedback input");
      }
        if (feedbackdescription) {

        // User is signed in.
        db.collection("Feedback").doc(user.uid).set({
          feedback: feedbackdescription,
          timestamp: updateTimestamp
        })
        .then(function() {
          window.alert("Thank you for your feedback.");
          window.location.replace("redirect_mainpage.html");

        })
        .catch(function(error) {
          console.error("Error adding document: ", error);
        });
      } 
    })
  })

}