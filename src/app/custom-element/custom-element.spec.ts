import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomElement } from './custom-element';

describe('CustomElement', () => {
  let component: CustomElement;
  let fixture: ComponentFixture<CustomElement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomElement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomElement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
