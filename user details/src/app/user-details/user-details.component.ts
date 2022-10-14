import { Component, Input, OnInit } from '@angular/core';
import { userData } from '../user-data';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  @Input() element:userData[]=[{name:"",designation:"",city:"",university:"",imgUrl:""}];
  inp_name='';
  cname='';
  cdesgn='';
  ccity='';
  cuniv='';
  cimg='';
  personName = false;
  constructor() { }
  ngOnInit() {
  }
  updatename(event:Event){
      this.inp_name= (<HTMLInputElement>event.target).value;
      console.log(this.inp_name);
      this.personName= true;
      if(this.inp_name.length<=0){
        this.personName=false;
        this.cname='';
        this.cdesgn='';
        this.ccity='';
        this.cuniv='';
        this.cimg='';
      }

      const user = this.element.find((userDetail)=>{
        return userDetail.name.toUpperCase() === this.inp_name.toUpperCase()
      });
      console.log(user);
      // console.log(user);

    //   for(let i=0;i<=this.element.length;i++){
    //     if(this.inp_name.toUpperCase()===this.element[i].name.toUpperCase()){
    //       this.personName=false;
    //       this.cname =this.element[i].name
    //       this.cdesgn =this.element[i].designation
    //       this.ccity =this.element[i].city
    //       this.cuniv =this.element[i].university
    //       this.cimg =this.element[i].imgUrl
    // }
}

}

