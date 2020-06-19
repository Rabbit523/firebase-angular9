import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './core/components/navigation/navigation.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutCoachComponent } from './pages/about-coach/about-coach.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutCoachComponent,
    MembershipComponent,
    CoachesComponent,
    ScheduleComponent,
    FaqComponent,
    BlogComponent,
    ContactComponent,
    BlogPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
