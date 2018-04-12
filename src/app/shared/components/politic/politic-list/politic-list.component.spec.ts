import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticListComponent } from './politic-list.component';

describe('PoliticListComponent', () => {
  let component: PoliticListComponent;
  let fixture: ComponentFixture<PoliticListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
