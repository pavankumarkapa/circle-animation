import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AnimationComponent } from './animation/animation.component';

const routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'animation',
    component: AnimationComponent
  }
  
];

@NgModule({
  declarations: [
    AppComponent,
    AnimationComponent
    
    ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
