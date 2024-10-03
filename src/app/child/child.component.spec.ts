import { ComponentFixture, TestBed } from '@angular/core/testing';

import { of } from 'rxjs';
import { ApiService } from '../api.service';
import { ChildComponent } from './child.component';

describe('ChildComponent', () => {
  let component: ChildComponent;
  let fixture: ComponentFixture<ChildComponent>;
  const apiMock = {
    getData() {
      return of([])
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildComponent],
      providers: [{ provide: ApiService, useValue: apiMock }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
