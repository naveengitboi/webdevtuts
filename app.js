//dom manipulations

const h1 = document.querySelector('.heading');
const btn = document.querySelector('.btn')
h1.addEventListener('click', () => {
    h1.style.color = 'red';
    h1.textContent = 'Hello JS'
})

btn.addEventListener('click', () => {
    btn.textContent = 'Downloaded';
    btn.style.backgroundColor = 'green';
    setTimeout(() => {
        btn.textContent = 'Download';
        btn.style.backgroundColor = '#04ddb2';
    }, 2000)
})