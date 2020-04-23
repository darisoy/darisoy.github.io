{
    const width = window.innerWidth
    const height = window.innerHeight-10
    
    const canvas = SVG().addTo('svg')
    const color = '#ffffff'
    const w = 7

    var circle1 = canvas.circle(15).move(10-15/2, 110-15/2)
    circle1.fill(color)
    circle1.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle2 = canvas.circle(15).move(200-15/2, 100-15/2)
    circle2.fill(color)
    circle2.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle3 = canvas.circle(15).move(135-15/2, 130-15/2)
    circle3.fill(color)
    circle3.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle4 = canvas.circle(15).move(155-15/2, 230-15/2)
    circle4.fill(color)
    circle4.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle5 = canvas.circle(15).move(360-15/2, 190-15/2)
    circle5.fill(color)
    circle5.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle6 = canvas.circle(15).move(280-15/2, 220-15/2)
    circle6.fill(color)
    circle6.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var circle7 = canvas.circle(15).move(340-15/2, 240-15/2)
    circle7.fill(color)
    circle7.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path1 = canvas.path('M 60 310 L 60 130 L 100 100 L 280 100 L 280 55 L 325 10 L 410 10')
    path1.fill('none')
    path1.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path2 = canvas.path('M 60 310 L 60 260 L 10 200 L 10 110')
    path2.fill('none')
    path2.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path3 = canvas.path('M 105 310 L 105 160 L 135 130')
    path3.fill('none')
    path3.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path4 = canvas.path('M 185 310 L 185 280 L 155 260 L 155 180 L 200 140 L 340 140 L 340 70 L 410 70')
    path4.fill('none')
    path4.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })
    
    var path5 = canvas.path('M 230 310 L 230 190 L 360 190 L 410 230')
    path5.fill('none')
    path5.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path6 = canvas.path('M 230 310 L 230 280 L 280 220')
    path6.fill('none')
    path6.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })

    var path7 = canvas.path('M 305 310 L 305 270 L 340 240 L 340 310')
    path7.fill('none')
    path7.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })
    
    // Every 100ms we decide if we want to create
    // a new star and after which time
    setInterval(() => {
      if (Math.random() < 0.7) {
        setTimeout(() => {
          //TODO: move circles along lines
        }, Math.random() * 1000)
      }
    }, 100)
    
}