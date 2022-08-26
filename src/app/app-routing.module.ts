import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { SelectfieldComponent } from './components/selectfield/selectfield.component';
import { SidesComponent } from './components/sides/sides.component';
import { TabComponent } from './components/tab/tab.component';
import { TablesComponent } from './components/tables/tables.component';
import { TextfieldComponent } from './components/textfield/textfield.component';

const routes: Routes = [
  {
    path:'accordion', component:AccordionComponent
   
  },
  {
    path:'button', component:ButtonComponent
  },
  {
    path:'card', component:CardComponent
  },
  {
    path:'checkbox', component:CheckboxComponent
  },
  {
    path:'navbar', component:NavbarComponent
  },
  {
    path:'pagination', component:PaginationComponent
  },
  {
    path:'radio', component:RadiobuttonComponent
  },
  {
    path:'select', component:SelectfieldComponent
  },
  {
    path:'sides', component:SidesComponent
  },
  {
    path:'tabs', component:TabComponent
  },
  {
    path:'table', component:TablesComponent
  },
  {
    path:'textfield', component:TextfieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
