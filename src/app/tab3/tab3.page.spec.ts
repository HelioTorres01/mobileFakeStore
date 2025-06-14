import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component'; // Certifique-se do caminho correto

import { Tab3Page } from './tab3.page'; // Importe a página

describe('Tab3Page', () => {
  let component: Tab3Page;
  let fixture: ComponentFixture<Tab3Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Tab3Page NÃO é standalone, então ela DEVE ser declarada aqui:
      declarations: [Tab3Page],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponent // <--- Importe o COMPONENTE standalone aqui
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});