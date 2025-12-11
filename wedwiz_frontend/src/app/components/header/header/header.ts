import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderButton } from '../header-button/header-button';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, HeaderButton],
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {}
