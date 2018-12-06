import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { ButtonComponent } from './button/button.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'slider',
    pathMatch: 'full'
  },
  {
    path: 'slider',
    component: SliderComponent
  },
  {
    path: 'button',
    component: ButtonComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
