import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employee : any [];
  constructor()
  {
    this.employee =
    [
      {name:"Ameya Kulkarni",position:"Programmer"},
      {name:"Abhijeet Gawas",position:"Manager"},
      {name:"Sourabh Palande",position:"Programmer"},
      {name:"Rohan Kamble",position:"Tester"}
    ];
  }
  heading : String ="CRUD Operation Using Array !!";

 model:any={};
 emp=[];

 addEmpDetails()
 {
   console.log("This is Add Employee Method !!");
   console.log(this.model);
   this.employee.push(this.model);
   this.model={};
 }

 deleteEmpDetails(i)
 {
   console.log("This is Delete Method");
  this.employee.splice(i,1);
  console.log(i);
 }

 value;
 model2  : any ={};

 editEmpDetails(i)
 {
  console.log(i);
  console.log("This is Edit Method !!");
  this.model2.name =this.employee[i].name;
  this.model2.position = this.employee[i].position;
  this.value = i;
 }

 updateEmployee(){
  console.log("hello");
  let k=this.value;
 
   for(let i=0;i<this.employee.length;i++)
  {
    console.log(i);
   if(i==k)
   {
     this.employee[i]=this.model2;
     this.model2 = {};
   }
  }
}
}
