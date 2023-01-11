import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoTarjetasComponent } from './listado-tarjetas.component';

describe('ListadoTarjetasComponent', () => {
  let component: ListadoTarjetasComponent;
  let fixture: ComponentFixture<ListadoTarjetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoTarjetasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoTarjetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
