import { Component, Input, OnInit } from '@angular/core';
import {CategoryService} from '../../../../shared/services/category.service';

@Component({
  selector: 'product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {
  categories$;
  // since we need the 'category' field bcos its used in the template, so we received it as a props from the products component instead of moving it here
  @Input('category') category;

  constructor(private categoryService: CategoryService) {
    this.categories$ = categoryService.getAll();
  }

  ngOnInit() {}
}
