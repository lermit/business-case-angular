import { Brand } from './../../models/brand.models';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Model } from 'src/app/models/model.models';

@Injectable({
  providedIn: 'root'
})
export class BrandService {

  apiUrl: string;
  brands: BehaviorSubject<Array<Brand>>;
  models: BehaviorSubject<Array<Model>>;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = 'https://127.0.0.1:8000/api';
    this.brands = new BehaviorSubject<Array<Brand>>(null);
  }

   /**
   * Méthode pour récupérer toutes les marques de l'API
   */
  getBrands(): void {
    // https://127.0.0.1:8000/api/brands
    this.httpClient
    .get(this.apiUrl + '/brands')
    .subscribe(
      (res: any) => {
        // Update ads array
        const brands = res['hydra:member'].map(item => Brand.fromJSON(item));
        this.brands.next(brands);
    });
  }

  getSingleBrand(id: number) {
    return new Promise ((res, rej) => {
    this.httpClient.get(this.apiUrl + '/brands/' + id).subscribe(
      (resBrand) => {
        res(Brand.fromJSON(resBrand));
      }
    )
    })
  }
}
