import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Question3';
  public str="Marvellous Infosystems";
  public Fun()
  {
    this.str="Educating for Better tomorrow"
  }
}
