import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../../core/menu.service'; // Importa la interfaz MenuItem
import { MenuService } from '../../core/menu.service'; // Importa el servicio MenuService


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: false
})
export class FooterComponent  implements OnInit {
  bottomMenuItems: MenuItem[] = []; // Especifica que es un arreglo de MenuItem

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Asigna los ítems del menú desde el servicio
    this.bottomMenuItems = this.menuService.bottomMenuItems;
  }

  navigate(route: string) {
    // Llama al método de navegación del servicio
    this.menuService.navigateTo(route);
  }

}
