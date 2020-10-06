import {Component, OnInit} from '@angular/core';
import {Book} from '../../models/book';
import {BookService} from '../../services/book.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public canvas: any;
  item: string[] = ['Tác giả', 'Sách', 'Nhà xuất bản'];
  books: Book[] = [];

  constructor(private bookService: BookService) {
    this.bookService.getAllBook().subscribe(
      res => this.books = res,
      error => {
      }
    )
  }

  ngOnInit() {
  }
}
