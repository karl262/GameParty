import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private token: string | null = null;

  constructor(private router: Router) { }

  login(identifier: string, password: string): Observable<any> {
    // Simulación de credenciales
    if ((identifier === 'carlos123@gmail.com' || identifier === 'carlos') && password === 'carloship123') {
      const mockResponse = {
        token: 'fake-jwt-token',
        user: { id: 1, username: 'carlos' }
      };
      this.storeToken(mockResponse.token);
      this.redirectTo('/dashboard'); // Redirige al dashboard
      return of(mockResponse);
    } else if (identifier === 'user' && password === 'password123') {
      const mockResponse = {
        token: 'fake-jwt-token-user',
        user: { id: 2, username: 'user' }
      };
      this.storeToken(mockResponse.token);
      this.redirectTo('/dashboard'); // Redirige al dashboard
      return of(mockResponse);
    } else {
      return new Observable((observer) => {
        observer.error({ message: 'Credenciales incorrectas' });
      });
    }
  }

  isAuthenticated(): boolean {
    this.token = sessionStorage.getItem('authToken');
    return !!this.token;
  }

  private storeToken(token: string): void {
    sessionStorage.setItem('authToken', token);
    this.token = token;
  }

  private redirectTo(route: string): void {
    this.router.navigate([route]);
  }

  logout(): void {
    sessionStorage.removeItem('authToken');
    this.token = null;
    this.redirectTo('/login');
  }

}
