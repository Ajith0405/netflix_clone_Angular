import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {
  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){}

  getMovieDetailResults:any;
  getMovieVideoResults:any;
  getMovieCastResults:any;


  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    // console.log(getParamId,"getParamId#");
    
      this.getMovie(getParamId);
      this.getMovieVideo(getParamId);
      this.getMovieCast(getParamId);
  }

  // get movie details
  getMovie(id:any){
    this.service.getMovieDetails(id).subscribe((res)=>{
      console.log(res,'GetmovieDetails#');
      this.getMovieDetailResults = res;
      
    });
  }

  // get movie video
  getMovieVideo(id:any){
    this.service.getMovieVideo(id).subscribe((res)=>{
      // console.log(res,"getMovieVideo");
      this.getMovieVideoResults = res;
      res.results.forEach((ele:any)=>{
        if(ele.type === "Trailer"){
          this.getMovieVideoResults = ele.key;
        }
        
      })
      
    });
  }

  //get Movies cast
  getMovieCast(id:any){
    this.service.getMovieCast(id).subscribe((res)=>{
      // console.log(res,"getMovieCast#");
      this.getMovieCastResults = res.cast;
    })
  }
}
