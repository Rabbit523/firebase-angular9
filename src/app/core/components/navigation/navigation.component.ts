import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-intense-gym-navigation',
  templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {
  isParallax: any = false;

  constructor(private router: Router){
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url.localeCompare('/') === 0) {
          this.isParallax = true;
        } else {
          this.isParallax = false;
        }
      }
    });
  }
  ngOnInit(): void {}
}
