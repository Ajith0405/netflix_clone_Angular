import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseURL:any = 'https://api.themoviedb.org/3';
  API_KEY:any = "5cdee075b8c68a444877452c529baddf";
  
  // BannerApi
  bannerApiData():Observable<any>{
    return this.http.get(`${this.baseURL}/trending/all/week?api_key=${this.API_KEY}&language=en-US`);
  }
  
  // Trending Movies Api
  trendingMoviesApi():Observable<any>{
    return this.http.get(`${this.baseURL}/movie/top_rated?api_key=${this.API_KEY}&language=en-US`);
  }

  //Action Movies Api
  getActionMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.API_KEY}&with_genres=28`)
  }

  // Comedy Movies Api
  comedyMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.API_KEY}&with_genres=35`)
  }
  // Horror Movies Api
  horrorMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.API_KEY}&with_genres=27`)
  }
  // Romance Movies Api
  romanceMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.API_KEY}&with_genres=10749`)
  }
  // Netflix originals api
  netflixMovies():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/tv?api_key=${this.API_KEY}&with_networks=213`)
  }
  //Documentries api
  documentriesMoviesApi():Observable<any>{
    return this.http.get(`${this.baseURL}/discover/movie?api_key=${this.API_KEY}&with_genres=99`)
  }

  //search Movie
  getSearchMovies(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/search/movie?api_key=${this.API_KEY}&query=${data.movieName}`);
  }

  //get movie Details
  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}?api_key=${this.API_KEY}`);
  }

  //get Movie video
  getMovieVideo(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}/videos?api_key=${this.API_KEY}`);
  }

  //get movie cast
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseURL}/movie/${data}/credits?api_key=${this.API_KEY}`);
  }


  
}
