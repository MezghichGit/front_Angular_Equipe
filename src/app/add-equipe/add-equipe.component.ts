import { Component, OnInit } from '@angular/core';
import { EquipeService } from '../services/equipe.service';

@Component({
  selector: 'app-add-equipe',
  templateUrl: './add-equipe.component.html',
  styleUrls: ['./add-equipe.component.css']
})
export class AddEquipeComponent implements OnInit {

    /// attribut de l'équipe

  public submit: boolean = false;
  public iden: number;
  public name: string ;
  public country: string;

  constructor(private service:EquipeService) { }

  ngOnInit(): void {

    
  }

  createEquipe(data)
  {
    //alert(data.value.iden + " " + data.value.name + " " + data.value.country);
    //console.log(this.iden + " " + this.name + " " + this.country);

    // étape suivante consiste à appeler le service et lui envoyer les données du formulaire
    this.service.addEquipe(
      {
      id: data.value.iden,
      name: data.value.name,
      country : data.value.country
      }
    ).subscribe(
      res => console.log("Insertion avec succès"));
    this.submit = !this.submit;
     
  }
}
