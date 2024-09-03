import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent implements OnInit{

  @Input() CounterValue!:any;

  @Output() CounterValueChange= new EventEmitter();

  ngOnInit(): void {
    setInterval(()=>{
      this.CounterValue=this.CounterValue+1;
      this.CounterValueChange.emit(this.CounterValue);
    },1000);

  }

}
