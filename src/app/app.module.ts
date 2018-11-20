import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { OrderListComponent } from './components';

@NgModule({
    declarations: [AppComponent, OrderListComponent],
    imports: [BrowserModule, AgGridModule.withComponents([])],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
