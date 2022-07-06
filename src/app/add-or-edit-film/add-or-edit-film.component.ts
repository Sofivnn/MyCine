import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Touchscreen } from 'puppeteer';
import { Observable, tap } from 'rxjs';
import { ApiService } from '../services/api.service';
import { Movie } from '../movies.model';

@Component({
  selector: 'app-add-or-edit-film',
  templateUrl: './add-or-edit-film.component.html',
  styleUrls: ['./add-or-edit-film.component.scss']
})
export class AddOrEditFilmComponent implements OnInit {
  http: any;
  public movie:Movie;
  isShown: boolean = true ;
  constructor(private api: ApiService) { 
    this.movie = new Movie();
  }

  ngOnInit(): void {

  }

  // 

  AddfilmForm = new FormGroup({
    title: new FormControl(''),
    desc: new FormControl(''),
    rate: new FormControl(''),
    video : new FormControl(''),
    image : new FormControl(''),
  });

  addMovies() {
    this.api.postMovies(this.AddfilmForm.value)
    .subscribe({
      next:(res)=>{
        console.log(res);
        window.location.reload();
      },
      error:(err)=>{
        alert("error")
      }
    })
  }


}
