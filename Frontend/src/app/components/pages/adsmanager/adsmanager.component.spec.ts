import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdsmanagerComponent } from './adsmanager.component';

describe('AdsmanagerComponent', () => {
  let component: AdsmanagerComponent;
  let fixture: ComponentFixture<AdsmanagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdsmanagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdsmanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
