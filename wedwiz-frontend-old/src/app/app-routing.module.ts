import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/main/home/home.component';
import { GuestsListComponent } from '../components/main/guests-list/guests-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'guestslist', component: GuestsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
