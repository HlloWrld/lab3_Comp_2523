import faker from "faker";

export class internship {
    businessName: string;
    location: {
        latitude: number,
        longtitude: number,
    }

    constructor() {
        this.businessName = faker.company.companyName();
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
        
        const contentString = `<p>Welcome to ${this.businessName}</p>`
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
        }
    }


