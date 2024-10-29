// src/app/card/card.component.ts
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule, MatButtonModule, CommonModule], // Material Modules importieren
})
export class CardComponent {
  @Input() title!: string; // Eingabe für den Titel der Karte
  @Input() subtitle!: string; // Eingabe für den Untertitel der Karte
  @Input() image!: string; // Eingabe für das Bild der Karte
  @Input() content!: string;
}
