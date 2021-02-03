import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { iData } from './data';
import { Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable ({
    providedIn : "root"
})


export class DataService {



    public url: string = "http://localhost:3000/dataArray";

    constructor(private http: HttpClient){}

    getData(): Observable<iData[]>{
        return this.http.get<iData[]>(this.url);
    }

    updateData(id: number, newInfo: any){
        
        this.http.put( `http://localhost:3000/dataArray/${id}`, newInfo).subscribe(data => {console.log('updated')});
    }

    /*get(){
       return this.data;
    }

    add(newData: any){
        this.data.push(newData);
    }

    delete(newData: any){
        const index= this.data.indexOf(newData);
        if( index >= 0 ){
            this.data.splice(index, 1);
        }
    }*/

}
