function validateForm() {
    var n = document.forms["newLocation"]["form-name"].value;
    var description = document.forms["newLocation"]["form-desc"].value;
    var t = document.forms["newLocation"]["type"].value;
    if (!objectPlaced || n == null || n == "" || description == null || description == "" || t == null || t == "") {
        //alert("Please enter all information (Name, Description, Type, Location).");
        alert("Bitch, don't even try that shit");
        return false;
    }
    else {
        if (t == "0")
            t = "bathroom";
        else if (t == "1")
            type = "water";
        else if (t == "2")
            t = "cycling";
        else
            t = "wifi";
        post("../php/input/postLocation.php", {'lat': markerLat}, 'post');
    }
}


var x = document.getElementById("demo");
  
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(initMap);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    position.coords.latitude;
    position.coords.longitude;  
}

function newLocation() {
    alert("HELLO")
}

function findLocations() {
    alert("HELLO")
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);
    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            console.log(key);
            console.log(params[key]);
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

function httpGetAsync(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

function Location(latitude, longitude, type) {
    this.lat = latitude;
    this.lon = longitude;
    this.type = type;
}
