import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './_layout/navbar/navbar.component';
import {HomeLayoutComponent} from './_layout/home-layout/home-layout.component';
import {HomepageComponent} from './homepage/homepage.component';
import {FooterComponent} from './_layout/footer/footer.component';
import {ScheduleComponent} from './schedule/schedule.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {AttendingComponent} from './attending/attending.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SpeakersComponent} from './speakers/speakers.component';
import {SpeakerDialogComponent} from './_dialog/speaker-dialog/speaker-dialog.component';
import {MatDialogModule} from '@angular/material';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { PartnerComponent } from './partner/partner.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        HomeLayoutComponent,
        HomepageComponent,
        FooterComponent,
        ScheduleComponent,
        SiteLayoutComponent,
        AttendingComponent,
        SpeakersComponent,
        SpeakerDialogComponent,
        PartnerComponent
    ],
    exports: [
        MatDialogModule
    ],
    entryComponents: [
        SpeakerDialogComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        AngularFirestoreModule,
        AngularFireModule.initializeApp(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
