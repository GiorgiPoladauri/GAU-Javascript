import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Home route (main page)
  { path: 'about', component: AboutComponent }  // About page route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
