import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Deal } from './deal.model';
import { ServiceInterface } from './../interfaces/service.interface';

/**
 * Deals service
 */
@Injectable()
export class DealService implements ServiceInterface<Deal> {

    private dealsUrl: string = 'http://localhost:8080/deals';
    private headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

    constructor(private http: HttpClient) {}

    findAll(): Promise<Deal[]> {
        return this.http.get(this.dealsUrl)
            .toPromise()
            .catch(this.handleError);
    }

    find(id: number): Promise<Deal> {
        const url = `${this.dealsUrl}/${id}`;

        return this.http.get(url)
            .toPromise()
            .catch(this.handleError);
    }

    create(deal: Deal): Promise<Deal> {
        return this.http
            .post(this.dealsUrl, JSON.stringify(deal), {headers: this.headers})
            .toPromise()
            .then(() => deal as Deal)
            .catch(this.handleError);
    }

    update(deal: Deal): Promise<Deal> {
        return this.http
            .put(this.dealsUrl, JSON.stringify(deal), {headers: this.headers})
            .toPromise()
            .then(() => deal as Deal)
            .catch(this.handleError);
    }

    delete(deal: Deal): Promise<Deal> {
        const url = `${this.dealsUrl}/${deal.id}`;

        return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => deal as Deal)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('Error: ', error);
        return Promise.reject(error.message || error);
    }

}
