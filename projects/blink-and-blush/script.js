const WHATSAPP_NUMBER = '27766202796';
const bookingForm = document.getElementById('booking-form');
const formError = document.getElementById('form-error');
const dateInput = document.getElementById('booking-date');
const byoHelpFieldset = document.getElementById('byo-help-fieldset');
const helpCheckbox = document.getElementById('application-help');

function localDateString(date = new Date()) {
  const offset = date.getTimezoneOffset();
  const local = new Date(date.getTime() - offset * 60 * 1000);
  return local.toISOString().split('T')[0];
}

dateInput.min = localDateString();

document.querySelectorAll('input[name="service"]').forEach((radio) => {
  radio.addEventListener('change', () => {
    const isByo = radio.value === 'BYO lashes';
    byoHelpFieldset.hidden = !isByo;
    if (!isByo) helpCheckbox.checked = false;
  });
});

document.querySelectorAll('[data-service]').forEach((link) => {
  link.addEventListener('click', () => {
    const target = document.querySelector(`input[name="service"][value="${link.dataset.service}"]`);
    if (target) {
      target.checked = true;
      target.dispatchEvent(new Event('change'));
    }
  });
});

bookingForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(bookingForm);
  const name = String(data.get('customerName') || '').trim();
  const date = String(data.get('bookingDate') || '');
  const time = String(data.get('bookingTime') || '');
  const service = String(data.get('service') || '');
  const price = document.querySelector('input[name="service"]:checked')?.dataset.price || '';
  const help = data.get('applicationHelp') ? 'Yes, I would like help applying them.' : 'No application help needed.';

  if (!name || !date || !time || !service) {
    formError.hidden = false;
    const firstMissing = bookingForm.querySelector(':invalid');
    firstMissing?.focus();
    return;
  }

  formError.hidden = true;
  const formattedDate = new Intl.DateTimeFormat('en-ZA', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(`${date}T12:00:00`));
  const message = [
    'Hi Theo 💕 I would love to book with Blink & Blush!',
    '',
    `Name: ${name}`,
    `Service: ${service} (${price})`,
    `Preferred date: ${formattedDate}`,
    `Preferred time: ${time}`,
    ...(service === 'BYO lashes' ? [`Application help: ${help}`] : []),
    '',
    'Please let me know if this slot is available ✨'
  ].join('\n');
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
});
