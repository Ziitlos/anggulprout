/**
 * Created by hkfq4 on 01.12.2016.
 */


import{Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {UserComponent} from './user.component';

const userRoutes: Routes = [
    {
        path: 'user',
        component: UserComponent
    }
    ];

export let userRouting: ModuleWithProviders = RouterModule.forChild(userRoutes);
