import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { saveSearch } from '../../store/actions/history.action';
import { GitService } from '../git.service';

@Component({
  selector: 'app-searching',
  templateUrl: './searching.component.html',
  styleUrl: './searching.component.css'
})
export class SearchingComponent {
  query: string = '';
  results: any;

  constructor(private githubService: GitService,
              private store: Store<{history: any}>
            ) {}

  onSearch(): void {
    this.githubService.searchUsers(this.query).subscribe((data) => {
      this.results = data;
      // this.saveSearch(this.query, data);
      this.store.dispatch(saveSearch({ query: this.query, results: data}));
    });
  }

  clickedbutton(): void {
    console.log('clicked button');
  }

  saveSearch(query: string, results: any): void {
    const history = JSON.parse(localStorage.getItem('searchHistory') || '[]');  // Ensure string fallback
    history.push({ query, results });
    localStorage.setItem('searchHistory', JSON.stringify(history));
  }
}
