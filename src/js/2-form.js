const STORAGE_KEY = 'feedback-form-state';

let formData = { email: '', message: '' };

const form = document.querySelector('.feedback-form');
const emailInput = form.elements.email;
const messageTextarea = form.elements.message;

const saveToLocalStorage = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    formData = JSON.parse(savedData);
    emailInput.value = formData.email;
    messageTextarea.value = formData.message;
  }
};

form.addEventListener('input', (event) => {
  const { name, value } = event.target;
  formData[name] = value;
  saveToLocalStorage();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  console.log('Form data:', formData);

    form.reset();
  formData = { email: '', message: '' };
  localStorage.removeItem(STORAGE_KEY);
});

document.addEventListener('DOMContentLoaded', loadFromLocalStorage);
