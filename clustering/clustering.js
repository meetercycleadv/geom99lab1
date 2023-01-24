function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 51.540,  lng: -86.319 }
    zoom: 3,
  });
  // Create an array of alphabetical characters used to label the markers.
  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // Add some markers to the map.
  // Note: The code uses the JavaScript Array.prototype.map() method to
  // create an array of markers based on a given "locations" array.
  // The map() method here has nothing to do with the Google Maps API.
  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });
  // Add a marker clusterer to manage the markers.
  new MarkerClusterer(map, markers, {
    imagePath:
      geom99lab1/clustering/ontarioparkslist.csv,
  });
}
const locations = [
 ="{ lat: "&B2&", lng: "&C2&"},"
];
