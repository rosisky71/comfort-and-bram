
let attendanceConfirmation = document.querySelector('#ayes');
let attendanceConfirmation2 = document.querySelector('#ano');
let plusone = document.querySelector('.plusOne')

attendanceConfirmation.addEventListener('change', () => {
    if (attendanceConfirmation.checked) {
        plusone.style.display = 'block';
    }
});

attendanceConfirmation2.addEventListener('change', () => {
    if (attendanceConfirmation2.checked) {
        plusone.style.display = 'none';
    }
});

document.getElementById('_next').value = window.location.href;

const button = document.getElementById('btn');
button.addEventListener('click', () => {
    alert('Thank you')
})