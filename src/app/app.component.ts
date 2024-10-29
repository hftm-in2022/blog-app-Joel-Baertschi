// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component'; // Importiere die CardComponent

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent], // Füge CardComponent zu den Imports hinzu
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Korrigiere styleUrl zu styleUrls
})
export class AppComponent {
  title = 'blog-app';
}
