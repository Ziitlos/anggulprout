/**
 * Created by hkfq4 on 01.12.2016.
 */

import {NgModule} from '@angular/core';
import {UserComponent} from './user.component';
import {CommonModule} from '@angular/common';
import {userRouting} from './user.routing';

@NgModule({
    imports: [CommonModule, userRouting],
    declarations: [UserComponent],
    exports: [UserComponent]
})

export class UserModule {}

