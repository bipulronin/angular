import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomPara } from './custom-para';

describe('CustomPara', () => {
  let component: CustomPara;
  let fixture: ComponentFixture<CustomPara>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomPara]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomPara);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
