import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*export class AppComponent {
  title = 'My first angular app';
}*/
export class AppComponent {
  //1- Event binding: How to pass from the TypeScrypt (the class) into the view (html)
  onClickMe(val){
    alert(val);
  }
  //2- Event Binding: How to pass from the typescrypt (the class) into the view (html)
  clickMessage = '';
  clicks = 1;
  onClickMe2(event: any){
    let evtMsg = event ? 'Event target is ' + event.target.tagName : '';
    this.clickMessage = (`Click #${this.clicks++}. ${evtMsg} `);
  }
}
