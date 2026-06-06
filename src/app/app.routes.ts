import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Header } from './common/layout/header/header';
import { Sidebar } from './common/layout/sidebar/sidebar';
import { Menu } from './components/menu/menu';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        component: Home
    },
    {
        path: 'header',
        component: Header
    },
    {
        path: 'sidebar',
        component: Sidebar
    },
    {
        path: 'menu',
        component: Menu
    }
];
