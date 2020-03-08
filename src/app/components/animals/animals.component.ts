import { Component, OnInit } from '@angular/core';
import { AnimalsService } from "../../services/animals.service";

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {

  animals:any;

  constructor(private animalservice:AnimalsService) { }

  ngOnInit() {

  this.getAnimals();
  }

  getAnimals(){

    this.animalservice.getAnimals().subscribe(
      res =>{

        this.animals = res;

        console.log(this.animals);
        

      },
      err => console.error(err)
    )

  }

}
