import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()

export class DataService {
	constructor(private http: Http) {}

	get(url) : Promise<any> {
		return this.http.get(url)
			.toPromise()
			.then(response => response.json())
			.catch(this.handleError);
	}

	private handleError(error: any): Promise<any> {
		console.error('an error occurred', error);
		return Promise.reject(error.message || error);
	}

	/*getHero(id: string): Promise<Hero> {
		const url = `${this.heroUrl}/${id}`;
		return this.http.get(url)
			.toPromise()
			.then(response => response.json() as Hero)
			.catch(this.handleError);
	}*/
}