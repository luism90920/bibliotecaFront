import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleGeneroComponent } from './detalle-genero.component';

describe('DetalleGeneroComponent', () => {
  let component: DetalleGeneroComponent;
  let fixture: ComponentFixture<DetalleGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
