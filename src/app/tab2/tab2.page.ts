import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, CommonModule, RouterLink]
})
export class Tab2Page {
  public title = "Ссылки";
  public links = [
    {url:"https://ionicframework.com/",title:"Ionic Framework"},
    {url:"https://www.lipsum.com/",title:"Lipsum"},
    {url:"https://loremipsum.io/ru/",title:"Lorem Ipsum"}
  ];  
  constructor() {}

}