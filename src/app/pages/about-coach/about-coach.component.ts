import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
declare function _init(): any;
export class Coach {
  id: number;
  name: string;
  job: string;
  avatar: string;
  rates: {
    fitness: number;
    crossfit: number;
    yoga: number;
    bodybuilding: number;
  };
}

@Component({
  selector: 'app-about-coach',
  templateUrl: './about-coach.component.html',
  styleUrls: ['./about-coach.component.scss']
})
export class AboutCoachComponent implements OnInit {
  coaches: Array<Coach> = [
    {
      id: 1,
      name: 'Ryan Jackson',
      job: 'CrossFit',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-ryan-jackson-270x270.jpg'
    },
    {
      id: 2,
      name: 'Emily Perkins',
      job: 'Fitness Coach',
      rates: {
        fitness: 70,
        crossfit: 54,
        yoga: 87,
        bodybuilding: 65
      },
      avatar: 'assets/images/user-emily-perkins-437x437.jpg'
    },
    {
      id: 3,
      name: 'Samantha Ruiz',
      job: 'Yoga',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-samantha-ruiz-270x270.jpg'
    },
    {
      id: 4,
      name: 'Austin Ortiz',
      job: 'Bodybuilding',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-austin-ortiz-270x270.jpg'
    },
    {
      id: 5,
      name: 'Alisa Milano',
      job: 'Fitness',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-alisa-milano-270x270.jpg'
    },
    {
      id: 6,
      name: 'Roy Jons',
      job: 'CrossFit',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-roy-jons--270x270.jpg'
    },
    {
      id: 7,
      name: 'Emily Blunt',
      job: 'Fitness',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-emily-blunt-270x270.jpg'
    },
    {
      id: 8,
      name: 'Glen Johnson',
      job: 'Bodybuliding',
      rates: {
        fitness: 50,
        crossfit: 60,
        yoga: 60,
        bodybuilding: 60
      },
      avatar: 'assets/images/user-flen-johnson-270x270.jpg'
    },
  ];
  coach: Coach;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    _init();
    // tslint:disable-next-line: radix
    const id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.coaches.forEach((item) => {
      if (item.id === id) {
        this.coach = item;
      }
    });
  }

}
