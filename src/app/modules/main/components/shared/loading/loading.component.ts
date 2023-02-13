import { Component, Input, OnInit } from '@angular/core';

import { NgbProgressbarConfig, NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'loading-component',
  standalone: false,
  templateUrl: './loading.component.html',
  providers: [NgbProgressbarConfig], // add the NgbProgressbarConfig to the component providers

  
})
export class LoadingComponent {
  isDebugging:boolean = false;

  // Loop
  initStartID;
  
   
  time = { start: 0, elapsed: 0, elapsedRnd: 0, old:0, new:0,};
  requestId: number;
  secondsPassed:number = 1;
  secondsPassedRnd:number = 1;
  oldTimeStamp:number = 1;
  lastRender:number = 0

  public ticker = 0;
  pulse:boolean = false;

  constructor(config: NgbProgressbarConfig){
    if(this.isDebugging)console.log(this.constructor.name);
    // customize default values of progress bars used by this component tree
    config.max = 100;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '';
  }

    

  ngOnInit() {
    if(this.isDebugging)console.log(this.constructor.name + ".ngOnInit()");
    
    
    this.requestId = requestAnimationFrame(this.loop.bind(this));
  }





  ngOnDestroy(){
    if(this.isDebugging)console.log(this.constructor.name + ".ngOnDestroy()");

    this.ticker = 0;
    cancelAnimationFrame(this.requestId);


  }


    // Loop
    loop(now = 0){
        if(this.isDebugging)console.log(this.constructor.name + ".loop()");
        if(this.isDebugging)console.log(this.ticker)

        //
        this.time.elapsed = now - this.time.start;
        this.time.elapsedRnd = Math.round(this.time.elapsed)

         // Calculate the number of seconds passed since the last frame
        this.secondsPassed = (this.time.elapsed - this.oldTimeStamp) / 1000;
        this.secondsPassedRnd = Math.round(this.secondsPassed*10000)/10000;

        this.ticker++
        
        this.oldTimeStamp = this.time.elapsed;

        if (this.ticker > 25) {
            this.pulse = !this.pulse;
            this.ticker = 0;
             
        }


        this.lastRender = this.time.elapsed
        
        this.requestId = requestAnimationFrame(this.loop.bind(this));


    }



}
