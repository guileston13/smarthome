import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoorModalPage } from './door-modal.page';

describe('DoorModalPage', () => {
  let component: DoorModalPage;
  let fixture: ComponentFixture<DoorModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoorModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
