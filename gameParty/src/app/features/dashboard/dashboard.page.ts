import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: false
})
export class DashboardPage implements OnInit {
  games = [
    {
      img: '../../../assets/img/warzone.jpg',
      title: 'Call of Duty: Warzone',
      type: 'Copmpetitivo Scuads',
      playersRequired: 4,
      availableGames: 1
    },
    {
      img: '../../../assets/img/fortnite.jpg',
      title: 'Fortnite',
      type: 'Casual Duos',
      playersRequired: 2,
      availableGames: 3
    },
    {
      img: '../../../assets/img/minecraft.jpg',
      title: 'Minecraft',
      type: 'Sandbox',
      playersRequired: 4,
      availableGames: 1
    },
    {
      img: '../../../assets/img/lol.jpg',
      title: 'League of Legends',
      type: 'MOBA',
      playersRequired: 4,
      availableGames: 2
    },
    {
      img: '../../../assets/img/fifa23.jpg',
      title: 'FIFA 23',
      type: 'Deportes',
      playersRequired: 4,
      availableGames: 1
    },
    {
      img: '../../../assets/img/apex.jpg',
      title: 'Apex Legends',
      type: 'Battle Royale',
      playersRequired: 4,
      availableGames: 3
    },
    {
      img: '../../../assets/img/Valorant.jpg',
      title: 'Valorant',
      type: 'Shooter',
      playersRequired: 4,
      availableGames: 1
    },
    {
      img: '../../../assets/img/pubg.jpg',
      title: 'PUBG',
      type: 'Battle Royale',
      playersRequired: 4,
      availableGames: 2
    }
  ];

  constructor() { }

  ngOnInit() { }

}
