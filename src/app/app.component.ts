import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';

interface Card {
  title: string;
  subtitle: string;
  image: string;
  content: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'blog-app';

  cards: Card[] = [
    {
      title: 'Shiba Inu',
      subtitle: 'Dog Breed',
      image: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      content:
        'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
    },
    {
      title: 'Golden Retriever',
      subtitle: 'Dog Breed',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/9/93/Golden_Retriever_Carlos_%2810581910556%29.jpg',
      content:
        'The Golden Retriever is a large-sized breed of dog that was originally bred for retrieving game during hunting and shooting parties.',
    },
    {
      title: 'Bulldog',
      subtitle: 'Dog Breed',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/1/18/2008-07-28_Dog_at_Frolick_Field.jpg',
      content:
        'Bulldogs are medium-sized dogs with a wrinkled face, a pushed-in nose, and a stocky build. They are gentle and affectionate pets.',
    },
  ];

  currentCardIndex = 0; // Der Index des aktuell angezeigten Cards

  // Funktion zum Wechseln zur nächsten Karte
  nextCard() {
    this.currentCardIndex = (this.currentCardIndex + 1) % this.cards.length; // Zum nächsten oder zurück zum ersten
  }

  // Funktion zum Wechseln zur vorherigen Karte
  previousCard() {
    this.currentCardIndex =
      (this.currentCardIndex - 1 + this.cards.length) % this.cards.length; // Zurück zur vorherigen oder zum letzten
  }

  showRandom() {
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * this.cards.length);
    } while (randomIndex === this.currentCardIndex); // Sicherstellen, dass der Index nicht gleich dem aktuellen ist
    this.currentCardIndex = randomIndex;
  }

  get currentCard(): Card {
    return this.cards[this.currentCardIndex]; // Gibt die aktuelle Karte zurück
  }
}
