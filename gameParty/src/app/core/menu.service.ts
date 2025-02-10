import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';

export interface MenuItem {
    title: string;
    icon: string;
    route: string;
  }

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  // Menú inferior (principal)
  bottomMenuItems: MenuItem[] = [
    { title: 'Inicio', icon: 'home-outline', route: '/dashboard' },
    { title: 'Social', icon: 'people-outline', route: '/social' },
    { title: 'Buscar', icon: 'search-outline', route: '/pedidos' }
  ];

  constructor(private navCtrl: NavController) {}

  navigateTo(route: string) {
    this.navCtrl.navigateRoot(route);
  }
}
