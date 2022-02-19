import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.css']
})
export class Home2Component implements OnInit {



  games = [{
    game : "Deus Ex: Mankind Divided",
    platform: " Xbox One, PS4, PC",
    release : "August 23"
},
{
    game : "Hue",
    platform: " Xbox One, PS4, Vita, PC",
    release : "August 23"
},
{
    game : "The Huntsman: Winter's Curse",
    platform: "PS4",
    release : "August 23"
},
{
    game : "The Huntsman: Winter's Curse",
    platform: "PS4",
    release : "August 23"
}]

  // games : [{
  //   game: string;
  //   platform: string;
  //   release: string;
  // }] | undefined;

  constructor() { }

  
 
 


  ngOnInit(): void {
  }


  

  


}


