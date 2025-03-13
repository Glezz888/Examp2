import { ComponentFixture, TestBed } from '@angular/core/testing';

import { reservaComponent } from './reserva.component';

describe('ReservaComponent', () => {
  let component: reservaComponent;
  let fixture: ComponentFixture<reservaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [reservaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(reservaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
