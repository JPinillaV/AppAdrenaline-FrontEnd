import { Component, OnInit } from '@angular/core';
import {
  faHeart,
  faHome,
  faPlusCircle,
  faSearch,
  faUser,
  faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  title = 'my-AppAdrenaline';

  /*Agregar las siguientes líneas*/
  faHome = faHome;
  faSearch = faSearch;
  faPlusCircle = faPlusCircle;
  faHeart = faHeart;
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  constructor() {}

  ngOnInit(): void {}
}
