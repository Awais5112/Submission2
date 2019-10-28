import { Injectable } from '@angular/core';
import { Snack } from './snacks.model';

@Injectable({
  providedIn: 'root'
})
export class SnacksService {
  private snacks: Snack[] = [
    {
id: 'g1',
title: 'Puffcorn',
imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Puffcorn_Example_Frito_Lay.jpg',
snacknames: ['potatoes','masala','salt' ]
    },
    {
      id: 'g2',
      title: 'Doritos',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Doritos.jpg/800px-Doritos.jpg',
      snacknames: ['potatoes','masala','salt' ]
          }
  
 
];

  constructor() { }
  getAllSnacks(){
    return [...this.snacks];
  }
  getSnacks(snackId: string) {
    return {...this.snacks.find( snack => {
      return snack.id === snackId;
    })};

  }
  deleteSnack(snackId: string){
    this.snacks = this.snacks.filter(snack => {
      return snack.id !== snackId;

    });
    }
}
