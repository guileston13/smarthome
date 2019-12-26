import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DoorPage } from './door.page';

describe('DoorPage', () => {
  let component: DoorPage;
  let fixture: ComponentFixture<DoorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DoorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
