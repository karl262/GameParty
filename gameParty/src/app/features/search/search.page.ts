import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {

  searchTerm: string = ''; 
  selectedCategory: string = 'all'; 
  results: any[] = [
    { name: 'Call of Duty: Warzone', category: 'games' },
    { name: 'Fortnite', category: 'games' },
    { name: 'Apex Legends', category: 'games' },
    { name: 'Valorant', category: 'games' },
    { name: 'Carlos Mendoza', category: 'players' },
    { name: 'Ana Ruiz', category: 'players', status: 'Offline' },
    { name: 'Luis Gómez', category: 'players' },
    { name: 'Enrique Pérez', category: 'players', status: 'Offline' },
    { name: 'Diana Torres', category: 'players'},
    { name: 'José Martínez', category: 'players'}
  ]; 
  filteredResults: any[] = [];

  constructor() { }

  ngOnInit() {
    this.filteredResults = this.results;
  }

  onSearch() {
    this.filterResults();
  }

  onFilterChange() {
    this.filterResults();
  }

  filterResults() {
    this.filteredResults = this.results.filter(item => {
      const matchesSearchTerm = item.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesCategory = this.selectedCategory === 'all' || item.category === this.selectedCategory;
      return matchesSearchTerm && matchesCategory;
    });
  }

}
