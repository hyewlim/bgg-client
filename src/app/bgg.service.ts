import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {lastValueFrom, map, Subject} from "rxjs";
import {Game} from "./models";

@Injectable({
  providedIn: 'root'
})
export class BggService {

  onSearchResults = new Subject<Game[]>()
  onSearchQuery = new Subject<string>()

  constructor(private http: HttpClient) { }

  private SERVER_URL = 'https://bgg-server-production.up.railway.app/games'

  // private SERVER_URL = 'http://localhost:8081/games/'

  getGamesById(name: string): Promise<Game[]> {
    this.onSearchQuery.next(name);
    const url = `${this.SERVER_URL}/${name}`;
    console.log("URL>>>>>>>>>>>>>>>>>>>>>>>", url)

    return lastValueFrom(this.http.get<any>(url).pipe(
      map(value => {
        const result: any[] = value.result
        return result
      })
    )).then(results => {
        this.onSearchResults.next(results)
        return results;
      })
  }

}
