import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

import { GlobalVariable } from '../../global';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class CompanyMasterService {
    url: string;
	private headers: Headers;
	private options: RequestOptions;

	constructor(private http: Http) {
		this.url = `${GlobalVariable.BASE_API_URL}/`; // designated API call
		this.headers = new Headers({
			'Content-Type': 'application/json'	
		});
		this.options = new RequestOptions({headers: this.headers});
    }
    
    all(): Promise<any[]> {
        return Promise.resolve(true).then(() => {
            return COMPANIES;
        })
		// return this.http.get(this.url).toPromise().then((response) => {
		// 	return response.json();
		// });
    }
    
    create(country): Promise<any> {
        return Promise.resolve(true).then(() => {
            COMPANIES.push(country);
        });
    }
}

export var COMPANIES = [
    {
        id: 1223,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', // could e a string or an int  -> check it out
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1224,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1225,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1226,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1227,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1228,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1229,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1230,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1231,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    },
    {
        id: 1232,
        name: 'JLM ENterprises',
        address: 'DOnt wanna know',
        phone: '0112378458', 
        email: 'jlm@morrisions.lk',
        status: false
    }
];