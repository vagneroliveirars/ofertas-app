import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DealDetailComponent } from './deal-detail.component';
import { DealsListComponent } from './deals-list.component';
import { DealRoutingModule } from './deal-routing.module';
import { DealService } from './deal.service';

@NgModule( {
    imports: [
        CommonModule,
        DealRoutingModule,
        FormsModule
    ],
    declarations: [
        DealDetailComponent,
        DealsListComponent
    ],
    exports: [
        DealsListComponent
    ],
    providers: [
        DealService
    ]
})

export class DealsModule {}
