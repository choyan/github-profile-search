import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {

    private username: string;
    private client_id = 'ac267835481fa7e84286';
    private client_secret = 'db0fb2ec448069634c4feec86e5e8f4841815196';

    constructor(private _http: Http) {
        console.log("Github ready");
        this.username = 'choyan';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
                    .map( res => res.json());
    }


}
