import { Ad } from './../../models/ad.models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  apiUrl: string;
  ads: BehaviorSubject<Array<Ad>>;
  pagesNb: BehaviorSubject<Array<number>>;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = 'https://127.0.0.1:8000/api';
    this.ads = new BehaviorSubject<Array<Ad>>(null);
    this.pagesNb = new BehaviorSubject<Array<number>>([]);
  }

    /**
   * Méthode pour récupérer toutes les annonces en fonction du numéro de page de l'API
   */
  getAds(pageAsked: number): void {

    // https://127.0.0.1:8000/api/ads?page=1
    this.httpClient
    .get(this.apiUrl + '/ads?page=' + pageAsked)
    .subscribe(
      (res: any) => {
        // Update ads array
        const ads = res['hydra:member'].map(item => Ad.fromJSON(item));
        this.ads.next(ads);

        const totalPages = res['hydra:view']['hydra:last'].split('=')[1];
        console.log(res['hydra:view']['hydra:last'].split('=')[1])
        const localPagesNb = [];
        for(let i = 1; i <= totalPages; i++) {
          localPagesNb.push(i);
        }
        this.pagesNb.next(localPagesNb);
    });
  }

  getSingleAd(id: number) {
    return new Promise ((res, rej) => {
    this.httpClient.get(this.apiUrl + '/ads/' + id).subscribe(
      (resAd) => {
        res(Ad.fromJSON(resAd));
      }
    )
    })
  }
  
}
