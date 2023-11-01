# Particle Ripple

**This Component was created as visual representation of javascript class base data structures and Algorithism, and uses a constantly refreshing state during the animation and re-rendering particles with data manipulation. Do to the design CPU usage can be extremely heavy when particle density is increased: *Represented as O(n^2).***

This package includes a React Component ParticleRipple intended to be used as an animated background. This Componet uses a Class based ParticleGrid and Particle to create a ripple effect originating from the point of the initial click. The Component uses a ```<canvas>``` html element and is costumizable to users preferences.


### To install:
```
npm install particle-ripple --save
```
<br>

### Import into file:
```
import ParticleRipple from 'particle-ripple';
```

<br>

### Using Particle Ripple:

 - ParticleRipple component must be contained within a container that has a position of relative, fixed, or absolute.

 - ParticleRipple is sized to 115% of parent element. Reccomended for parent element to have overflow hidden
```
<div style="position: relative; overflow: hidden;">
  <ParticleRipple />
</div>
```

### Customizing

- Particle ripple allows customization in many ways though props
```
< ParticleRipple
  colSpacing={ 50 }
  rowSpacing={ null }
  particleColor={ [249, 220, 34, .5] }
  particleColorFade={ null }
  rippleSpeed={ 100 }
  particleSpeed={ 15 }
  particleSpeedFunction={ null }
  particleRadiusMax={ 8 }
  particleRadiusFunction={ null }
  maxRadius={ 200 }
  maxRadiusFunction={ null }
  includeStatic={ true }
  staticParticleMaxRadius={ 2 }
  staticParticleColor={ [249, 220, 34, .3] }
/>
```
<br>

- **colSpacing:** Width in px of each column of ParticleGrid.

- **rowSpacing:** Width in px of each column of ParticleGrid. If left blank rowSpacing will default to be equal to colSpacing

- **particleColor:** Color of animated particles. Takes and array of 3 to 4 numbers. The numbers should relate in order to a rgba color code with the final number defaulting to one if not provided.
```
const particleColor = [249, 220, 34, .5];
//color = rgba(249, 220, 34, .5)
const color = `rgba(${...particleColor})`
``` 
- **particleColorFade:** Not currently Implemented.

- **rippleSpeed:** time in milliseconds between ripple progressions.

- **particleSpeed:** Rate at which the particle shrinks and is removed from the grid. Number is equal to the iterations before the particle is removed from grid.

- **particleSpeedFunction:** Not currently Implemented.

- **particleRadiusMax:** Max size in px of animated Particle

- **particleRadiusFunction:** Not currently Implemented.

- **maxRadius:** Max radius in grid spaces of the ripple.

- **maxRadiusFunction:** Not currently Implemented.

- **includeStatic:** If true a static grid will be created with the same dimensions as the dynamic grid.

- **staticParticleRadius** Set particle radius of particles in static grid.

- **staticParticleColor** Colour of static particles. Uses same input style as **particleColor**


