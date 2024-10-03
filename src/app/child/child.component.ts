import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AsyncPipe, NgIf, NgFor],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss'
})
export class ChildComponent implements OnInit {
  data: Observable<any[]> = of([]);
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.data = this.api.getData();
  }
}
