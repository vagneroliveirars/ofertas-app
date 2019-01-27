import { Component, OnInit } from '@angular/core';

import { Deal } from './deal.model';
import { DealService } from './deal.service';
import { DialogService } from './../dialog.service';

/**
 * Deal listing component
 */
@Component({
  selector: 'deals-list',
  templateUrl: 'deals-list.component.html'
})
export class DealsListComponent implements OnInit {

    deals: Deal[] = [];
    message: {};
    cssClasses: {};
    private currentTimeout: any;

    constructor(
        private dealService: DealService,
        private dialogService: DialogService) {}

    ngOnInit(): void {
        this.dealService.findAll()
            .then((deals: Deal[]) => {
                this.deals = deals;
            }).catch(err => {
                console.log(err);
                this.showMessage({
                    type: 'danger',
                    text: 'Ocorreu um erro ao buscar a lista de ofertas!'
                });
            });
    }

    onDelete(deal: Deal): void {
        this.dialogService.confirm('Deseja deletar a oferta ' + deal.title + '?')
            .then((canDelete: boolean) => {
                if (canDelete) {
                    this.dealService
                        .delete(deal)
                        .then(() => {
                            this.deals = this.deals.filter((d : Deal) => d.id != deal.id);

                            this.showMessage({
                                type: 'success',
                                text: 'Oferta deletada!'
                            });
                        }).catch(error => {
                            console.log(error);
                            this.showMessage({
                                type: 'danger',
                                text: 'Ocorreu um erro ao deletar a oferta!'
                            });
                        });
                }
            });
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
    }

}
