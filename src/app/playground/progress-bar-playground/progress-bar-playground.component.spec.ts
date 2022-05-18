import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressBarPlaygroundComponent } from './progress-bar-playground.component';

describe('ProgressBarPlaygroundComponent', () => {
  let component: ProgressBarPlaygroundComponent;
  let fixture: ComponentFixture<ProgressBarPlaygroundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressBarPlaygroundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressBarPlaygroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
