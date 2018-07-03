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
  // setTimeout(function(){ alert("Hello"); }, 3000);
  delay(){
    setTimeout(() => { 
      this.loader = false; 
    }, 3000);
  }
}
