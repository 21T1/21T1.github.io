var upload = document.querySelector('#mypicture')
var preview = document.querySelector('.preview')
var error = document.querySelector('.error')

upload.addEventListener('change', function(e){
    var file = upload.files[0]
    if(!file)
        return
    if(!file.name.endsWith('.png')){
        error.innerHTML = `Hinh anh khong thuoc dinh dang png`
        return
    }else{
        error.innerHTML = ``
    }
    if(file.size/(1024*1024)>5){
        error.innerHTML = `Chi duoc upload hinh anh < 5MB`
        return
    }else{
        error.innerHTML = ``
    }
    var img = document.createElement('img')
    var fileReader = new FileReader()
    fileReader.readAsDataURL(file)
    fileReader.onloadend = function(e){
        img.src = e.target.result
    }    
//    img.src = URL.createObjectURL(file)
    preview.appendChild(img)
})
