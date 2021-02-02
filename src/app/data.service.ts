import { Injectable } from '@angular/core';

@Injectable ({
    providedIn : "root";
})


export class DataService {
    
    data= [{
        name: {fname: "Rojesh", lName: "Dangol"};
        address: {street: "816 Perry Hwy",
                    apt: 24,
                    city: 'Pittsburgh',
                    state: 'PA',
                    zip: 15229},
        contact: { email: 'abc@gmail.com',
                    phone: 12312321}
    }
    ]


    get(){
       return this.data;
    }

    add(newData: any){
        this.data.push(newData);
    }

    delete(newData: any){
        const index: this.data.indexOf(newData);
        if(index >= 0){
            this.data.splice(index, 1);
        }
    }

}
