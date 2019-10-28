import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Snack } from '../snacks.model';
import { SnacksService } from '../snacks.service';


@Component({
  selector: 'app-snack-detail',
  templateUrl: './snack-detail.page.html',
  styleUrls: ['./snack-detail.page.scss'],
})
export class SnackDetailPage implements OnInit {
  
LoadedSnack: Snack; 
  constructor(private activatedRoute: ActivatedRoute, private snacksService: SnacksService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('snackId'))
      {
        return;
      }
      const snackId = paramMap.get('snackId');
      this.LoadedSnack = this.snacksService.getSnacks(snackId);
    
    });

  
}

}

