import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ImprintComponent } from './pages/imprint/imprint.component';
import { DatasecComponent } from './pages/datasec/datasec.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'impressum', component: ImprintComponent },
  { path: 'datenschutz', component: DatasecComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
