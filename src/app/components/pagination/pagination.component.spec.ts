import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationComponent } from './pagination.component';

describe('PaginationComponent', () => {
  let component: PaginationComponent;
  let fixture: ComponentFixture<PaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationComponent);
    component = fixture.componentInstance;
    component.previous = 'test.previous.url';
    component.next = 'test.next.url';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should paginate to previous page', () => {
    //Given
    spyOn(component.paginationEvent, 'emit');
    //When
    component.prevPage();
    //Then
    expect(component.paginationEvent.emit).toHaveBeenCalledWith('test.previous.url');
  });

  it('should paginate to next page', () => {
    //Given
    spyOn(component.paginationEvent, 'emit');
    //When
    component.nextPage();
    //Then
    expect(component.paginationEvent.emit).toHaveBeenCalledWith('test.next.url');
  });
});
