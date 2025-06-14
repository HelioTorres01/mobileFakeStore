// src/app/tab3/tab3.module.ts
// src/app/tab3/tab3.module.ts

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Certifique-se de importar CommonModule
import { FormsModule } from '@angular/forms';

import { Tab3Page } from './tab3.page';
import { Tab3PageRoutingModule } from './tab3-routing.module';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule, // <-- Importe CommonModule
    FormsModule,
    Tab3PageRoutingModule,
    ExploreContainerComponent // <--- Importe o COMPONENTE standalone diretamente
  ],
  declarations: [Tab3Page] // <--- Tab3Page DEVE ser declarado aqui
})
export class Tab3PageModule {}