function updateMap() {
    console.log("Updating map with realtime data")
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                cases = element.infected;
                if (cases<100){
                    color = "rgb(0, 153, 51)";
                }

                else if(cases<200){
                    color = "rgb(255, 255, 102)";
                }

                else if(cases<300){
                    color = "rgb(255, 51, 153)";
                }

                else if(cases<400){
                    color = "rgb(51, 102, 255)";
                }
                else{
                    color = `rgb(255, 0, 0)`;
                }

                // // Mark on the map
                new mapboxgl.Marker({
                    draggable: false,
                    color: color
                }).setLngLat([longitude, latitude])
                .addTo(map); 
            });
        })
}
updateMap();
let interval = 20000;
setInterval(updateMap, interval); 