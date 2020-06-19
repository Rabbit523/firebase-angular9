import { Component, OnInit } from '@angular/core';
declare function _init(): any;
export class Coach {
  id: number;
  name: string;
  job: string;
  description: string;
  rate: string;
  avatar: string;
}

@Component({
  selector: 'app-coaches',
  templateUrl: './coaches.component.html',
  styleUrls: ['./coaches.component.scss']
})
export class CoachesComponent implements OnInit {
  coaches: Array<Coach> = [
    {
      id: 1,
      name: 'Ryan Jackson',
      job: 'CrossFit',
      description: 'He has more than 10 years of experience in CrossFit and professional athletics.',
      rate: '$80,00',
      avatar: 'assets/images/user-ryan-jackson-270x270.jpg'
    },
    {
      id: 2,
      name: 'Emily Perkins',
      job: 'Fitness',
      description: 'Emily can teach you all peculiarities of fitness and aerobics in a group or individually.',
      rate: '$20,00',
      avatar: 'assets/images/user-emily-perkins-270x270.jpg'
    },
    {
      id: 3,
      name: 'Samantha Ruiz',
      job: 'Yoga',
      description: 'Our leading yoga coach, Samantha will help you reach full harmony with your body.',
      rate: '$35,00',
      avatar: 'assets/images/user-samantha-ruiz-270x270.jpg'
    },
    {
      id: 4,
      name: 'Austin Ortiz',
      job: 'Bodybuilding',
      description: 'Austin is not only our most called-for coach, but also a winner of many championships.',
      rate: '$50,00',
      avatar: 'assets/images/user-austin-ortiz-270x270.jpg'
    },
    {
      id: 5,
      name: 'Alisa Milano',
      job: 'Fitness',
      description: 'She is one of our youngest trainers who, however, has a lot of experience in fitness.',
      rate: '$20,00',
      avatar: 'assets/images/user-alisa-milano-270x270.jpg'
    },
    {
      id: 6,
      name: 'Roy Jons',
      job: 'CrossFit',
      description: 'He is known for his unique methods of CrossFit training that give amazing results.',
      rate: '$70,00',
      avatar: 'assets/images/user-roy-jons--270x270.jpg'
    },
    {
      id: 7,
      name: 'Emily Blunt',
      job: 'Fitness',
      description: 'Fitness workouts with Emily will help you acquire the perfect shape of your body.',
      rate: '$40,00',
      avatar: 'assets/images/user-emily-blunt-270x270.jpg'
    },
    {
      id: 8,
      name: 'Glen Johnson',
      job: 'Bodybuliding',
      description: 'Glenn is the real professional when it comes to effective bodybuilding training.',
      rate: '$55,00',
      avatar: 'assets/images/user-flen-johnson-270x270.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
    _init();
  }

}
