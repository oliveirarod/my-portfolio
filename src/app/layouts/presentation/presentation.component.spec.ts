import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresetationComponent } from './presentation.component';

describe('PresetationComponent', () => {
  let component: PresetationComponent;
  let fixture: ComponentFixture<PresetationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PresetationComponent]
    });
    fixture = TestBed.createComponent(PresetationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
