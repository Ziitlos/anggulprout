import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserModule} from './pages/user/user.module';
import {CheckModule} from './pages/check/check.module';
import {HomeComponent} from './pages/home/home.component';
import {KontaktComponent} from './pages/kontakt/kontakt.component';


@NgModule({
    imports: [
        BrowserModule,
        UserModule,
        CheckModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        KontaktComponent
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
