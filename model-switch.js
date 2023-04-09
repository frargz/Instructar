const modelSwitchComponent = () => ({
  init() {
    const modelDict = {}
    modelDict.Paper = ['paperairplane1', 'paperairplane2', 'paperairplane3', 'paperairplane4', 'paperairplane5', 'paperairplane6']
    modelDict.Table = ['table1', 'table2', 'table3', 'table4', 'table5', 'table6']
    let modelList = modelDict.Table
    let bStartFalse = false
    const descDict = {}
    descDict.Table = ['Take the first leg labeled 1A and screw it on the corner of the upside-down table.', 'Repeat step 1 for the rest of the legs.', 'Repeat step 1 for the rest of the legs.', 'Repeat step 1 for the rest of the legs.', 'Flip the table from its back to its front', 'All Done!']
    descDict.Paper = ['Fold along the middle of the paper "hotdog" style to make a crease.', 'Fold the corners of the paper so they fall in line with the crease you just made.', 'Now fold the paper again so the edges of the paper fall in line with the middle crease.', 'Fold the paper together.', 'Bend the "wings" apart and you have a completed airplane!']
    let descList = descDict.Table
    let label = 'Table'

    let mostRecentTextInput = ''

    const model = document.getElementById('model')
    const forwardButton = document.getElementById('forwardbutton')
    const backwardButton = document.getElementById('backwardbutton')
    const searchButton = document.getElementById('searchbutton')
    const cameraButton = document.getElementById('camerabutton')

    const inputElement = document.getElementById('myInput')

    const html = document.getElementById('instructions')
    let idx = 0
    let change = true
    let changecamera = false
    model.removeAttribute('gltf-model')
    model.setAttribute('gltf-model', `#${modelList[idx]}`)
    html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
    const nextModel = () => {
      idx = (idx + 1) % modelList.length
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#${modelList[idx]}`)
      html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
      html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    }
    const previousModel = () => {
      idx = idx === 0 ? (modelList.length) - 1 : --idx
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#${modelList[idx]}`)
      html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
      html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    }
    const changesearch = () => {
      change = !change
      if (change) {
        html.style.visibility = 'hidden'
        document.getElementById('forwardbutton').style.visibility = 'hidden'
        document.getElementById('backwardbutton').style.visibility = 'hidden'
        document.getElementById('camerabutton').style.visibility = 'hidden'

        document.getElementById('search').style.visibility = 'visible'
        document.getElementById('searchbutton').style.bottom = '80%'
      } else {
        html.style.visibility = 'visible'
        document.getElementById('forwardbutton').style.visibility = 'visible'
        document.getElementById('backwardbutton').style.visibility = 'visible'
        document.getElementById('camerabutton').style.visibility = 'visible'

        document.getElementById('search').style.visibility = 'hidden'
        document.getElementById('searchbutton').style.bottom = '3vh'
        if (bStartFalse) {
          try {
            const mL = eval(`modelDict.${mostRecentTextInput}`)
            const dL = eval(`descDict.${mostRecentTextInput}`)
            if (mL.length > 0 && modelList !== mL) {
              idx = mL.length - 1
              modelList = mL
              descList = dL
              label = mostRecentTextInput
              nextModel()
            }
          } finally {
            console.log()
          }
        } else {
          bStartFalse = true
        }
      }
    }
    const changecameraangle = () => {
      changecamera = !changecamera
      if (changecamera) {
        html.style.visibility = 'hidden'
        document.getElementById('forwardbutton').style.visibility = 'hidden'
        document.getElementById('backwardbutton').style.visibility = 'hidden'
        document.getElementById('searchbutton').style.visibility = 'hidden'
        document.getElementById('camerabutton').style.top = '5vh'
      } else {
        html.style.visibility = 'visible'
        document.getElementById('forwardbutton').style.visibility = 'visible'
        document.getElementById('backwardbutton').style.visibility = 'visible'
        document.getElementById('searchbutton').style.visibility = 'visible'
        document.getElementById('camerabutton').style.top = '20vh'
      }
    }
    inputElement.addEventListener('input', (event) => {
      mostRecentTextInput = event.target.value
    })
    changesearch()
    forwardButton.onclick = nextModel
    backwardButton.onclick = previousModel
    searchButton.onclick = changesearch
    cameraButton.onclick = changecameraangle
  },
})

export {modelSwitchComponent}const modelSwitchComponent = () => ({
  init() {
    const modelDict = {}
    modelDict.Paper = ['paperairplane1', 'paperairplane2', 'paperairplane3', 'paperairplane4', 'paperairplane5', 'paperairplane6']
    modelDict.Table = ['table1', 'table2', 'table3', 'table4', 'table5', 'table6']
    let modelList = modelDict.Table
    let bStartFalse = false
    const descDict = {}
    descDict.Table = ['Take the first leg labeled 1A and screw it on the corner of the upside-down table.', 'Repeat step 1 for the rest of the legs.', 'Repeat step 1 for the rest of the legs.', 'Repeat step 1 for the rest of the legs.', 'Flip the table from its back to its front', 'All Done!']
    descDict.Paper = ['Fold along the middle of the paper "hotdog" style to make a crease.', 'Fold the corners of the paper so they fall in line with the crease you just made.', 'Now fold the paper again so the edges of the paper fall in line with the middle crease.', 'Fold the paper together.', 'Bend the "wings" apart and you have a completed airplane!']
    let descList = descDict.Table
    let label = 'Table'

    let mostRecentTextInput = ''

    const model = document.getElementById('model')
    const forwardButton = document.getElementById('forwardbutton')
    const backwardButton = document.getElementById('backwardbutton')
    const searchButton = document.getElementById('searchbutton')
    const cameraButton = document.getElementById('camerabutton')

    const inputElement = document.getElementById('myInput')

    const html = document.getElementById('instructions')
    let idx = 0
    let change = true
    let changecamera = false
    model.removeAttribute('gltf-model')
    model.setAttribute('gltf-model', `#${modelList[idx]}`)
    html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
    const nextModel = () => {
      idx = (idx + 1) % modelList.length
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#${modelList[idx]}`)
      html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
      html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    }
    const previousModel = () => {
      idx = idx === 0 ? (modelList.length) - 1 : --idx
      model.removeAttribute('gltf-model')
      model.setAttribute('gltf-model', `#${modelList[idx]}`)
      html.querySelectorAll('.instructions-paragraph')[0].textContent = descList[idx] != null ? descList[idx] : 'No description for this step.'
      html.querySelectorAll('.instructions-title')[0].textContent = `${label}: Step ${(idx + 1).toString()}`
    }
    const changesearch = () => {
      change = !change
      if (change) {
        html.style.visibility = 'hidden'
        document.getElementById('forwardbutton').style.visibility = 'hidden'
        document.getElementById('backwardbutton').style.visibility = 'hidden'
        document.getElementById('camerabutton').style.visibility = 'hidden'

        document.getElementById('search').style.visibility = 'visible'
        document.getElementById('searchbutton').style.bottom = '80%'
      } else {
        html.style.visibility = 'visible'
        document.getElementById('forwardbutton').style.visibility = 'visible'
        document.getElementById('backwardbutton').style.visibility = 'visible'
        document.getElementById('camerabutton').style.visibility = 'visible'

        document.getElementById('search').style.visibility = 'hidden'
        document.getElementById('searchbutton').style.bottom = '3vh'
        if (bStartFalse) {
          try {
            const mL = eval(`modelDict.${mostRecentTextInput}`)
            const dL = eval(`descDict.${mostRecentTextInput}`)
            if (mL.length > 0 && modelList !== mL) {
              idx = mL.length - 1
              modelList = mL
              descList = dL
              label = mostRecentTextInput
              nextModel()
            }
          } finally {
            console.log()
          }
        } else {
          bStartFalse = true
        }
      }
    }
    const changecameraangle = () => {
      changecamera = !changecamera
      if (changecamera) {
        html.style.visibility = 'hidden'
        document.getElementById('forwardbutton').style.visibility = 'hidden'
        document.getElementById('backwardbutton').style.visibility = 'hidden'
        document.getElementById('searchbutton').style.visibility = 'hidden'
        document.getElementById('camerabutton').style.top = '5vh'
      } else {
        html.style.visibility = 'visible'
        document.getElementById('forwardbutton').style.visibility = 'visible'
        document.getElementById('backwardbutton').style.visibility = 'visible'
        document.getElementById('searchbutton').style.visibility = 'visible'
        document.getElementById('camerabutton').style.top = '20vh'
      }
    }
    inputElement.addEventListener('input', (event) => {
      mostRecentTextInput = event.target.value
    })
    changesearch()
    forwardButton.onclick = nextModel
    backwardButton.onclick = previousModel
    searchButton.onclick = changesearch
    cameraButton.onclick = changecameraangle
  },
})

export {modelSwitchComponent}

