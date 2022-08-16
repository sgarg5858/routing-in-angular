import { Component } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';
import { filter, map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-routing';
  loading$:Observable<boolean> | undefined;
  constructor(private router:Router){
    this.loading$ = this.router.events.pipe(
      filter((event)=> event instanceof NavigationStart || 
                       event instanceof NavigationEnd ||
                       event instanceof NavigationCancel ||
                       event instanceof NavigationError 
      ),
      map((e)=>e instanceof NavigationStart)
      )
      
  }
}
