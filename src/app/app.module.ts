import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { FirstNamePipe } from './first-name.pipe';
import { PlaceComponent } from './place/place.component';
import { GroupComponent } from './group/group.component';
import { IndexComponent } from './index/index.component';
import { BaseComponent } from './icons/base.component';
import { CalendarComponent } from './icons/calendar.component';
import { MailComponent } from './icons/mail.component';
import { IconMapPinComponent } from './icons/icon-map-pin.component';
import { PlusComponent } from './icons/plus.component';
import { IconStarEmptyComponent } from './icons/icon-star-empty.component';
import { IconStarFullComponent } from './icons/icon-star-full.component';
import { ThreeDotComponent } from './icons/three-dot.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NavTransitionComponent } from './nav-transition/nav-transition.component';
import { MenuDrawerComponent } from './menu-drawer/menu-drawer.component';
import { StatsComponent } from './stats/stats.component';
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent, data: { state: 'index' } },
  { path: 'place', component: PlaceComponent, data: { state: 'place' } },
  { path: 'group', component: GroupComponent, data: { state: 'group' } }
];
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    FirstNamePipe,
    PlaceComponent,
    GroupComponent,
    IndexComponent,
    BaseComponent,
    CalendarComponent,
    MailComponent,
    IconMapPinComponent,
    PlusComponent,
    IconStarEmptyComponent,
    IconStarFullComponent,
    ThreeDotComponent,
    StarRatingComponent,
    NavTransitionComponent,
    MenuDrawerComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
