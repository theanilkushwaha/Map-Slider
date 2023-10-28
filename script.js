// JSON data for map lat lang view
let data = {
    "accordion": [
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/ShipDetails-4%20%281%29_0.png",
            "start_date": "MAR 6",
            "end_date": "MAR 9",
            "lat": -80.137314,
            "lng": 26.122438,
            "event_body": "There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
            "day_number": 2,
            "location_name": "location",
            "stop_name": null
        },
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-07/onboard-activities-activities-fitness-large-c037.jpg.image_.1440.524.high_.jpg",
            "start_date": "MAR 5",
            "end_date": "MAR 6",
            "lat": -80.137314,
            "lng": 18.3381,
            "event_body": "There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
            "day_number": 1,
            "location_name": "location",
            "stop_name": null
        },
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/Cruises%201.jpg",
            "start_date": "MAR  9",
            "end_date": "MAR 11",
            "lat": -64.8941,
            "lng": 18.3381,
            "event_body": "Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.Format: 2023-06-13 09:29:05. Leave blank to use the time of form submission.",
            "day_number": 3,
            "location_name": "location",
            "stop_name": null
        },
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/image--gallery-2.png",
            "start_date": "MAR 12",
            "end_date": "MAR 14",
            "lat": -66.1185,
            "lng": 18.4671,
            "event_body": "TestThere is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
            "day_number": 4,
            "location_name": "location",
            "stop_name": null
        },
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-06/Cruises%202_1.jpg",
            "start_date": "MAR 15",
            "end_date": "MAR 16",
            "lat": -71.1389,
            "lng": 21.4675,
            "event_body": "Itinerary 2There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
            "day_number": 5,
            "location_name": "location",
            "stop_name": null
        },
        {
            "image": "http://dev-ict-drupal.oslabs.app/sites/default/files/2023-04/cruise%20image%203_3.jpg",
            "start_date": "MAR 17",
            "end_date": "MAR 18",
            "lat": -75.9603729,
            "lng": 24.5712,
            "event_body": "There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.There is a security update available for your version of Drupal. To ensure the security of your server, you should update immediately! See the available updates page for more information and to install your missing updates.",
            "day_number": 6,
            "location_name": "location",
            "stop_name": "Switzland"
        }
    ],
    "depart_text": "MAR 5, 2023",
    "conclude_text": "MAR 16, 2023",
    "title": "7 - DAY ITINERARY"
}

// showing the map view to the 1st lat lang and making it to be as by default visible

let map = L.map('map').setView([26.122438, -80.137314], 5);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

// marker addtion
let marker = L.marker([51.5, -0.09]).addTo(map);

// targeting the accordian as list variable
let list = document.getElementById("accordin");
// assigning count as 1 to be used for display purpose used in function
let count = 1;

data.accordion.forEach((element, index) => {
    // adding the marker as per lat lang provide data and setting the map view function call
    let marker = L.marker([element.lng, element.lat]).addTo(map).bindPopup('Day'+element.day_number);

    marker.addEventListener("click", () => {
        setMapView(index, element.lat, element.lng);
    })

    // adding all the values to the <ul> as inner html in innerHtml.........
    // all accordian elements are displyed here...........
    list.innerHTML += `
    <li>
   
    <label for="${index}"  onclick="setMapView(${index},${element.lat},${element.lng})"> Day-${element.day_number}.${element.start_date}-${element.end_date}.${element.location_name}</span><span>+</span></label>
    <div class="content${index} " style="display:none;">
    <img src="${element.image}">
        <p>${element.event_body}</p>
    </div>
</li>
     `


});

// setmapView to show all the location as per let lang 
function setMapView(index, lat, lng) {

    // getting the class name of content class since index is increasing using for each loop index= 0,1,2,3,4,5
    // getElement by class method returns a NodeList object.A NodeList is an array-like collection (list) of nodes.The nodes in the list can be accessed by index. The index starts at 0


    let selected = document.getElementsByClassName(`content${index}`);

    // if count ==1 means if its clicked so set display block 
    if (count === 1) {
        selected[0].style.display = "block";
        map.flyTo([lng, lat], 10);
        // increasing the count so for next click it will not equal to 1 so go to else block
        count++;
    }

    else {

        // now coming to the else block it will not equal to one so that display is none
        selected[0].style.display = "none";
        // now setting the default value of count and map view for upcoming clicks to equal to one
        count = 1;
        map.flyTo([26.122438, -80.137314], 5);
    }

}
