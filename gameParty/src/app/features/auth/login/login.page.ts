import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import { AuthService } from "../../../core/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage = '';

  constructor(private fb: FormBuilder, private router: Router , private authService: AuthService) {
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {
    // Definir los controles del formulario
    this.loginForm = this.fb.group({
      user: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }


  login(): void {
    if (this.loginForm.invalid) {
      this.errorMessage = 'Por favor, completa todos los campos correctamente.';
      return;
    }

    const { user, password } = this.loginForm.value;
    this.authService.login(user, password).subscribe({
      next: () => {
        this.router.navigate(['/dashboard']); // Redirige tras login exitoso
      },
      error: (error) => {
        this.errorMessage = error.message || 'Error al iniciar sesión.';
      },
    });
  }

  redirectTo(): void {
    this.router.navigate(['/register']);
  }


}
