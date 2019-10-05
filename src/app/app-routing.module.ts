import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeLayoutComponent} from './_layout/home-layout/home-layout.component';
import {HomepageComponent} from './homepage/homepage.component';

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
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
