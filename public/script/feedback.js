function addFeedback() {
  firebase.auth().onAuthStateChanged(function (user) {
    document.getElementById("feedbacksubmit").addEventListener("click", function(e) {

        var feedbackdescription = document.getElementById("feedbackdescription").value;
        var userId = db.collection("Users").doc(user.uid);

        var sendinformation = {
          usersid: userId,
          feedback: feedbackdescription,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
        }
        console.log(sendinformation);

        
      if (feedbackdescription === "") {
        window.alert("No feedback input");
      }
        if (feedbackdescription) {

        // User is signed in.
        db.collection("Feedback").add(sendinformation)
      
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
function goBack() {
    window.location.replace("redirect_mainpage.html");
  }