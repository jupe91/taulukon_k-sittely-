const add_button = document.querySelector('#add')
const min_button = document.querySelector('#min')
const max_button = document.querySelector('#max')
const average_button = document.querySelector('#average')
const sort_button = document.querySelector('#sort')
const list = document.querySelector('table')
const input = document.querySelector('input')
const numbers = []

add_button.addEventListener('click', () => {
    const number = input.value
    numbers.push(number)
    const tr = list.insertRow()
    const td = tr.insertCell()
    td.innerHTML = number
    input.value=''
})

min_button.addEventListener('click', () => {
    const min = Math.min(...numbers)
    alert('Min number is ' + min)
})

max_button.addEventListener('click', () => {
    const max = Math.max(...numbers)
    alert('Max number is ' + max)
})

average_button.addEventListener('click', () => {
    let sum = 0
    numbers.forEach((number) => {
        sum = sum + Number(number)
    })
    const average = sum / numbers.length
    alert("Average is " + average)
})

sort_button.addEventListener('click', () => {
    numbers.sort((a, b) => a - b)
    updateTable()
});

function updateTable() {
    list.innerHTML = ''

    numbers.forEach(number => {
        const tr = document.createElement('tr')
        const td = document.createElement('td')
        td.textContent = number
        tr.appendChild(td)
        list.appendChild(tr)
    });
}
