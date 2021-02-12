import { BrandService } from './../../services/brand/brand.service';
import { Brand } from './../../models/brand.models';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Model } from 'src/app/models/model.models';

@Component({
  selector: 'app-research',
  templateUrl: './research.component.html',
  styleUrls: ['./research.component.css']
})
export class ResearchComponent implements OnInit {

  brands: Array<Brand>;
  brandsSub: Subscription;

  models: Array<Model>;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.initSubs();
    this.brandService.getBrands();
  }

  private initSubs(): void {
    this.brandsSub = this.brandService.brands.subscribe(
      (newBrandsVal: Array<Brand>) => this.brands = newBrandsVal
    );
}

onChangeBrand(evt: any) {
  this.models = this.brands[+evt.target.value].models;

}

ngOnDestroy(): void {
  this.brandsSub.unsubscribe();
}
}
