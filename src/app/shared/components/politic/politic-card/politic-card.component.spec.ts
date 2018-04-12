import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticCardComponent } from './politic-card.component';

describe('PoliticCardComponent', () => {
  let component: PoliticCardComponent;
  let fixture: ComponentFixture<PoliticCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoliticCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
