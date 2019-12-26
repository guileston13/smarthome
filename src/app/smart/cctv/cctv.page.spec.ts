import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CctvPage } from './cctv.page';

describe('CctvPage', () => {
  let component: CctvPage;
  let fixture: ComponentFixture<CctvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CctvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CctvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
