import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { NgIf } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [NgIf, RouterLink],
  standalone: true,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private authService: AuthService) { }

  handleLogOut() {
    this.authService.logout();
  }

  get isLibrarian() {
    return this.authService.isLibrarian();
  }
}
