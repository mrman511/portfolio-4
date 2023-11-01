import Particle from "./particle";

export default class ParticleGrid{
  

  constructor(height, width, rows, cols, maxRadius, isDynamic){
    this._height = height;
    this._width = width;
    this._rows = rows;
    this._rowSpacing = height/rows;
    this._cols = cols;
    this._colSpacing = width/cols;
    this._maxRadius = maxRadius;
    this._isDynamic = isDynamic ? true : false;
    this.activeParticles = [];
    this.activeClicks=[];

    // remove Clickcount after troubleshooting
    // this.clickCount=0;

    const grid = {}
    for (let row = 0; row<rows; row++ ){
      grid[row]=[];
    }
    this._grid = grid;
  }

  get height(){
    return this._height;
  }
  set height(num){
    this._height=num;
  }
  get width(){
    return this._width;
  }
  set width(num){
    this._width=num;
  }
  get rows(){
    return this._rows;
  }
  //get row from y coordinate
  // get row(y){

  // }
  get rowSpacing(){
    return this._rowSpacing;
  }
  get cols(){
    return this._cols;
  }
  //get col from x coordinate
  // get col(x){

  // }
  get colSpacing(){
    return this._colSpacing;
  }
  get maxRadius(){
    return this._maxRadius;
  }
  get isDynamic(){
    return this._isDynamic;
  }
  get grid(){
    return this._grid;
  }

  setRadii(){
    const finishedParticleIndexes = [];
    this.activeParticles.map((particle, i)=>{
      if (particle.radius === 0){
        particle.radius = particle.maxRadius;
      }
      else if (particle.radius < .3){
        particle.radius = 0;
        finishedParticleIndexes.push(i);
      } else {
        particle.radius = (particle.radius - particle.speed)
      }
      for (let i=0; i<finishedParticleIndexes.length; i++){
        this.activeParticles.splice(finishedParticleIndexes[i]-i, 1)
      }
    });
  }

  fillGrid(maxRadius, colour, particleSpeed){
    let j=0;
    for (let row of Object.keys(this.grid)){
      if (this.grid[row].length < this.cols){
        for (let i=this.grid[row].length; i<this.cols; i++){
          let x = (this.colSpacing * (i + 1)) - (this.colSpacing/2);
          let y = (this.rowSpacing * (j + 1)) - (this.rowSpacing/2);
          const particle = new Particle(x, y, maxRadius, colour, this.isDynamic, particleSpeed);
          this.grid[row].push(particle);
          if (!this.isDynamic){
            this.activeParticles.push(particle);
          }
        }
      }
      j++;
    }  
  }

  getParticle(col, row){
    return this._grid[(row)][col];
  }

  searchCoordinates(x, y){
    let col;
    let row;
    if (x>=0){
      x = Math.floor(x/this.colSpacing);
    }
    if (y>=0){
      y = Math.floor(y/this.rowSpacing);
    }
    
    return this.getParticle(row, col);
  }

  startRipple(targetCol, targetRow, maxRadius){
    // x and y coordinates of target origin
    if (this.isDynamic){
      targetCol=Math.floor(targetCol/this.colSpacing);
      targetRow=Math.floor(targetRow/this.rowSpacing);
      //particles to add to active particles
      // get particles a specific radius from the inital click
      const particle = this.getParticle(targetCol, targetRow);
      this.activeParticles.push(particle);
      this.activeClicks.push({x: targetCol, y: targetRow, r: 0, maxRadius: maxRadius})
      this.setRadii();
    }
  }

  continueRipple(growthRate){
    const finishedClicks = [];
    this.activeClicks.map((click, i)=>{
      if ((click.r>=click.maxRadius )|| (click.r >= ((this.cols/2)-2))){
        finishedClicks.push(i);
      }else {
        click.r = click.r + growthRate;
        for (let row in this.grid){
          //y is number of current row in grid
          const y = Number(row);
          let x = Math.floor(Math.sqrt((click.r+y-click.y)*(click.r-y+click.y))+click.x);
          if (x !== NaN){
            if (x !== click.x){
              const diffX = (x - click.x);
              const particle1 = this.getParticle(click.x+diffX, y);
              const particle2 = this.getParticle(click.x-diffX, y);
              if (particle1){
                particle1.radius=0;
                this.activeParticles.push(particle1);
              }
              if (particle2){
                particle2.radius=0;
                this.activeParticles.push(particle2);
              }
              // newParticles += this.getParticle(targetCol+diffX, y)
            } else {
              const particle = this.getParticle(x, y);
              if (particle){
                particle.radius=0;
                this.activeParticles.push(particle);
              }
            }
          }
        }
      }
    })
    // remove all finished clicks
    for (let i=0;i<finishedClicks.length; i++){
      this.activeClicks.splice(finishedClicks[i]-i,1);
    }
    this.setRadii()
  }
}