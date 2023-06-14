import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoGeneroComponent } from './nuevo-genero.component';

describe('NuevoGeneroComponent', () => {
  let component: NuevoGeneroComponent;
  let fixture: ComponentFixture<NuevoGeneroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuevoGeneroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuevoGeneroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
