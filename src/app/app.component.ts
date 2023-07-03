import { Component } from '@angular/core';
//Decorator component--it tells angular hey its not a regular class its a component  
@Component({
  selector: 'app-root',//custome html tag
  //templateUrl: './app.component.html',  //points to html file which has the main view
  template: `<div>
     Inline template 
     </div>` ,
  //styleUrls: ['./app.component.css']//points to the style attach to it, only to this component
  styles: [`
  div {
    color: blue;
  }
  `]
})
export class AppComponent {
  title = 'hello-BasicAngular';
}
