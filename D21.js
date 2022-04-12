var toggle = document.querySelector('#toggleMode')

toggle.addEventListener('change', function(){
    document.body.classList.toggle('dark')
})