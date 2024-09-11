import { Component } from '@angular/core';
import { homeLinks } from 'src/app/Models/homeLinks';
import { homeLinksService } from 'src/app/Services/homeLinks.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  links: Array<homeLinks> | undefined
  constructor(private service: homeLinksService) {
    this.service.getAllLinks().subscribe(data => {
      console.log({ data });
      this.links = data
    })
  }

}
