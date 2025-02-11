import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ModalController} from "@ionic/angular";

@Component({
  selector: 'app-group-modal',
  templateUrl: './group-modal.component.html',
  styleUrls: ['./group-modal.component.scss'],
  standalone: false
})
export class GroupModalComponent  implements OnInit {

  @Output() gameAdded = new EventEmitter<any>(); // Emitirá el nuevo juego agregado

  newGame: any = {
    name: '',
    type: '',
    mode: '',
    maxPlayers: '',
    currentPlayers: '',
    image: ''
  };
  constructor(private modalController:  ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  saveGame() {
    if (this.newGame.name && this.newGame.type && this.newGame.mode) {
      this.modalController.dismiss(this.newGame); // Enviar datos al padre
    }
  }


  ngOnInit() {}

}
