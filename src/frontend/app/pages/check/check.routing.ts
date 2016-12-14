/**
 * Created by hkfq4 on 13.12.2016.
 */

import {Routes, Router, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CheckComponent} from './check.component';

const checkRoutes: Routes = [
    {
        path: 'check',
        component: CheckComponent
    }
];

export let checkRouting: ModuleWithProviders = RouterModule.forChild(checkRoutes);


