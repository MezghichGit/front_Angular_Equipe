import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EquipeService {

  private baseUrl = "http://127.0.0.1:85/equipes";

  private equipesFull: any = [
    {
      id: 1,
      nom: 'PSG',
      pays: 'France'
    },
    {
      id: 2,
      nom: 'Barcelon',
      pays: 'Espagne'
    },
    {
      id: 3,
      nom: 'Milan',
      pays: 'Italie'
    }
  ];

  private joueurs: any = [
    {
      id: 1,
      nom: "Ronaldo",
      numero: 9,
      poste: "attaquant"
    },
    {
      id: 2,
      nom: "Messi",
      numero: 10,
      poste: "attaquant"
    },
    {
      id: 3,
      nom: "Xavi",
      numero: 7,
      poste: "milieu"
    },
    {
      id: 4,
      nom: "Toto",
      numero: 10,
      poste: "attaquant"
    }
  ]



  constructor(private Http: HttpClient) { }

  getEquipes() { return this.equipesFull; }
  getJoueurs() { return this.joueurs; }


  // récupération des équipes depuis le backend node express js
  getListEquipes() { 
         return this.Http.get(this.baseUrl);
  }

  // méthode d'ajout d'une nouvelle équipe
  addEquipe(obj:any) {
    return this.Http.post(this.baseUrl, obj);
  }
  
    // méthode de suppression d'une équipe
    deleteEquipe(obj:any) {
      return this.Http.delete(this.baseUrl+ '/' + obj['id']);
     }
}
