{
    const width = window.innerWidth
    const height = window.innerHeight-10
    
    const canvas = SVG().addTo('svg')
    const color = '#f7f7f7'
    const w = 7
    const circlesize = 15
    const delay = 2000;

    animateCircle([[60, 310], [60, 260], [10, 200], [10, 110]])
    animateCircle([[60, 310], [60, 130], [100, 100], [280, 100], [280, 55], [325, 10], [410, 10]])
    animateCircle([[105, 310], [105, 160], [135, 130]])
    animateCircle([[185, 310], [185, 280], [155, 260], [155, 180], [200, 140], [340, 140], [340, 70], [410, 70]])
    animateCircle([[230, 310], [230, 190], [360, 190], [410, 230]])
    animateCircle([[230, 310], [230, 280], [280, 220]])
    animateCircle([[305, 310], [305, 270], [340, 240], [340, 310]])

    function animateCircle(array) {
        generatePath(array)
        var circle = generateCircle(array)
        setInterval(() => {
            animation(circle, array)
        }, 5000)
    }

    function animation(circle, array) {
        for (var i = 0; i < array.length; i++) {
            circle.animate({duration: delay}).move(array[i][0]-15/2, array[i][1]-15/2) 
        }
        for (var i = array.length - 1; i >= 0; i--) {
            circle.animate({duration: delay}).move(array[i][0]-15/2, array[i][1]-15/2) 
        }
    }

    function generatePath(array) {
        var path = canvas.path(generateString(array))
        path.fill('none')
        path.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })
    }

    function generateString(array) {
        var string = 'M ' + array[0][0] + ' ' + array[0][1]
        for (var i = 1; i < array.length; i++) {
            string += ' ' + array[i][0] + ' ' + array[i][1]
        }
        return string
    }

    function generateCircle(array) {
        var circle = canvas.circle(circlesize).move(array[0][0]-circlesize/2, array[0][1]-circlesize/2)
        circle.fill(color)
        circle.stroke({ color: color, width: w, linecap: 'round', linejoin: 'round' })
        return circle
    }
}