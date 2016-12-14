import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {KontaktComponent} from './pages/kontakt/kontakt.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'kontakt',
        component: KontaktComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
