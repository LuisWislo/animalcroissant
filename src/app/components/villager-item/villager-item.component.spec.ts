import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VillagerItemComponent } from './villager-item.component';

describe('VillagerItemComponent', () => {
  let component: VillagerItemComponent;
  let fixture: ComponentFixture<VillagerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VillagerItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VillagerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
