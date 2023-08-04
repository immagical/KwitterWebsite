user = localStorage.getItem("username"); 
document.getElementById("welcomename").innerHTML = user + "!"; 


var firebaseConfig = {
  apiKey: "AIzaSyBjW0iMO-tJJMW3-kpYTrOADJcod43lm9U",
  authDomain: "kwitter4-d2abd.firebaseapp.com",
  databaseURL: "https://kwitter4-d2abd-default-rtdb.firebaseio.com",
  projectId: "kwitter4-d2abd",
  storageBucket: "kwitter4-d2abd.appspot.com",
  messagingSenderId: "991402442412",
  appId: "1:991402442412:web:4718bfba948550a9f9a909"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
    

function LogOut() {
    console.log("Logging out user " + user);
    localStorage.removeItem("username"); 
    window.location = "index.html"; 
}

function addRoom() {
    console.log("addRoom() called");
    roomname = document.getElementById("roomname").value;
    console.log("roomname = " + roomname);
    firebase.database().ref("/").child(roomname).update({
          purpose : "adding room"
    })
    localStorage.setItem("roomname", roomname);
    console.log("localStorage roomname set to " + roomname);
    window.location = "kwitter_page.html";
    console.log("redirecting to kwitter_page.html");
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {
document.getElementById("rooms").innerHTML = "";
snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    roomnames = childKey;
   //Start code
   console.log("room names - " + roomnames); 
   row = '<div id = ' + roomnames + '" onclick = "redirectToRoomName(this.id)" class = "room_name"> #' + roomnames + '</div><hr>'; 
   document.getElementById("rooms").innerHTML += row;
   //End code
   });});}
getData();

function redirectToRoomName(chosenname) {
   console.log(chosenname); 
   localStorage.setItem("RoomName", chosenname); 
   window.location = "kwitter_page.html"; 

}

function send() { 
    RoomName = localStorage.getItem("RoomName")
    msg = document.getElementById("message").value; 
    firebase.database().ref(RoomName).push({
        name : user,
        message : msg, 
        likes : 0
    });
    document.getElementById("message").value = ""; 
    console.log(RoomName)

}

