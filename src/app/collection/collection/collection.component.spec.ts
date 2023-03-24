import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { Movie } from 'src/app/movie.model';
import { CollectionActions, collectionReducer, initialState } from '../state';

import { CollectionComponent } from './collection.component';

const movies: Movie[] = [
  {
    id: 1,
    name: 'Kukaracha',
  },
  {
    id: 2,
    name: 'Gzaabneulni',
  },
];

describe('CollectionComponent', () => {
  let component: CollectionComponent;
  let fixture: ComponentFixture<CollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CollectionComponent],
      imports: [
        StoreModule.forRoot({}),
        TranslateModule.forRoot(),
        ToastrModule.forRoot(),
      ],
      providers: [provideMockStore({}), TranslateService],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load collections into state', () => {
    const action = CollectionActions.loadCollectionSuccess;
    const state = collectionReducer(initialState, action({ movies }));

    console.log(state);

    expect(state).toEqual({ list: movies });
  });

  it('should set error to state', () => {
    const action = CollectionActions.addToCollectionError;
    const state = collectionReducer(
      initialState,
      action({ errorMessage: 'Error' })
    );

    expect(state).toEqual({ list: [], errorMessage: 'Error' });
  });
});
