import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillagersPage } from './villagers.page';

describe('VillagersPage', () => {
  let component: VillagersPage;
  let fixture: ComponentFixture<VillagersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillagersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
