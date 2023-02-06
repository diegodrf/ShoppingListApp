import {Component} from '@angular/core';
import {Link} from "./shared/link";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionToShow: Link;

  constructor() {
    this.sectionToShow = Link.ShoppingList;
  }
  title = 'ShoppingListApp';

  onChangeSection(section: Link) {
    if(this.sectionToShow !== section){
      this.sectionToShow = section;
    }
  }
}
