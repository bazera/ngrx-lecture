import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { AppState } from './state/app.state';
import { collectionReducer } from './state/collection.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { movieReducer } from './state/movie.reducer';
import { EffectsModule } from '@ngrx/effects';
import { MovieEffects } from './state/movie.effects';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot<AppState>({
      collection: collectionReducer,
      movies: movieReducer,
    }),
    EffectsModule.forRoot([MovieEffects]),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
