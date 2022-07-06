import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';
import { Movie } from '../movies.model';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {
  id: any;
  data:any;


  constructor(private route:ActivatedRoute, private api: ApiService, private sanitizer : DomSanitizer) { 
    this.sanitizer = sanitizer;    
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.getOne();


  }
  getSanitizedURL() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/"+this.data.video);
  }

  getOne(){
    this.api.getMoviebyID(this.id).subscribe(data=>{
      this.data = data,
      console.log(data)
      return data
    })
  }



}
