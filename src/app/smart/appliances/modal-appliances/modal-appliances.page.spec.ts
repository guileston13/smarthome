import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalAppliancesPage } from './modal-appliances.page';

describe('ModalAppliancesPage', () => {
  let component: ModalAppliancesPage;
  let fixture: ComponentFixture<ModalAppliancesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAppliancesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalAppliancesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
