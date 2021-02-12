import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Model } from 'src/app/models/model.models';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  apiUrl: string;
  models: BehaviorSubject<Array<Model>>;

  constructor(private httpClient: HttpClient) { 
    this.apiUrl = 'https://127.0.0.1:8000/api';
    this.models = new BehaviorSubject<Array<Model>>(null);
  }

   /**
   * Méthode pour récupérer tous les modèles de l'API
   */
  getModels(): void {
    // https://127.0.0.1:8000/api/models
    this.httpClient
    .get(this.apiUrl + '/models')
    .subscribe(
      (res: any) => {
        // Update ads array
        const models = res['hydra:member'].map(item => Model.fromJSON(item));
        this.models.next(models);
        console.log(models)
    });
  }

  getSingleModel(id: number) {
    return new Promise ((res, rej) => {
    this.httpClient.get(this.apiUrl + '/models/' + id).subscribe(
      (resModel) => {
        res(Model.fromJSON(resModel));
      }
    )
    })
  }
}
