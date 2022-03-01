import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosotrosComponent } from './nosotros.component';
import {AppComponent} from "../app/app.component";

describe('NosotrosComponent', () => {
  let component: NosotrosComponent;
  let fixture: ComponentFixture<NosotrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosotrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosotrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('deberia de cargar un atributo con un valor', () => {
    expect(component.atributo).toBe("Valor");
  });
  it('should render title', () => {

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('div.alert span')?.textContent)
      .toContain('Valor Máximo');
  });
});
