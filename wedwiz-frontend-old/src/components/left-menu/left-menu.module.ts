import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { LeftMenuButtonComponent } from './left-menu-button/left-menu-button.component';

@NgModule({
  declarations: [LeftMenuComponent, LeftMenuButtonComponent],
  imports: [CommonModule],
  exports: [LeftMenuComponent],
})
export class LeftMenuModule {}
