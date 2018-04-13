import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PoliticService } from './politic.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [PoliticService]
})
export class PoliticServiceModule { }
