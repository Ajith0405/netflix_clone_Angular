import { Component,OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service:MovieApiServiceService){}

  bannerResult:any =[];
  trendingMovies:any=[];
  actionMovies:any=[];
  comedyMovies:any=[];
  horrerMovies:any=[];
  romanceMovies:any=[];
  netflixMoviesResults:any=[];

  ngOnInit():void{
    this.bannerData();
    this.trendingMoviesData();
    this.actionMoviesData();
    this.comedyMoviesData();
    this.horrorMoviesData();
    this.romanceMoviesData();
    this.netflixOriginalsData();

  }

  //banner data
  bannerData(){
    this.service.bannerApiData().subscribe((res)=>{
      // console.log(res);
      this.bannerResult = res.results;
      console.log(this.bannerResult); 
    })
  };

  //Ternding Movies data
  trendingMoviesData(){
    this.service.trendingMoviesApi().subscribe((res)=>{
      // console.log(res.results);
      this.trendingMovies = res.results;
      
    })
  }
  // Action Movies data
  actionMoviesData(){
    this.service.getActionMovies().subscribe((res)=>{
      // console.log(res.results);
      this.actionMovies = res.results;
      
    })
  }

  //Comedy Movies Data
  comedyMoviesData(){
    this.service.comedyMovies().subscribe((res)=>{
      // console.log(res.results);
      this.comedyMovies = res.results;
      
    })
  }
  // Terror Moviess Data
  horrorMoviesData(){
    this.service.horrorMovies().subscribe((res)=>{
      // console.log(res.results);
      this.horrerMovies = res.results;
      
    })
  }
  // Romance Movies Data
  romanceMoviesData(){
    this.service.romanceMovies().subscribe((res)=>{
      // console.log(res.results);
      this.romanceMovies = res.results;
    })
  }

  // Netflix originals
  netflixOriginalsData(){
    this.service.netflixMovies().subscribe((res)=>{
      this.netflixMoviesResults = res.results;
    })
  }

}
