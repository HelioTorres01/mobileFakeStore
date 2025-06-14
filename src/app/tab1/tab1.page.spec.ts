import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component'; // Certifique-se do caminho correto

import { Tab1Page } from './tab1.page'; // Importe a página

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Tab1Page NÃO é standalone, então ela DEVE ser declarada aqui:
      declarations: [Tab1Page],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponent // <--- Importe o COMPONENTE standalone aqui
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});