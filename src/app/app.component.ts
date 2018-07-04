import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes Tutorial';
  loader = true;
  public jokes;
  constructor(private heroService: HeroService ) {}
  ngOnInit() {
    this.delay();
    this.getJokes();
  }
  delay() {
    setTimeout(() => {
      this.loader = false;
    }, 7000);
  }

  getJokes() {
    this.heroService.getJokes()
        .subscribe(
          data => {this.jokes = data; },
          err => console.error(err),
          () => console.log('Done loading Jokes')
        );
  }
}
