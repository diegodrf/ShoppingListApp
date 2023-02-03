import {Component, EventEmitter, Output} from '@angular/core';
import {Link} from "../shared/link";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() selectLinkEvent = new EventEmitter<Link>();
  collapsed = true;

  onSelectLink(value: Link){
    this.selectLinkEvent.emit(value);
    console.info(value)
  }
}
