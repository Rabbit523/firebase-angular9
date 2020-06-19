import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoachComponent } from './about-coach.component';

describe('AboutCoachComponent', () => {
  let component: AboutCoachComponent;
  let fixture: ComponentFixture<AboutCoachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutCoachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
