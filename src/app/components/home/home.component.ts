import { Component, OnInit } from '@angular/core';
import {
  faHeart,
  faHome,
  faPlusCircle,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faUser = faUser;
  constructor() {}

  ngOnInit(): void {}
}
