import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DealsModule } from './deals/deals.module';
import { DialogService } from './dialog.service';

@NgModule( {
    imports: [
        AppRoutingModule,
        BrowserModule,
        DealsModule,
        FormsModule,
        HttpClientModule
    ],
    declarations: [AppComponent],
    providers: [
        DialogService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}
