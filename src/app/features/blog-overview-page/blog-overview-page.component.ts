import { NgIf, AsyncPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { Entries } from '../../core/services/blog-backend.service';

@Component({
  selector: 'app-blog-overview-page',
  standalone: true,
  imports: [NgIf, AsyncPipe, MatCardModule, MatButtonModule, MatIcon],
  templateUrl: './blog-overview-page.component.html',
  styleUrl: './blog-overview-page.component.scss',
})
export class BlogOverviewPageComponent {
  @Input({ required: true }) model!: Entries;
}
