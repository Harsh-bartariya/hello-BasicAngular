import { Component } from '@angular/core';

@Component({
  selector: 'app-test', //[we can use it in more 2 ways, 1 is add a . here ".app-test" then use in html as a class for eg <div class="app-test"> 
  templateUrl: './test.component.html',// 2nd way is declar it in a square bracket like [app-test] then use it as a attribute in html -- <div app-test>  
  styleUrls: ['./test.component.css']
})
export class TestComponent {
public name = "From Test component.ts";
public siteUrl = window.location.href;
public myID = "TestId";
public successClass = "text-success";//class bind ke lie phle aise variable me class assign kr di uske bad html me sqaure bracket ke through utha lenge
public hasError = false;// there is one more syntax to declar class binding, in which apply a class based on a expression that evaluates to be true or false -->

public isSpecial = true;// to use ng diretives declaring new property in ts class and adding one object messageClass
public messageClasses ={
  "text-success": !this.hasError,//not of this.has error | ye apply hogi kuki not false bnega expression
  "text-danger": this.hasError,
  "text-special": this.isSpecial//ye bhi apply hogi kyuki true bnega expression

}
constructor(){
  setTimeout(() => {
    this.hasError= true; //this setTimeout is a function in js, help to execute code later,
  }, 5000); //ye time hai Ms me, or ye poora constructor me dala hai, init ke purpose se
} //without reloading hamara code change ho jayega
//object wala line jo print hoga usko nhi change kr payega ye , normal line ko kr dega

public isDisabled = true;
greetUser(){
  return "Hello "+ this.name;
}
}

