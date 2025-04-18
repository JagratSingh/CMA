import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailBooksComponent } from './detail-books.component';

describe('DetailBooksComponent', () => {
  let component: DetailBooksComponent;
  let fixture: ComponentFixture<DetailBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailBooksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
