var btnMorning = document.querySelector('.control .morning')
var btnAfternoon = document.querySelector('.control .afternoon')
var btnNight = document.querySelector('.control .night')

function createToast(status){
    let templateInner = ``
    switch(status){
        case 'morning':
            templateInner = `
                <i class="fa-solid fa-sun"></i>
                <span class="message">Good Morning</span>`
            break;
        case 'afternoon':
            templateInner = `
                <i class="fa-solid fa-cloud"></i>
                <span class="message">Good Afternoon</span>`
            break;
        case 'night':
            templateInner = `
                <i class="fa-solid fa-moon"></i>
                <span class="message">Good Night</span>`
            break;
    }
    var toast = document.createElement('div')
    toast.classList.add('toast')
    toast.classList.add(status)
    toast.innerHTML = `${templateInner}
        <span class="countdown"></span>`
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)
    setTimeout(function(){
        toast.style.animation = 'slide_hide 1s ease forwards'
    }, 4000)
    setTimeout(function(){
        toast.remove()
    }, 6000)
}

btnMorning.addEventListener('click', function(){
    createToast('morning')
})
btnAfternoon.addEventListener('click', function(){
    createToast('afternoon')
})
btnNight.addEventListener('click', function(){
    createToast('night')
})

