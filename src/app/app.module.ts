import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TextfieldComponent } from './components/textfield/textfield.component';
import { SelectfieldComponent } from './components/selectfield/selectfield.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { ButtonComponent } from './components/button/button.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { TablesComponent } from './components/tables/tables.component';
import { CardComponent } from './components/card/card.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { TabComponent } from './components/tab/tab.component';
import { SidesComponent } from './components/sides/sides.component';

@NgModule({
  declarations: [
    AppComponent,
    TextfieldComponent,
    SelectfieldComponent,
    CheckboxComponent,
    RadiobuttonComponent,
    ButtonComponent,
    AccordionComponent,
    TablesComponent,
    CardComponent,
    NavbarComponent,
    PaginationComponent,
    TabComponent,
    SidesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
