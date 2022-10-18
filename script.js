
const now = new Date();

let currentDay = document.getElementById('currentDay');
currentDay.textContent = now.toLocaleString();

const morningTime = 8;
const blockCount = 10;

let container = document.getElementById('container');

for (let hour = morningTime;
     hour <= morningTime + blockCount;
     hour++) {

  let start = new Date();
  start.setHours(hour, 0, 0, 0);

  let end = new Date();
  end.setHours(hour + 1, 0, 0, 0);

  let timeBlockWrapper = document.createElement('div');
  timeBlockWrapper.classList.add('time-block');
  timeBlockWrapper.classList.add('row');

  if (now > start && now < end) {
    timeBlockWrapper.classList.add('present');
  } else if (start < now) {
    timeBlockWrapper.classList.add('past');
  } else {
    timeBlockWrapper.classList.add('future');
  }

  let label = document.createElement('label');
  label.setAttribute('for', 'time');
  label.textContent = hour;
  label.classList.add('col');
  timeBlockWrapper.appendChild(label);

  let identifier = 'text' + hour;

  let textArea = document.createElement('textarea');
  timeBlockWrapper.appendChild(textArea);
  textArea.setAttribute('id', identifier);
  textArea.classList.add('time-block');
  textArea.classList.add('col-md-10');
  textArea.classList.add('col');

  let b = document.createElement('button');
  b.textContent = 'Save';
  b.classList.add('btn');
  b.classList.add('saveBtn');
  b.classList.add('col-md-.5');
  b.classList.add('col');

  textArea.value= localStorage.getItem(identifier)
  b.addEventListener("click", function() {
    console.log(identifier);
     localStorage.setItem(identifier, textArea.value);
  })
  timeBlockWrapper.appendChild(b);


  container.appendChild(timeBlockWrapper);
}

