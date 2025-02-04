import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.scss'],
  standalone: false
})
export class AdvertisementsComponent {

  @Input() title: string = 'Anuncio Destacado';
  @Input() description: string = 'Descripción breve del anuncio.';
  @Input() imageUrl: string = '';
  @Input() link: string = '/';

  redirectToAd(): void {
    window.location.href = this.link;
  }

  constructor() { }


}
