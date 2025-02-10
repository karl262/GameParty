import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage {
  nombre: string = '';
  correo: string = '';
  telefono: string = '';
  gamerTag: string = 'GAMERTAG';
  nombreValido: boolean = true;
  gamerTagValido: boolean = true;

  constructor() {}

  actualizarPerfil() {
    if (!this.nombreValido) {
      alert('El nombre solo puede contener letras y espacios.');
      return;
    }

    if (!this.validarEmail(this.correo)) {
      alert('Ingresa un correo válido.');
      return;
    }

    if (!this.validarTelefono(this.telefono)) {
      alert('El teléfono debe tener exactamente 10 dígitos.');
      return;
    }

    alert('¡Perfil actualizado con éxito!');
    console.log('Nombre:', this.nombre);
    console.log('Correo:', this.correo);
    console.log('Teléfono:', this.telefono);
  }

  guardarGamerTag() {
    if (!this.gamerTagValido) {
      alert('El GamerTag solo puede contener letras, números y guiones bajos (_).');
      return;
    }
    alert(`GamerTag actualizado: ${this.gamerTag}`);
  }

  validarNombre() {
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    this.nombreValido = nombreRegex.test(this.nombre);
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  validarTelefono(telefono: string): boolean {
    const telefonoRegex = /^[0-9]{10}$/;
    return telefonoRegex.test(telefono);
  }

  validarGamerTag() {
    const gamerTagRegex = /^[a-zA-Z0-9_]+$/; // Solo letras, números y guion bajo
    this.gamerTagValido = gamerTagRegex.test(this.gamerTag);
  }
}
