import faker from "faker";

export class Student {
    firstName: string;
    lastName: string;
    location: {
        latitude: number,
        longtitude: number,
    }

    constructor() {
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longtitude: parseFloat(faker.address.longitude()),
        };
    }

    createMarker(map: any) {
        const marker = new google.maps.Marker({
            
            map: map,
            position: {
                lat: this.location.latitude,
                lng: this.location.latitude,
            },
        });
        
        const contentString = `<p>${this.firstName} ${this.lastName}</p> <p>${this.location.latitude}, ${this.location.longtitude}</p>`

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        }
    }




// const randomName = faker.name.findName(); // Rowan Nikolaus
// const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
// const randomCard = faker.helpers.createCard(); // random contact card containing many properties
