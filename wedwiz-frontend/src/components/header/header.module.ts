import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { ProfileButtonComponent } from './profile-button/profile-button.component';

@NgModule({
  declarations: [TopBarComponent, SearchBoxComponent, ProfileButtonComponent],
  imports: [CommonModule],
  exports: [TopBarComponent],
})
export class HeaderModule {}
