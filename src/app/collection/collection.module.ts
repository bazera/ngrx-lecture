import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { StoreModule } from '@ngrx/store';
import { CollectionEffects, collectionReducer } from './state';
import { EffectsModule } from '@ngrx/effects';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    StoreModule.forFeature('collection', collectionReducer),
    EffectsModule.forFeature([CollectionEffects]),
    TranslateModule,
  ],
})
export class CollectionModule {}
