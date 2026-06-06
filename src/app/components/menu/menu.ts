/*
=== OLD CODE (TRƯỚC KHI UPDATE THEO MOCKUP) ===
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxButtonModule, DxDrawerModule, DxTemplateModule, DxScrollViewModule } from 'devextreme-angular';

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    DxDrawerModule,
    DxTemplateModule,
    DxButtonModule,
    DxScrollViewModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  isDrawerOpen = false;

  handleCloseDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen
  }
}
==============================================
*/

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DxButtonModule, DxDrawerModule, DxTemplateModule, DxScrollViewModule } from 'devextreme-angular';

interface AppItem {
  name: string;
  icon: string;
  iconBg: string;
  badge?: number;
}

interface Category {
  title: string;
  items: AppItem[];
}

@Component({
  selector: 'app-menu',
  imports: [
    CommonModule,
    DxDrawerModule,
    DxTemplateModule,
    DxButtonModule,
    DxScrollViewModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.scss',
})
export class Menu {
  isDrawerOpen = true; // Bật mặc định để hiển thị trực quan như mockup

  handleCloseDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  recentApps: AppItem[] = [
    { name: 'Tài liệu điện tử', icon: 'doc', iconBg: '#2563eb', badge: 1 },
    { name: 'Nhân viên', icon: 'card', iconBg: '#6366f1' },
    { name: 'Chat', icon: 'comment', iconBg: '#3b82f6' },
    { name: 'Danh bạ', icon: 'group', iconBg: '#8b5cf6' },
    { name: 'OneAI', icon: 'tips', iconBg: '#f97316' },
    { name: 'Công việc', icon: 'isnotblank', iconBg: '#22c55e', badge: 3 },
    { name: 'Kho phim', icon: 'video', iconBg: '#6366f1' },
    { name: 'Mạng xã hội', icon: 'globe', iconBg: '#3b82f6' },
    { name: 'Mục tiêu', icon: 'runner', iconBg: '#3b82f6' }
  ];

  categories: Category[] = [
    {
      title: 'Tài chính',
      items: [
        { name: 'Thu nợ', icon: 'money', iconBg: '#1e3a8a' }
      ]
    },
    {
      title: 'Kinh doanh',
      items: [
        { name: 'CRM', icon: 'chart', iconBg: '#2563eb' },
        { name: 'Khách hàng', icon: 'user', iconBg: '#312e81' },
        { name: 'Thị trường', icon: 'globe', iconBg: '#1e40af' }
      ]
    },
    {
      title: 'Nhân sự',
      items: [
        { name: 'Nhân viên', icon: 'card', iconBg: '#6366f1' },
        { name: 'Mục tiêu', icon: 'runner', iconBg: '#3b82f6' },
        { name: 'eLearning Pro', icon: 'bookmark', iconBg: '#22c55e' }
      ]
    },
    {
      title: 'Văn phòng số',
      items: [
        { name: 'Công việc', icon: 'isnotblank', iconBg: '#22c55e', badge: 3 },
        { name: 'Quy trình', icon: 'chevrondown', iconBg: '#0ea5e9' },
        { name: 'Tài liệu điện tử', icon: 'doc', iconBg: '#2563eb', badge: 1 },
        { name: 'Ghi chép', icon: 'event', iconBg: '#f59e0b' },
        { name: 'Văn thư', icon: 'book', iconBg: '#f97316' },
        { name: 'Mạng xã hội', icon: 'globe', iconBg: '#3b82f6' },
        { name: 'Phòng họp', icon: 'video', iconBg: '#6366f1' },
        { name: 'Danh bạ', icon: 'group', iconBg: '#8b5cf6' },
        { name: 'Kho phim', icon: 'video', iconBg: '#6366f1' }
      ]
    }
  ];
}
