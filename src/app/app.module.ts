import { StatusService } from './services/status.service';
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
import { ProfileComponent } from './profile/profile.component';
import { CommentComponent } from './comment/comment.component';
import { FbNameComponent } from './fb-name/fb-name.component';
import { PictureComponent } from './picture/picture.component';
import { StatusComponent } from './status/status.component';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    EventComponent,
    AdsComponent,
    HeaderComponent,
    MenuComponent,
    ProfileComponent,
    CommentComponent,
    FbNameComponent,
    PictureComponent,
    StatusComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [StatusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
