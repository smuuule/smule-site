import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  goToLink(url: string) {
    window.open(url, "_blank");
    return false;
  }

}
