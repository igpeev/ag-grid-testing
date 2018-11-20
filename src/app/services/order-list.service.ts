import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { MOCK_DATA } from '../mocks/data.mock';
import { OrderListResponseModel } from '../models';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor() { }

  public getOrders(): Observable<OrderListResponseModel> {
    return of(MOCK_DATA);
  }
}
