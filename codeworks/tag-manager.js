(function () {
  let img = document.getElementById('img');
  setInstructor()

  let ul = { in: { x: 95, y: 60 }, outs: [{ x: 150, y: 60 }, { x: 95, y: 80 }] }
  let cords = [{ in: { x: 1, y: 2.5 }, outs: [{ x: -50, y: 1 }, { x: 1, y: -35 }] }, { in: { x: 1, y: 60 }, outs: [{ x: -50, y: 60 }, { x: 1, y: 80 }] }]
  let state = { in: false, pos: 0 }
  let t = 60000
  function transition() {
    console.log(state)
    if (state.in) {
      state.in = false
      let n = cords[state.pos].outs[Math.floor(Math.random() * cords[state.pos].outs.length)]
      setImg(n)
      setTimeout(transition, t * 3)
      return
    }
    state.in = true
    changePos()
    setImg(cords[state.pos].outs[0])
    setTimeout(() => {
      setImg(cords[state.pos].in)
      setTimeout(transition, t * 10)
    }, 1000)
  }

  function changePos() {
    state.pos = Math.floor(Math.random() * cords.length)
  }

  function setImg(state) {
    img.style.bottom = `${state.y}em`
    img.style.right = `${state.x}em`
  }

  function setInstructor() {
    let params = new URL(location.href).searchParams;
    let instructor = {
      name: params.get('instructor'),
      photo: params.get('photo')
    }
    let name = document.getElementById('instructor-name');
    let photo = document.getElementById('instructor-photo');
    name.textContent = instructor.name || ''
    photo.setAttribute('src', instructor.photo + '.jpg')
  }

  setTimeout(transition, 5000)


}())
