import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerProdutoPropagandaComponent } from './banner-produto-propaganda.component';

describe('BannerProdutoPropagandaComponent', () => {
  let component: BannerProdutoPropagandaComponent;
  let fixture: ComponentFixture<BannerProdutoPropagandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BannerProdutoPropagandaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerProdutoPropagandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
