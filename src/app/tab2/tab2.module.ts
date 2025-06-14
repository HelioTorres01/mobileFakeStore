// src/app/tab2/tab2.module.ts

// src/app/tab2/tab2.module.ts

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Certifique-se de importar CommonModule
import { FormsModule } from '@angular/forms';

import { Tab2Page } from './tab2.page';
import { Tab2PageRoutingModule } from './tab2-routing.module';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule, // <-- Importe CommonModule
    FormsModule,
    Tab2PageRoutingModule,
    ExploreContainerComponent // <--- Importe o COMPONENTE standalone diretamente
  ],
  declarations: [Tab2Page] // <--- Tab2Page DEVE ser declarado aqui
})
export class Tab2PageModule {}