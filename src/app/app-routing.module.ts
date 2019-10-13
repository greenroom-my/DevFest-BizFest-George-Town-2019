import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeLayoutComponent} from './_layout/home-layout/home-layout.component';
import {HomepageComponent} from './homepage/homepage.component';
import {SiteLayoutComponent} from './_layout/site-layout/site-layout.component';
import {ScheduleComponent} from './schedule/schedule.component';

const routes: Routes = [
    {
        path: '',
        component: HomeLayoutComponent,
        children  : [
            {
                path      : '',
                component : HomepageComponent
            },
        ]
    },
    {
        path: '',
        component: SiteLayoutComponent,
        children  : [
            {
                path      : 'schedule',
                component : ScheduleComponent
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
