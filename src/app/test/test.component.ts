import { Component } from '@angular/core';

@Component({
  selector: 'app-test', //[we can use it in more 2 ways, 1 is add a . here ".app-test" then use in html as a class for eg <div class="app-test"> 
  templateUrl: './test.component.html',// 2nd way is declar it in a square bracket like [app-test] then use it as a attribute in html -- <div app-test>  
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name = "From Test component.ts";
public siteUrl = window.location.href;
greetUser(){
  return "Hello "+ this.name;
}
}

