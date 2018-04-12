import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticListComponent } from './politic-list.component';
import { PoliticServiceModule } from '../politic-service/politic-service.module';

@NgModule({
  imports: [
    CommonModule,
    PoliticServiceModule,
  ],
  declarations: [PoliticListComponent],
  exports: [PoliticListComponent]
})
export class PoliticListModule { }
