import { Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Movie } from '../movies.model';
import { ApiService } from '../services/api.service';
import { DomSanitizer } from '@angular/platform-browser';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.scss']
})

export class ListFilmsComponent implements OnInit {
  router: any;
  status: string | undefined;
  movie : Movie | undefined
  filmEditing: Movie | null = null;
  img: string | undefined;
  film: any;

  constructor(private api: ApiService) { 
    this.getMovies();


  }



  ngOnInit(): void {
    this.api.getMovies().subscribe();
  }

  movies: Movie[] = [];
  
  getMovies(){
    this.api.getMovies()
    .subscribe({
      next:(res)=>{
        console.log(res)
        this.movies = res
        console.log(this.movies)
      },
      error:(err)=>{
        console.log("error")
        return err
      }
    })
  }

  delMovies(film : Movie, index:number){
    this.api.delMovies(film.id).subscribe(()=>{
      this.movies.splice(index, 1);
      console.log(`movie with Id = ${this.movie?.id} deleted`),
      (err :any)=> {
        return console.log(err);
      }
    })
  
  }  



  editMovie(film:Movie){
    this.api.filmUpdating.next(film);
  }


}


