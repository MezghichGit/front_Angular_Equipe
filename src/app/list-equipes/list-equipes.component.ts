import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-list-equipes',
  templateUrl: './list-equipes.component.html',
  styleUrls: ['./list-equipes.component.css']
})
export class ListEquipesComponent implements OnInit {

  titre: string = "Global Knowledge";  // attribut

  equipes: string[] = ["PSG", "Barcelone", "OM", "Milan"];
  equipesFull: any = [];
  joueurs: any = [];

  teams: any;

  public nbr: number = 0;
  public res: boolean = false;


  constructor(private service:EquipeService) { }

  ngOnInit(): void {
    this.equipesFull = this.service.getEquipes();
    this.joueurs = this.service.getJoueurs();

    // appel de la méthode getListEquipe
    this.service.getListEquipes().subscribe(  // subscribe pêrmet d'attendre jusqu'à récupération du resltat
      res => {
        //console.log(res)
        this.teams = res;
      }
    )  
  }

  increment() { 
   this.nbr = this.nbr + 1;
  }

  display() { 
    this.res = !this.res;
  }
  refreshEquipe() {
    this.service.getListEquipes().subscribe(  
    res => {
      this.teams = res;
    }
  )  
  }

  deleteEquipe(team) {
    this.service.deleteEquipe(team).subscribe(
      
      res => {
        //console.log(res)
        this.refreshEquipe();
      }
    );
   }
}
