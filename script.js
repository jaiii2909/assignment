// Get all shortlist buttons
const shortlistButtons = document.querySelectorAll('.shortlist-toggle');
const shortlistToggle = document.getElementById('toggle-shortlist');
const designerList = document.getElementById('designer-list');

let shortlistedIDs = new Set();
let filterActive = false;

shortlistButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.card');
    const id = card.getAttribute('data-id');
    const icon = btn.querySelector('i');

    if (shortlistedIDs.has(id)) {
      shortlistedIDs.delete(id);
      icon.classList.remove('fas');
      icon.classList.add('far');
    } else {
      shortlistedIDs.add(id);
      icon.classList.remove('far');
      icon.classList.add('fas');
    }

    if (filterActive) {
      applyFilter();
    }
  });
});

shortlistToggle.addEventListener('click', () => {
  filterActive = !filterActive;
  shortlistToggle.classList.toggle('active');
  applyFilter();
});

function applyFilter() {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    const id = card.getAttribute('data-id');
    if (filterActive && !shortlistedIDs.has(id)) {
      card.style.display = 'none';
    } else {
      card.style.display = 'flex';
    }
  });
}
