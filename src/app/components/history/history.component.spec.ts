import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  history: any[] = [];

  ngOnInit(): void {
    this.loadHistory();
  }

  loadHistory(): void {
    this.history = JSON.parse(localStorage.getItem('searchHistory') || '[]');  // Ensure string fallback
  }

  clearSearch(index: number): void {
    this.history.splice(index, 1);
    localStorage.setItem('searchHistory', JSON.stringify(this.history));
  }
}
