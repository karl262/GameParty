import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false
})
export class RegisterPage {
  nombre: string = '';
  email: string = '';
  password: string = '';
  dia: number | null = null;
  mes: string | null = null;
  anio: number | null = null;

  dias: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  meses: string[] = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];

  // Generar años solo para personas de 15 años en adelante
  anios: number[] = Array.from(
    { length: 100 - 15 }, // Rango para 15 años en adelante
    (_, i) => new Date().getFullYear() - (i + 15)
  );

  constructor(private navCtrl: NavController, private router: Router) {}

  registrarse() {
    if (!this.nombre || !this.email || !this.password || !this.dia || !this.mes || !this.anio) {
      alert('Por favor completa todos los campos.');
      return;
    }

    // Validar que el nombre solo contenga letras y espacios
    if (!this.validarNombre(this.nombre)) {
      alert('El nombre solo puede contener letras y espacios.');
      return;
    }

    // Validar email con regex
    if (!this.validarEmail(this.email)) {
      alert('Ingresa un correo válido.');
      return;
    }

    // Validar que la contraseña tenga mínimo 8 caracteres
    if (this.password.length < 8) {
      alert('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    // Validar que el usuario tenga al menos 15 años
    if (!this.validarEdadMinima(this.dia, this.mes, this.anio)) {
      alert('Debes tener al menos 15 años para registrarte.');
      return;
    }

    const fechaNacimiento = `${this.dia} de ${this.mes} de ${this.anio}`;
    console.log('Usuario Registrado:', {
      nombre: this.nombre,
      email: this.email,
      password: this.password,
      fechaNacimiento
    });

    alert(`¡Registro exitoso!\nFecha de Nacimiento: ${fechaNacimiento}`);
  }

  validarNombre(nombre: string): boolean {
    const nombreRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Solo letras y espacios
    return nombreRegex.test(nombre);
  }

  validarEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  }

  validarEdadMinima(dia: number, mes: string, anio: number): boolean {
    const fechaNacimiento = new Date(anio, this.meses.indexOf(mes), dia);
    const fechaActual = new Date();
    const edad = fechaActual.getFullYear() - fechaNacimiento.getFullYear();

    if (edad < 15) {
      return false;
    }

    if (
      edad === 15 &&
      (fechaActual.getMonth() < fechaNacimiento.getMonth() ||
        (fechaActual.getMonth() === fechaNacimiento.getMonth() && fechaActual.getDate() < fechaNacimiento.getDate()))
    ) {
      return false;
    }

    return true;
  }

  redirectTo(): void {
    this.router.navigate(['/login']);
  }
}
