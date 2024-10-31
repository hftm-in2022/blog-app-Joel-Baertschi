import { TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';

describe('CardComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardComponent], // Use imports instead of declarations
      // other imports or providers, if necessary
    }).compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(CardComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
