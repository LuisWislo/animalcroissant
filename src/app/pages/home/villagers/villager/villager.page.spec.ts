import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillagerPage } from './villager.page';

describe('VillagerPage', () => {
  let component: VillagerPage;
  let fixture: ComponentFixture<VillagerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillagerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
