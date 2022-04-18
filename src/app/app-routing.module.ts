import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionComponent } from './components/collection/collection.component';
import { ListComponent } from './components/list/list.component';
import { ViewComponent } from './components/view/view.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
    { path: '', component: ListComponent },
    { path: 'view/:name', component: ViewComponent },
    { path: 'collection', component: CollectionComponent },
    { path: 'wishlist', component: WishlistComponent },
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
  