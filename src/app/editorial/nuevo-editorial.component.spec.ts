import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoEditorialComponent } from './nuevo-editorial.component';

describe('NuevoEditorialComponent', () => {
  let component: NuevoEditorialComponent;
  let fixture: ComponentFixture<NuevoEditorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoEditorialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoEditorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
