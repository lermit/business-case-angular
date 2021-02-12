import { Component, OnInit } from '@angular/core';
import { Ad } from 'src/app/models/ad.models';
import { AdService } from 'src/app/services/ad/ad.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-ad-view',
  templateUrl: './single-ad-view.component.html',
  styleUrls: ['./single-ad-view.component.css']
})
export class SingleAdViewComponent implements OnInit {

ad: Ad;

  constructor(private adService: AdService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params.id;

    this.adService.getSingleAd(+id).then(
      (ad: Ad) => {
        this.ad = ad;
        console.log(this.ad)
      }
    )
  }

}
