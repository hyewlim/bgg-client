import {Component, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {BggService} from "../bgg.service";
import {Game} from "../models";

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit{

  games: Game[] = []
  form!: FormGroup;

  constructor(private fb: FormBuilder,
              private bggService: BggService) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      limit: this.fb.control(""),
      name: this.fb.control("")
    })
  }


  processForm() {
    console.log(this.form.value.name)

    this.bggService.getGamesById(this.form.value.name)
      .then(result => {
        this.games = result
        console.log(this.games)

      })
      .catch(error => {
        console.error("error: ", error)
      })
  }
}
