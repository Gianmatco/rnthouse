import { Component, OnInit } from '@angular/core';
import { faFacebook, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faHouseCircleCheck } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{
  fafacebook = faFacebook;
  faWhatsapp = faWhatsapp;
  fahousecirclecheck = faHouseCircleCheck;

  ngOnInit(): void {
  }


}

