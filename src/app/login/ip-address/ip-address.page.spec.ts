import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IpAddressPage } from './ip-address.page';

describe('IpAddressPage', () => {
  let component: IpAddressPage;
  let fixture: ComponentFixture<IpAddressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IpAddressPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IpAddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
