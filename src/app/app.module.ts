import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ContentComponent } from './content/content.component';
import { EventComponent } from './event/event.component';
import { AdsComponent } from './ads/ads.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CommentComponent } from './comment/comment.component';
import { FbNameComponent } from './fb-name/fb-name.component';
import { PictureComponent } from './picture/picture.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EventComponent,
    AdsComponent,
    HeaderComponent,
    MenuComponent,
    CommentComponent,
    FbNameComponent,
    PictureComponent,
    StatusComponent
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
