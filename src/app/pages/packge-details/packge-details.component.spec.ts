import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackgeDetailsComponent } from './packge-details.component';

describe('PackgeDetailsComponent', () => {
  let component: PackgeDetailsComponent;
  let fixture: ComponentFixture<PackgeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackgeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackgeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
