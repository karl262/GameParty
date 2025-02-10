import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
  standalone: false
})
export class SocialPage implements OnInit {
  selectedSection: string = 'friends'; 

  friends = [
    {
      photo: 'https://ui-avatars.com/api/?name=Carlos',
      name: 'Carlos Mendoza',
      status: 'Activo'
    },
    {
      photo: 'https://ui-avatars.com/api/?name=Ana', 
      name: 'Ana Ruiz',
      status: 'Offline'
    },
    {
      photo: 'https://ui-avatars.com/api/?name=Luis',
      name: 'Luis Gómez',
      status: 'Activo'
    },
    {
      photo: 'https://ui-avatars.com/api/?name=Enrique', 
      name: 'Enrique Pérez',
      status: 'Offline'
    }
  ];

  games = [
    {
      name: 'Warzone',
      waitingPlayers: 2,
      maxPlayers: 4
    },
    {
      name: 'Fortnite',
      waitingPlayers: 1,
      maxPlayers: 2
    },
    {
      name: 'Minecraft',
      waitingPlayers: 2,
      maxPlayers: 2
    },
    {
      name: 'PUBG',
      waitingPlayers: 0,
      maxPlayers: 4
    },
    {
      name: 'Overwatch',
      waitingPlayers: 1,
      maxPlayers: 6
    },
  ];

  chats = [
    {
      name: 'Warzone Clan',
      lastMessage: '¿Listos para la próxima partida?'
    },
    {
      name: 'Fortnite Squad',
      lastMessage: '¡Ya casi estamos completos!'
    }
  ];

  selectSection(section: string) {
    this.selectedSection = section;
  }

  constructor() { }

  ngOnInit() {
  }
}
