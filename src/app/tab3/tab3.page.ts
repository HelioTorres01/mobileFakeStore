// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab3',
//   templateUrl: 'tab3.page.html',
//   styleUrls: ['tab3.page.scss'],
//   standalone: false,
// })
// export class Tab3Page {

//   constructor() {}

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false
})
export class Tab3Page {
  author = {
    name: 'Helio Mathews Oliveira Torres',
    ra: '01679176',
    course: 'Análise e Desenvolvimento de Sistemas',
    email: 'heliotorres63@gmail.com',
    linkedin: 'https://www.linkedin.com/in/heliotorres1', // Opcional
    github: 'https://github.com/HelioTorres01' // Opcional
  };

  constructor() {}
}
