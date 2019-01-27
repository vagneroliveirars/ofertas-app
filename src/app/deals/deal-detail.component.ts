import { Deal } from './deal.model';
import { DealService } from './deal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

/**
 * Deal details component
 */
@Component({
    selector: 'deal-detail',
    templateUrl: 'deal-detail.component.html'
})
export class DealDetailComponent implements OnInit {

    deal: Deal;
    private isNew: boolean = true;
    message: {};
    cssClasses: {};
    private currentTimeout: any;

    constructor(
        private dealService: DealService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.deal = new Deal('', '', '', null, null, null, '', null, '', []);

        this.route.params.forEach((params: Params) => {
            let id: number = +params['id'];

            if (id) {
                this.isNew = false;

                this.dealService.find(id)
                .then((deal: Deal) => {
                    this.deal = deal;
                });
            }
        });

    }

    getFormGroupClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-group': true,
            'has-danger': !isValid && !isPristine,
            'has-success': isValid && !isPristine
        };
    }

    getFormControlClass(isValid: boolean, isPristine: boolean): {} {
        return {
            'form-control': true,
            'form-control-danger': !isValid && !isPristine,
            'form-control-success': isValid && !isPristine
        };
    }

    onSubmit(): void {
        let promise;

        this.deal.publishDate = new Date(this.deal.publishDate);
        this.deal.endDate = new Date(this.deal.endDate);

        if (this.isNew) {
            promise = this.dealService.create(this.deal);
        } else {
            promise = this.dealService.update(this.deal);
        }

        promise.then(() => {
            this.goBack();

            this.showMessage({
                type: 'success',
                text: 'Oferta Salva!'
            });
        }).catch(error => {
            this.showMessage({
                type: 'danger',
                text: error._body || error
            });
        });
    }

    goBack(): void {
        this.location.back();
    }

    private showMessage(message: {type: string, text: string}): void {
        this.message = message;
        this.buildClasses(message.type);

        if (this.currentTimeout) {
            clearTimeout(this.currentTimeout);
        }

        this.currentTimeout = setTimeout(() => {
            this.message = undefined;
        }, 5000);
    }

    private buildClasses(type: string): void {
        this.cssClasses = {
            'alert': true
        };

        this.cssClasses['alert-' + type] = true;
    }

}
