import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdListComponent } from './curd-list.component';

describe('CurdListComponent', () => {
  let component: CurdListComponent;
  let fixture: ComponentFixture<CurdListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CurdListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
