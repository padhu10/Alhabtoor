import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FixedTableComponent } from './fixed-table/fixed-table.component';
import { FeatureTableComponent } from './feature-table/feature-table.component';
import { ResponsiveTableComponent } from './responsive-table/responsive-table.component';
import { ShowroomTableComponent } from './showroom-table/showroom-table.component';

const materialWidgetRoutes: Routes = [
  	{ path: 'Book-a-service', component: FixedTableComponent , data: { animation: 'fixed' }},
  	{ path: 'Sale-enquiry', component: FeatureTableComponent ,data: { animation: 'featured' }},
  	{ path: 'Service-center-feedback', component: ResponsiveTableComponent ,data: { animation: 'responsive' }},
    { path: 'showroom-table', component: ShowroomTableComponent ,data: { animation: '' }}
];

@NgModule({
  imports: [
    RouterModule.forChild(materialWidgetRoutes)
  	],
  exports: [
    RouterModule
  ]
})
export class TablesRouterModule {}
