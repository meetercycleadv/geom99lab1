let map;

function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      center: { lat: 28.597244718652508, lng: 77.21373532657798, },
      mapTypeId: "terrain",
    });

    
    const flightPlanCoordinates = [
        { lat: 21.32782229604823, lng: 72.83499708918097},
        { lat: 28.597244718652508, lng: 77.21373532657798},
        { lat: 30.724009883875606, lng: 76.71906816257665},
        { lat: 34.08395401642375, lng: 74.80194672289642},
        { lat: 34.151483788569934, lng: 77.57875401849702},
        { lat: 34.27923583261851, lng: 77.60462187158464},
        { lat: 33.770951753964745, lng: 78.66447444872021},
        { lat: 32.693071335753096, lng: 79.27144836367768},
    ];
    const flightPath = new google.maps.Polyline({
      path: flightPlanCoordinates,
      geodesic: true,
      strokeColor: "#FF0000",
      strokeOpacity: 1.0,
      strokeWeight: 2,
    });
  
    flightPath.setMap(map);

    const tourStops = [
        [{lat: 21.32782229604823, lng: 72.83499708918097}, "Surat"],
        [{ lat: 28.597244718652508, lng: 77.21373532657798}, "Delhi"],
        [{ lat: 30.724009883875606, lng: 76.71906816257665}, "Chandigarh"],
        [{ lat: 34.08395401642375, lng: 74.80194672289642}, "Srinagar"],
        [{ lat: 34.151483788569934, lng: 77.57875401849702}, "Leh"],
        [{ lat: 34.27923583261851, lng: 77.60462187158464}, "Khardung La"],
        [{ lat: 33.770951753964745, lng: 78.66447444872021}, "Pangong Tso"],
        [{ lat: 32.693071335753096, lng: 79.27144836367768}, "Umling La"],
      ];
      // Create an info window to share between markers.
      const infoWindow = new google.maps.InfoWindow();
    
      // Create the markers.
      tourStops.forEach(([position, title], i) => {
        const marker = new google.maps.Marker({
          position,
          map,
          title: `${title}`,
          optimized: false,
        });
    
        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", () => {
          infoWindow.close();
          infoWindow.setContent(marker.getTitle());
          infoWindow.open(marker.getMap(), marker);
        });
      });
    }

window.initMap = initMap;