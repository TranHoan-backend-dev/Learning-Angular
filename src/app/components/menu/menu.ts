import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxDrawerModule } from 'devextreme-angular';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    DxDrawerModule,
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
}
