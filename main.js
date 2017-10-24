var keyData = {
  a:{
    sound : new Howl({
    src: ['sounds/clay.mp3']
    })
  },
  b:{
    sound : new Howl({
    src: ['sounds/bubbles.mp3']
    })
  },
  c:{
    sound : new Howl({
    src: ['sounds/confetti.mp3']
    })
  },
  d:{
    sound : new Howl({
    src: ['sounds/corona.mp3']
    })
  },
  e:{
    sound : new Howl({
    src: ['sounds/dotted-spiral.mp3']
    })
  },
  f:{
    sound : new Howl({
    src: ['sounds/flash-1.mp3']
    })
  },
  g:{
    sound : new Howl({
    src: ['sounds/flash-2.mp3']
    })
  },
  h:{
    sound : new Howl({
    src: ['sounds/flash-3.mp3']
    })
  },
  i:{
    sound : new Howl({
    src: ['sounds/glimmer.mp3']
    })
  },
  j:{
    sound : new Howl({
    src: ['sounds/moon.mp3']
    })
  },
  k:{
    sound : new Howl({
    src: ['sounds/pinwheel.mp3']
    })
  },
  l:{
    sound : new Howl({
    src: ['sounds/piston-1.mp3']
    })
  },
  m:{
    sound : new Howl({
    src: ['sounds/piston-2.mp3']
    })
  },
  n:{
    sound : new Howl({
    src: ['sounds/piston-3.mp3']
    })
  },
  o:{
    sound : new Howl({
    src: ['sounds/prism-1.mp3']
    })
  },
  p:{
    sound : new Howl({
    src: ['sounds/prism-2.mp3']
    })
  },
  q:{
    sound : new Howl({
    src: ['sounds/splits.mp3']
    })
  },
  r:{
    sound : new Howl({
    src: ['sounds/strike.mp3']
    })
  },
  s:{
    sound : new Howl({
    src: ['sounds/suspension.mp3']
    })
  },
  t:{
    sound : new Howl({
    src: ['sounds/timer.mp3']
    })
  },
  u:{
    sound : new Howl({
    src: ['sounds/ufo.mp3']
    })
  },
  v:{
    sound : new Howl({
    src: ['sounds/veil.mp3']
    })
  },
  w:{
    sound : new Howl({
    src: ['sounds/wipe.mp3']
    })
  },
  x:{
    sound : new Howl({
    src: ['sounds/zig-zag.mp33']
    })
  },
  y:{
    sound : new Howl({
    src: ['sounds/bubbles.mp3']
    })
  },
  z:{
    sound : new Howl({
    src: ['sounds/confetti.mp3']
    })
  }
}

var circles = [];

function onKeyDown(event) {
  if (keyData[event.key]){
    var maxPoint = new Point(view.size.width,view.size.height);
    var randomPoint = Point.random();
    var point = maxPoint*randomPoint;
    var newCircle = new Path.Circle(point, 500);
    newCircle.fillColor='#'+Math.floor(Math.random()*16777215).toString(16);
;
    keyData[event.key].sound.play();
    circles.push(newCircle);
  }


}

var animatedCircle = new Path.Circle(new Point(300,300),100);
// animatedCircle.fillColor = 'green';
function onFrame(event) {
for (var i=0;i<circles.length;i++){
  circles[i].fillColor.hue += 1;
  circles[i].scale(.9);
}

}
