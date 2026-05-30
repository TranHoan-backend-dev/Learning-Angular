import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DxDrawerModule, DxListModule, DxTemplateModule } from 'devextreme-angular';

interface NavigationItem {
  id: number;
  text: string;
  icon: string;
  path: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DxDrawerModule,
    DxListModule,
    DxTemplateModule
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
  isDrawerOpened = true;

  navigationItems: NavigationItem[] = [
    { id: 1, text: 'Trang chủ', path: '/home', icon: 'home' },
    { id: 2, text: 'Cấu hình', path: '/test', icon: 'preferences' }
  ];

  constructor(private router: Router) {}

  onNavigationClick(e: any) {
    const clickedItem = e.itemData as NavigationItem;
    if (clickedItem && clickedItem.path) {
      this.router.navigate([clickedItem.path]);
    }
  }
}
