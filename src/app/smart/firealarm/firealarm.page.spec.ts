import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirealarmPage } from './firealarm.page';

describe('FirealarmPage', () => {
  let component: FirealarmPage;
  let fixture: ComponentFixture<FirealarmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirealarmPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirealarmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
