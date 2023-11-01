export default class Particle {

  constructor(x, y, maxRadius, colour, isDynamic ,speed){
    this._x = x;
    this._y = y;
    this._maxRadius=maxRadius;
    this._radius = maxRadius;
    this._colour = `rgba(${colour[0]}, ${colour[1]}, ${colour[2]}, ${ colour[3] ? colour[3] : 1 })`;
    
    if (isDynamic){
      this._speed = ((maxRadius-.2)/speed);
      this._radius = 0;
    }
  }

  get x(){
    return this._x;
  }
  get y(){
    return this._y;
  }
  get radius(){
    return this._radius;
  }
  set radius(radius){
    this._radius = radius;
  }
  get maxRadius(){
    return this._maxRadius;
  }
  get colour(){
    return this._colour;
  }
  set colour(colour){
    this._colour=colour;
  }
  get speed(){
    return this._speed;
  }

}