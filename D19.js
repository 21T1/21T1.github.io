var color = document.querySelector('#color')
var eraser = document.querySelector('#eraser')
var decrease = document.querySelector('#decrease')
var sizeEl = document.querySelector('#size')
var increase = document.querySelector('#increase')
var save = document.querySelector('#save')
var clear = document.querySelector('#clear')
var canvas = document.querySelector('canvas')
var ctx = canvas.getContext('2d')

var pos1 = {
    x: 0,
    y: 0
}
var pos2 = {
    x: 0,
    y: 0
}
var isDrawing = false
var colorPaint = '#000'
var size = 10
sizeEl.innerText = size

canvas.addEventListener('mousedown', function(e){
    isDrawing = true
    pos1 = {
        x: e.offsetX,
        y: e.offsetY
    }
})

document.addEventListener('mouseup', function(){
    isDrawing = false
})

canvas.addEventListener('mousemove', function(e){
    if(isDrawing){
        pos2 = {
            x : e.offsetX,
            y: e.offsetY
        }

        ctx.beginPath()
        ctx.arc(pos1.x,pos1.y,size,0,2*Math.PI)
        ctx.fillStyle = colorPaint
        ctx.fill()

        ctx.beginPath()
        ctx.moveTo(pos1.x,pos1.y)
        ctx.lineTo(pos2.x,pos2.y)
        ctx.strokeStyle = colorPaint
        ctx.lineWidth = size*2
        ctx.stroke()
        pos1 = pos2
    }
})

color.addEventListener('change', function(e){
    colorPaint = e.target.value
})

eraser.addEventListener('click', function(){
    colorPaint = '#fff'
})

decrease.addEventListener('click', function(){
    size -= 5
    if(size < 5)
        size = 5
    sizeEl.innerText = size
})

increase.addEventListener('click', function(){
    size += 5
    if(size > 50)
        size = 50
    sizeEl.innerText = size
})

clear.addEventListener('click', function(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

save.addEventListener('click', function(){
    save.setAttribute('href',canvas.toDataURL('image/png'))
})