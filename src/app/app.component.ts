import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sudria-frontend';

  list: string[] = ['1', '2', '3' ];
  names:string[] = new Array('Mary','Tom','Jack','Jill');
}
