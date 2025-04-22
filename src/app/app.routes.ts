import { Routes } from '@angular/router';
import { HeaderFooterComponent } from './header-footer/header-footer.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [

    {
        path: '',
        component: HeaderFooterComponent,
        children: [
            {path: '', component: HomeComponent},
            { path: '**', redirectTo: '', pathMatch: 'full' } // Redirect any unknown child routes to HomepageComponent
        ]
    },
    { path: '**', redirectTo: '' } // Fallback route for the main app

];
