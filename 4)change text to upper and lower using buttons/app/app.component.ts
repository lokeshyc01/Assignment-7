import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Question4';
  public str="Marvellous Infosystems";
  public upper()
  {
    this.str=this.str.toUpperCase();
  }
  public lower()
  {
     this.str= this.str.toLocaleLowerCase();
  }
}
