import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxTemplateModule, DxToolbarModule } from 'devextreme-angular';

@Component({
  selector: 'app-header',
  imports: [
    CommonModule,
    DxToolbarModule,
    DxTemplateModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  leftMenus: HeaderMenu[] = [
    {
      icon: 'menu',
      stylingMode: 'text',
      onClick: () => this.openAlert(),
      class: ''
    },
    {
      icon: 'menu',
      stylingMode: 'text',
      class: ''
    },
    {
      icon: 'menu',
      stylingMode: 'text',
      class: ''
    }
  ];

  rightMenus: HeaderMenu[] = [
    {
      icon: 'menu',
      stylingMode: 'text',
      class: ''
    },
    {
      icon: 'user',
      stylingMode: 'text',
      class: ''
    }
  ]

  openAlert() {
    alert('hehe');
  }
}

interface HeaderMenu {
  icon: string,
  stylingMode: string,
  onClick?: (e: any) => void,
  class: string
}
