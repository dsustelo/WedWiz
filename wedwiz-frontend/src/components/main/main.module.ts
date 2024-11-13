import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home/home.component';
import { GuestsListComponent } from './guests-list/guests-list.component';

@NgModule({
  declarations: [HomeComponent, GuestsListComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class MainModule {}
