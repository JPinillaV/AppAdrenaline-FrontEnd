import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // const parallax = document.getElementById('parallax');
    // window.addEventListener('scroll', function () {
    //   let offset = window.pageYOffset;
    //   parallax!.style.backgroundPositionY = offset * 0.7 + 'px';
    // });
    // More information about this technique/pen:
    // https://medium.com/@electerious/parallax-scrolling-with-js-controlled-css-variables-63cfe96820c7#.o1kkd4cte

    function parallax() {
      var parallax = document.getElementById('parallax');
      parallax!.style.top = -(window.pageYOffset / 4) + 'px';
    }

    window.addEventListener('scroll', parallax, false);
  }
}
