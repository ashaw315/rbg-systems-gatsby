const num = (range) => Math.floor(Math.random() * range)

const getSvg = (filename) => {
    return new Promise((res,rej) => {
      project.importSVG(filename, function(e){
        res(e);
      })
    });
  }
  
  let initialScale = 10;
  
  const init = async (pos,size) => {
    let logo = await getSvg("/Artboard 1.svg")
    logo.set({
      blendMode: "lighten",
      applyMatrix: false
    })
    logo.children[0].remove()
    logo.scale(initialScale)
    logo.bounds.center = [window.innerWidth/4 + num(window.innerWidth/2), num(window.innerHeight)]
    copy = logo.clone();
    return [logo,copy];
  }
  
  let moveLayer = new Group();
  moveLayer.set({
    applyMatrix: false
  })
  let countW = 1;
  let countH = 1;
  let unitW = window.innerWidth/countW;
  let unitH = window.innerHeight/countH;
  let staticLayer = new Group();
  
  let tweenTimeout;
  let tweenTo;
  let tween;
  let tweens = {
    up: [],
    down:[]
  }
  
  function randomPosition(){
    return Point.random()*500;
  }
  
  function tweenLoop(){
    tweenTo = {position: randomPosition()};
    tween = moveLayer.tween(tweenTo,{duration: 12000, easing: "easeInOutQuad"})
    tween.then(tweenLoop)
  }
  
  init([unitW,unitH],new Size(unitW,unitH)).then((e) => {
    staticLayer=(e[0])
    moveLayer=(e[1]);
    tweenLoop()
  });
  
  let targetWidth = 200;
  let targetBounds = {
    'bounds.x': .5*window.innerWidth - 100,
    'bounds.y': .5*window.innerHeight - 165,
    'bounds.width': 200,
    'bounds.height': 131
  }
  function stopTweenDown(){
    tweens.down.forEach(t => t.stop());
  }
  function startTweenDown(){
    let size = targetWidth/staticLayer.bounds.width;
    tween.stop();
    let tween1 = moveLayer.tween(targetBounds,{duration: 3000,easing: "easeInOutQuad"})
    let tween2 = staticLayer.tween(targetBounds,{duration: 3000,easing: "easeInOutQuad"})
    tweens.down = [tween1,tween2];
  }
  function stopTweenUp(){
    tweens.up.forEach(t => t.stop());
  }
  function startTweenUp(){
    let size = targetWidth/staticLayer.bounds.width;
    tween.stop();
    let pos = randomPosition();
    let tween1 = moveLayer.tween({scaling: initialScale, position: pos},{duration: 3000,easing: "easeInOutQuad"})
    let tween2 = staticLayer.tween({scaling: initialScale, position: pos},{duration: 3000,easing: "easeInOutQuad"})
    tween2.then(tweenLoop)
    tweens.up = [tween1,tween2];
  }
  let small = false;
  
  function toggleLogo(){
    if(!small){
      startTweenDown()
      stopTweenUp();
      small = true;
    } else {
      startTweenUp();
      stopTweenDown();
      small = false;
    }
  }
  
  function onKeyDown(e){
    tween.stop();
    if(e.key === "space"){
      toggleLogo()
    }
  }
  
//   moveLayer.onClick = toggleLogo

function onMouseDown(e) {
    toggleLogo();
}