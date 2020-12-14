import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proj11';
  num=12;
  det = [];
  random(){
    var runStatus = Boolean(Math.round(Math.random())); 
    return runStatus;
    };
  ngOnInit() {
    this.det.push(
    {id: 1, name: 'А', status: this.random()},
    {id: 2, name: 'B', status: this.random()},
    {id: 3, name: 'C', status: this.random()},
    {id: 4, name: 'D', status: this.random()},
    {id: 5, name: 'E', status: this.random()},
    {id: 6, name: 'F', status: this.random()},
    {id: 7, name: 'G', status: this.random()},
    {id: 8, name: 'H', status: this.random()},
    {id: 9, name: 'V', status: this.random()},
    {id: 10, name: 'W', status: this.random()},
    {id: 11, name: 'J', status: this.random()},
    {id: 12, name: 'L', status: this.random()},);} 
  
    Delete(gotId){
      let delId = this.det.findIndex(item => item.id == gotId);
      this.det.splice(delId, 1)
      }
  Create(newName){
    let newId = this.det.length+1;
    this.det.push({id: newId, name: newName.value, status: this.random()})}
}


