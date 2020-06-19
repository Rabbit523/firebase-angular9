import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutCoachComponent } from './pages/about-coach/about-coach.component';
import { MembershipComponent } from './pages/membership/membership.component';
import { CoachesComponent } from './pages/coaches/coaches.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { FaqComponent } from './pages/faq/faq.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogPostComponent } from './pages/blog-post/blog-post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'membership', component: MembershipComponent },
  { path: 'coaches', component: CoachesComponent },
  { path: 'coach/:id', component: AboutCoachComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogPostComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
