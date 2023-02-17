import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {DropdownComponent} from "./components/dropdown.component";
import {Subscription} from "rxjs";
import {BggService} from "./bgg.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy{

  searchQuery = ''

  sub$!: Subscription;

  constructor(private bggSvc: BggService) {
  }


  ngAfterViewInit(): void {
   this.sub$ = this.bggSvc.onSearchQuery.subscribe(
     result => {
       this.searchQuery = result;
     }
   )
  }

  ngOnDestroy(): void {
    this.sub$.unsubscribe();
  }

  ngOnInit(): void {
  }

}
