import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DealsListComponent } from './deals-list.component';
import { DealDetailComponent } from './deal-detail.component';

const dealRoutes: Routes = [
    {
        path: 'deals',
        component: DealsListComponent
    },
    {
        path: 'deals/save',
        component: DealDetailComponent
    },
    {
        path: 'deals/save/:id',
        component: DealDetailComponent
    }
];

@NgModule( {
    imports: [
        RouterModule.forChild( dealRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class DealRoutingModule {}
