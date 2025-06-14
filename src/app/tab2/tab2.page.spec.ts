import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component'; // Certifique-se do caminho correto

import { Tab2Page } from './tab2.page'; // Importe a página

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      // Tab2Page NÃO é standalone, então ela DEVE ser declarada aqui:
      declarations: [Tab2Page],
      imports: [
        IonicModule.forRoot(),
        ExploreContainerComponent // <--- Importe o COMPONENTE standalone aqui
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Tab2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});