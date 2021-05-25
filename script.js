const stripesContainer = document.getElementById('stripes')
const btn = document.getElementById('btn')


btn.addEventListener('click', () => {
    stripesContainer.classList.toggle('shattered')
})


function createStripes() {
    for(let s = 0; s < 10; s++) {
        
        const stripe = document.createElement('div')
        stripe.classList.add('stripe')

        stripe.style.backgroundPosition = `${-s * 80}px 0`

        stripesContainer.appendChild(stripe)
        
        
        
    }
}

createStripes()