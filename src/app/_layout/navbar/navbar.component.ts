import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

    public navActive: Boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleNav() {
        this.navActive = !this.navActive;
    }

}
