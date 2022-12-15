import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';

const pagesRoutes: Routes = [
  	{ path: 'Update-mangers-details', component: ContactComponent ,data: { animation: 'contact' } },
  	{ path: 'add-hoilday-data', component: AboutComponent ,data: { animation: 'about' }},
  	{ path: 'delete-hoilday-list', component: ServicesComponent ,data: { animation: 'services' }},
];

@NgModule({
  imports: [
    RouterModule.forChild(pagesRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class PagesRouterModule {}
