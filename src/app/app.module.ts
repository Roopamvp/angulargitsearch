import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { StoreModule } from '@ngrx/store';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { SearchingComponent } from './components/searching/searching.component';
import { HttpClientModule } from '@angular/common/http';
import { HistoryComponent } from './components/history/history.component';
import { EffectsModule } from '@ngrx/effects';
import { historyReducer } from './store/reducers/history.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HistoryComponent,
    UserProfileComponent,
    SearchingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ history: historyReducer }),
    EffectsModule.forRoot([])
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
