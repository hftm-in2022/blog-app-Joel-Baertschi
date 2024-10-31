import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Blog } from './interface/blog';
import { BlogResponse } from './interface/blog';
import { BlogService } from './service/blog.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'blog-app';
  blogs: Blog[] = [];

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    this.onGetBlogs();
  }

  onGetBlogs(): void {
    this.blogService.getBlogs().subscribe({
      next: (response: BlogResponse) => {
        console.log('Response:', response); // Zum Debuggen
        this.blogs = response.data; // Zugriff auf die data-Eigenschaft
      },
      error: (error) => console.log(error),
      complete: () => console.log('Done'),
    });
  }

  currentCardIndex = 0; // Der Index des aktuell angezeigten Cards

  // Funktion zum Wechseln zur nächsten Karte
  nextCard() {
    console.log(this.blogs);
    this.currentCardIndex = (this.currentCardIndex + 1) % this.blogs.length; // Zum nächsten oder zurück zum ersten
  }

  // Funktion zum Wechseln zur vorherigen Karte
  previousCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.blogs.length) % this.blogs.length; // Zurück zur vorherigen oder zum letzten
  }

  showRandom() {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.blogs.length);
    } while (randomIndex === this.currentCardIndex); // Sicherstellen, dass der Index nicht gleich dem aktuellen ist
    this.currentCardIndex = randomIndex;
  }

  get currentCard(): Blog {
    return this.blogs[this.currentCardIndex]; // Gibt die aktuelle Karte zurück
  }
}
