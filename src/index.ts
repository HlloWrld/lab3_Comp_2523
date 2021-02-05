// import { Student } from "./student";
// import { Internship } from "./internship";

import { internship } from "./internship";
import { Student } from "./student";

const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 1,
    center: {
        lat: 0,
        lng: 0,
    },
});

const newStudent = new Student();
newStudent.createMarker(map);


const newInternship = new internship();
newInternship.createMarker(map);
