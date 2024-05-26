

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { clearAllHistory, clearSearch } from '../../store/actions/history.action';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history$: Observable<any[]>;

  constructor(private store: Store<{ history: { history: any[] } }>) {
    this.history$ = store.select(state => state.history.history);
  }

  ngOnInit(): void {}

  clearSearch(index: number): void {
    this.store.dispatch(clearSearch({ index }));
  }

  clearAllHistory(): void {
    this.store.dispatch(clearAllHistory());
  }
}


