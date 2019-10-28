import { Component, OnInit } from '@angular/core';
import { Snack } from './snacks.model';
import { SnacksService} from './snacks.service';


@Component({
  selector: 'app-snacks',
  templateUrl: './snacks.page.html',
  styleUrls: ['./snacks.page.scss'],
})
export class SnacksPage implements OnInit {
  snacks: Snack[];
  

  

  constructor(private snacksService: SnacksService) { }

  ngOnInit() {
    this.snacks = this.snacksService.getAllSnacks();
  }

}
