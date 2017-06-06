import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
<<<<<<< HEAD
import { ContentComponent } from './content/content.component';
import { EventComponent } from './event/event.component';
import { AdsComponent } from './ads/ads.component';
=======
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { ContentComponent } from './content/content.component';
>>>>>>> c567b9d54b7c4214b35a78f47433bd64afdc70a6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContentComponent,
    EventComponent,
    AdsComponent
=======
    HeaderComponent,
    MenuComponent,
    ContentComponent
>>>>>>> c567b9d54b7c4214b35a78f47433bd64afdc70a6
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
