import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelHeaderComponent } from './marvel-header.component';

describe('MarvelHeaderComponent', () => {
  let component: MarvelHeaderComponent;
  let fixture: ComponentFixture<MarvelHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarvelHeaderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MarvelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
