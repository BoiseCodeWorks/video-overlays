(function(){
  let img = document.getElementById('img');
  let state = {in: false, pos: -1}
  let cords = [{in: {x: 1, y: 1}, outs:[{x: -30, y: 1}, {x: 1, y: -35}]}, {in: {x:95, y: 60}, outs:[{x: 150, y: 60}, {x:95, y: 80}]}, {in: {x:1, y: 60}, outs:[{x: -50, y: 60}, {x:1, y: 80}]}]
  
  function transition(){
    if(state.in){
      state.in = false
      let n = cords[state.pos].outs[Math.floor(Math.random() * cords[state.pos].outs.length)]
      setTimeout(transition, 6000 * 3)
      return setImg(n)
    }
    state.in = true
    changePos()
    setImg(cords[state.pos])
    setTimeout(transition, 6000 * 8)
  }
  
  function changePos(){
    let n = Math.floor(Math.random() * cords.length)
    state.pos = Math.floor(Math.random() * cords.length)
  }
  
  function setImg(state){
    img.style.bottom = `${state.y}em` 
    img.style.right = `${state.x}em` 
  }
  
  setTimeout(transition, 5000)
  
  
}())
