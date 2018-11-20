import { Order } from '../models';

const rowData = [
  new Order(1, 10),
  new Order(2, 20),
  new Order(3, 30),
  new Order(4, 40),
  new Order(5, 50),
  new Order(6, 60),
  new Order(7, 70),
  new Order(8, 80),
  new Order(9, 90),
  new Order(10, 100),
  new Order(11, 110),
  new Order(12, 120),
  new Order(13, 130),
  new Order(14, 140),
  new Order(15, 150),
  new Order(16, 160),
  new Order(17, 170),
  new Order(18, 180),
  new Order(19, 190),
  new Order(20, 200)
];

const columnDefs = [
  {
      headerName: 'ID',
      field: 'id',
      type: 'numericColumn',
      width: 100
  },
  {
      headerName: 'Quantity',
      field: 'quantity',
      type: 'numericColumn',
      width: 160
  }
];

export const MOCK_DATA = { columnDefs, rowData };
