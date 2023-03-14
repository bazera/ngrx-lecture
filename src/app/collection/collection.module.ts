import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CollectionComponent } from './collection/collection.component';
import { CollectionRoutingModule } from './collection-routing.module';
import { StoreModule } from '@ngrx/store';
import { CollectionEffects, collectionReducer } from './state';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [CollectionComponent],
  imports: [
    CommonModule,
    CollectionRoutingModule,
    StoreModule.forFeature('collection', collectionReducer),
    EffectsModule.forFeature([CollectionEffects]),
  ],
})
export class CollectionModule {}
