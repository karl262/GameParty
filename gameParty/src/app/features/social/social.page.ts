import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { GroupModalComponent } from '../../shared/group-modal/group-modal.component';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
  standalone: false
})
export class SocialPage implements OnInit {
  selectedSection: string = 'friends';

  friends = [
    { photo: 'https://ui-avatars.com/api/?name=Carlos', name: 'Carlos Mendoza', status: 'Activo' },
    { photo: 'https://ui-avatars.com/api/?name=Ana', name: 'Ana Ruiz', status: 'Offline' },
    { photo: 'https://ui-avatars.com/api/?name=Luis', name: 'Luis Gómez', status: 'Activo' },
    { photo: 'https://ui-avatars.com/api/?name=Enrique', name: 'Enrique Pérez', status: 'Offline' }
  ];

  games: any[] = []; // Se inicializa vacío y se cargará desde localStorage.

  chats = [
    { name: 'Warzone Clan', lastMessage: '¿Listos para la próxima partida?' },
    { name: 'Fortnite Squad', lastMessage: '¡Ya casi estamos completos!' }
  ];

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.loadGames();
  }

  selectSection(section: string) {
    this.selectedSection = section;
  }

  // 📌 Método para abrir el modal de creación/edición de partidas
  async openGameModal(game: any = null) {
    const modal = await this.modalController.create({
      component: GroupModalComponent,
      componentProps: { game: game || { name: '', waitingPlayers: 0, maxPlayers: 0, image: '', type: '', mode: '' } }
    });

    await modal.present();

    const { data } = await modal.onWillDismiss(); // Recibir datos al cerrar el modal
    if (data) {
      if (game) {
        // Editar partida existente
        const index = this.games.indexOf(game);
        if (index > -1) {
          this.games[index] = data;
        }
      } else {
        // Agregar nueva partida
        this.addGame(data);
      }
      localStorage.setItem('games', JSON.stringify(this.games));
    }
  }

  // 📌 Método para agregar una partida a la lista y guardarla en LocalStorage
  addGame(game: any) {
    this.games.push(game);
    localStorage.setItem('games', JSON.stringify(this.games));
  }

  // 📌 Método para cargar partidas desde LocalStorage al iniciar la página
  loadGames() {
    const storedGames = localStorage.getItem('games');
    if (storedGames) {
      this.games = JSON.parse(storedGames);
    } else {
      // 📌 Si no hay partidas en localStorage, usar las predeterminadas
      this.games = [
        { name: 'Warzone', waitingPlayers: 2, maxPlayers: 4, image: 'https://via.placeholder.com/150', type: 'casual', mode: 'duo' },
        { name: 'Fortnite', waitingPlayers: 1, maxPlayers: 2, image: 'https://via.placeholder.com/150', type: 'competitivo', mode: 'squad' }
      ];
    }
  }

  // 📌 Método para eliminar una partida
  deleteGame(index: number) {
    this.games.splice(index, 1);
    localStorage.setItem('games', JSON.stringify(this.games));
  }
}