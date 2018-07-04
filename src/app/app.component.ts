import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'Tour of Heroes Tutorial';
  loader = true;

  ngOnInit() {
    this.delay();
  }
  delay(){
    setTimeout(() => { 
      this.loader = false; 
    }, 7000);
  }
}
