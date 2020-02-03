import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoorPasswordPage } from './door-password.page';

describe('DoorPasswordPage', () => {
  let component: DoorPasswordPage;
  let fixture: ComponentFixture<DoorPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorPasswordPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoorPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
