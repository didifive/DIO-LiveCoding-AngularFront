import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookCartComponent } from './components/book-cart/book-cart.component';
import { SobreComponent } from './components/sobre/sobre.component';

const routes: Routes = [
  { path: '', component: BookCartComponent },
  { path: 'sobre', component: SobreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
