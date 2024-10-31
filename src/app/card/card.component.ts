// src/app/card/card.component.ts
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { Blog } from '../interface/blog';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [MatCardModule, MatButtonModule, CommonModule], // Material Modules importieren
})
export class CardComponent {
  @Input() blog!: Blog;
}
