import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMoreInfoComponent } from './update-more-info.component';

describe('UpdateMoreInfoComponent', () => {
  let component: UpdateMoreInfoComponent;
  let fixture: ComponentFixture<UpdateMoreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateMoreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateMoreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
