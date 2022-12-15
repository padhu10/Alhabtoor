import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PagesRouterModule } from './pages.routes';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsComponent } from '../forms/reactive-forms/reactive-forms.component';
import { TemplateDrivenFormsComponent } from '../forms/template-driven-forms/template-driven-forms.component';
import { FormsModule } from '@angular/forms';

//import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

//import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
//import { TemplateDrivenFormsComponent } from './template-driven-forms/template-driven-forms.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
//import { MatButtonModule } from '@angular/material/button';
//import { MatCardModule } from '@angular/material/card';
//import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatInputModule } from '@angular/material/input';
import {  ReactiveFormsModule } from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { MatNativeDateModule } from '@angular/material/core';
@NgModule({
    imports: [
        MatCardModule,
        MatTabsModule,
        CommonModule,
        FlexLayoutModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatInputModule,
        MatToolbarModule,
        MatIconModule,
        MatCheckboxModule,
        MatListModule,
        MatChipsModule,
        ReactiveFormsModule,
        FormsModule,
        CoreModule,
        PagesRouterModule ,
        MatDatepickerModule,
        MatNativeDateModule
      ] ,
    declarations: [
        ContactComponent,
        AboutComponent,
        ServicesComponent,
        ReactiveFormsComponent,
        TemplateDrivenFormsComponent
    ],
    exports: [
    ],
    providers: [
    ]
})
export class PagesModule {
}
