import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSkillsComponent } from './f-skills.component';

describe('FSkillsComponent', () => {
  let component: FSkillsComponent;
  let fixture: ComponentFixture<FSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
