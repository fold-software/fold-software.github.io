let projectsWrapper = document.querySelector("#projects")
document.querySelector('a[href="#top"]').addEventListener('click', function(ev){
    ev.preventDefault();
    projectsWrapper.scrollIntoView({behavior: 'smooth', block: 'start'})
})

let current = document.querySelector('#projects nav span')
let projects = document.querySelectorAll('#projects li');
document.querySelector('a[href="#prev"]').addEventListener('click', function(ev){
    ev.preventDefault();
    let curr = parseInt(current.innerText.split('/')[0]) - 1 
    let max = parseInt(current.innerText.split('/')[1])

    curr = (curr - 1 + max) % max;

    for (const p of projects)
        p.style.transform = `translateX(-${curr}00%)`

    current.innerText = `${curr + 1} / ${max}`
})

document.querySelector('a[href="#prox"]').addEventListener('click', function(ev){
    ev.preventDefault();
    let curr = parseInt(current.innerText.split('/')[0]) - 1 
    let max = parseInt(current.innerText.split('/')[1])

    curr = (curr + 1) % max;

    for (const p of projects)
        p.style.transform = `translateX(-${curr}00%)`
        
    current.innerText = `${curr + 1} / ${max}`
})