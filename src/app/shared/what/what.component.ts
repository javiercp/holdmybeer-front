import { Component, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'what-component',
  templateUrl: './what.component.html',
  styleUrls: ['./what.component.scss'],
})
export class WhatComponent {
  @ViewChild('myTable') table: any;

  expanded: any = {};
  
  rows = [
    { number: '1', brew: 'Mikkeller/Black', type: 'Stout', abp: '14.5', left: '45%', prices: '6€ / 3.5€' },
    { number: '2', brew: 'Mahou/5 estrellas', type: 'Lagger', abp: '3.5', left: '75%', prices: '4€ / 2€' }
  ];

  toggleExpandRow(row) {
    this.table.rowDetail.toggleExpandRow(row);
  }
}