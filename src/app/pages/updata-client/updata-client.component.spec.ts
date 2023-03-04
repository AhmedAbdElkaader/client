import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataClientComponent } from './updata-client.component';

describe('UpdataClientComponent', () => {
  let component: UpdataClientComponent;
  let fixture: ComponentFixture<UpdataClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdataClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdataClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
