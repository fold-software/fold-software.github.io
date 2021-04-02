let header = document.querySelector('header');
let indicator = document.querySelector('#hero > img');

window.addEventListener('scroll', function(){
    if(window.scrollY > 10) {
        header.classList.add('shadow');
        indicator.classList.add('hidden');
    } else {
        header.classList.remove('shadow');
        indicator.classList.remove('hidden');
    }
})

let send = document.querySelector('#contato a')
document.querySelector('#contato textarea').addEventListener('keyup', function(){
    send.href = `https://wa.me/+5531997519667?text=${encodeURIComponent(this.value)}`
})