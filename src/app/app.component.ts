import { Component } from '@angular/core';

import { CropDataService } from './crop-data.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'agritrack';
  crops:any
  constructor(private cropData:CropDataService){
    this.cropData.crops().subscribe((data)=>{
      console.log('data', data);
      this.crops = data;
     })
 

  }
}
