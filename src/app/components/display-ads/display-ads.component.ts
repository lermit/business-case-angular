import { AdService } from './../../services/ad/ad.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ad } from 'src/app/models/ad.models';

@Component({
  selector: 'app-display-ads',
  templateUrl: './display-ads.component.html',
  styleUrls: ['./display-ads.component.css']
})
export class DisplayAdsComponent implements OnInit, OnDestroy {

  ads: Array<Ad>;
  adsSub: Subscription;

  pagesNb: Array<number>;
  pagesNbSub: Subscription;

  currentPageNb: number;
  detailsUrl: string;

  constructor(private adService: AdService) { 
    this.currentPageNb = 1;
  }

  ngOnInit(): void {

    this.initSubs();

    this.adService.getAds(1);

  }

  private initSubs(): void {
    this.adsSub = this.adService.ads.subscribe(
      (newAdsVal: Array<Ad>) => this.ads = newAdsVal
    );

    this.pagesNbSub = this.adService.pagesNb.subscribe(
      (newPagesNbVal: Array<number>) => this.pagesNb = newPagesNbVal
    );
  }

  onClickPagination(pageAsked: number): void {
    this.currentPageNb = pageAsked;
    this.adService.getAds(pageAsked);
  }

  ngOnDestroy(): void {
    this.adsSub.unsubscribe();
    this.pagesNbSub.unsubscribe();
  }

}
