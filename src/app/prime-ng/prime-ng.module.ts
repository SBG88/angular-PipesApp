import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    ButtonModule,
    MenuModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
