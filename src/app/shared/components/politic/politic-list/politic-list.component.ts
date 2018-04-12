import { Component, OnInit } from '@angular/core';
import { PoliticService } from '../politic-service/politic.service';

@Component({
  selector: 'vtf-politic-list',
  templateUrl: './politic-list.component.html',
  styleUrls: ['./politic-list.component.scss']
})
export class PoliticListComponent implements OnInit {

  politics$: any;

  constructor(private politicService: PoliticService) { }

  ngOnInit() {

    this.politics$ = this.politicService.get();

  }

}
