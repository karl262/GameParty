import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent  implements OnInit {

  @Input() titulo: string = '';  // Recibe el valor de titulo

  constructor() { }

  ngOnInit() {}
}
