import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class DigitransitService {

  constructor(private http: Http) { }

  getRoutes(name: string){
    const url: string = "https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql"
    const headers = new Headers({'Content-Type': 'application/graphql'})
    const options = new RequestOptions({ headers: headers });
    let data = `{
        stops(name: "${name}") {
          id
  	      name
          patterns {

      	    name

        	}
        }
    }`

    return this.http.post(url, data, options)
                    .map(res => res.json());
  }
}


