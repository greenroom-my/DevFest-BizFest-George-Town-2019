import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    public footerActive: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

    toggleFooter() {
        this.footerActive = !this.footerActive;
    }

}
