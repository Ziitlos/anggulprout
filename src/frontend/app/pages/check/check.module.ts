/**
 * Created by hkfq4 on 13.12.2016.
 */


import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {checkRouting} from './check.routing';
import {CheckComponent} from './check.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
    imports: [
        CommonModule,
        checkRouting,
        ReactiveFormsModule
    ],
    declarations: [CheckComponent],
    exports: [CheckComponent]
})

export class CheckModule {}
