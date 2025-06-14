// src/app/tab1/tab1.module.ts (or tab2.module.ts, tab3.module.ts)

// src/app/tab1/tab1.module.ts

// src/app/tab1/tab1.module.ts

import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- Certifique-se de importar CommonModule
import { FormsModule } from '@angular/forms';

import { Tab1Page } from './tab1.page';
import { Tab1PageRoutingModule } from './tab1-routing.module';

// Importe ExploreContainerComponent (o componente standalone) diretamente
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule, // <-- Importe CommonModule para pipes e diretivas
    FormsModule,
    Tab1PageRoutingModule,
    ExploreContainerComponent // <--- Importe o COMPONENTE standalone diretamente
  ],
  declarations: [Tab1Page] // <--- Tab1Page DEVE ser declarado aqui, pois NÃO é standalone
})
export class Tab1PageModule {}