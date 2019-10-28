import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'snacks', pathMatch: 'full' },
  
  { path: 'snacks', 
  
children: [
  {
    path: '',
    loadChildren: './snacks/snacks.module#SnacksPageModule'
  },
  {
    path: ':snackId',
    loadChildren: './snacks/snack-detail/snack-detail.module#SnackDetailPageModule' 
  }
]
}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
