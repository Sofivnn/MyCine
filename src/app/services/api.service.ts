import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Movie } from '../movies.model';
import { faKipSign } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  filmUpdating:BehaviorSubject<Movie|null> = new BehaviorSubject<Movie|null>(null);

  constructor(
    private http: HttpClient
    ) { }

  postMovies(data:any){
    return this.http.post<any>("http://localhost:3000/movies", data)
  }

  getMovies(){
    return this.http.get<any>("http://localhost:3000/movies")
  }

  
  delMovies(id :any){
    return this.http.delete<any>("http://localhost:3000/movies/"+id)
  }

  getMoviebyID(id :number){
    return this.http.get<number>("http://localhost:3000/movies/"+id)
  }

  updateMovieByID(film:Movie, id:number){
    return this.http.patch<any>("http://localhost:3000/movies/${id}", film)
  }

  setFilmUpdating(film:Movie){
    this.filmUpdating.next(film);
  }


}
