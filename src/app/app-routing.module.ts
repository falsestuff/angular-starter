import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'view/:name', component: ViewComponent },
    { path: '**', component: ListComponent }
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
        onSameUrlNavigation: 'reload'
      }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}
  