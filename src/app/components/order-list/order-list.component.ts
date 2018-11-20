import { Component, OnInit } from '@angular/core';

import { GridReadyEvent } from 'ag-grid-community';
import { OrderListService } from '../../services';
import { OrderListResponseModel } from '../../models';

@Component({
    selector: 'app-order-list',
    templateUrl: './order-list.component.html',
    styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

    public columnDefs;
    public rowData;

    constructor(private _orderListService: OrderListService) {}

    ngOnInit() {
      this._orderListService.getOrders().subscribe((data: OrderListResponseModel) => {
        this.columnDefs = data.columnDefs;
        this.rowData = data.rowData;
      });
    }

    public onGridReady(ev: GridReadyEvent) {
      console.log('grid-ready:', this.columnDefs, this.rowData);
      ev.api.refreshCells();
    }
}
