navigator.geolocation.getCurrentPosition(
    position => {
        console.log("Latitude: " + position.coords.latitude);
        console.log("Longitude: " + position.coords.longitude);
        console.log("Altitude: " + position.coords.altitude);
        console.log("Heading: " + position.coords.heading);
    }, error => {
        console.error("Error getting location: ", error);
    });