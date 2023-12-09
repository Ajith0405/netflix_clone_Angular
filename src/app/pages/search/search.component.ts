import { Component } from '@angular/core'
import {FormControl,FormGroup} from '@angular/forms'
import { MovieApiServiceService } from 'src/app/services/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  constructor(private service:MovieApiServiceService){}

  searchResults:any=[];
  ngOnInit(){}
  
  searchForm = new FormGroup({
    'movieName':new FormControl(null)
  });

  submitForm(){
    console.log(this.searchForm.value,'searchForm#');
    this.service.getSearchMovies(this.searchForm.value).subscribe((res)=>{
      // console.log(res,"Search Movies#");
      this.searchResults = res.results;
      console.log(this.searchResults,"SearchRessults#");
      
      
    })
    
  }

}
