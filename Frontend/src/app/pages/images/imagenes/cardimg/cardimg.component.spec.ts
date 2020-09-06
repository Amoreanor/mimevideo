import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardimgComponent } from './cardimg.component';

describe('CardimgComponent', () => {
  let component: CardimgComponent;
  let fixture: ComponentFixture<CardimgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardimgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
