import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { tap } from 'rxjs';
import { CollectionActions, CollectionState, selectCollection } from '../state';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss'],
})
export class CollectionComponent implements OnInit {
  collection$ = this.store.select(selectCollection).pipe(
    tap((collection) => {
      if (collection.errorMessage) {
        this.toastr.error(collection.errorMessage);
      }
    })
  );

  constructor(
    private store: Store<{ collection: CollectionState }>,
    private toastr: ToastrService
  ) {}

  removeFromCollection(movieId: number) {
    this.store.dispatch(CollectionActions.removeFromCollection({ movieId }));
  }

  ngOnInit(): void {
    this.store.dispatch(CollectionActions.loadCollection());
  }
}
