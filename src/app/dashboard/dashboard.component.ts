import { Component, OnInit } from '@angular/core';
import {ApiService} from '../services/api.service';
import {Cat} from '../models/cat.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public randomCatImage: Cat;
  public categories;
  public imagesByCategory;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getRandomCatImage();
    this.getCategories();
  }

  getRandomCatImage() {
    this.apiService.getRandomCatImage().subscribe(randomCatImage => {
      this.randomCatImage = randomCatImage;
    });
  }

  getCategories() {
    this.apiService.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  selectCategory(category: string) {
    this.apiService.getCatImagesByCategory(category).subscribe(imageByCategory => {
      this.imagesByCategory = imageByCategory;
    });
  }

}
