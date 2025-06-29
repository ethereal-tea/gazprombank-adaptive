
const hasCardBtn = document.getElementById('has-card-btn');
const noCardBtn = document.getElementById('no-card-btn');

const connectTabsContent = document.querySelector('.connect__tabs-content');

hasCardBtn.addEventListener('click', () => {
  if(!hasCardBtn.classList.contains('is-active')) {
    hasCardBtn.classList.add('is-active');
    noCardBtn.classList.remove('is-active');
    connectTabsContent.children[0].classList.remove('is-active');
    connectTabsContent.children[1].classList.add('is-active');
  }
})

noCardBtn.addEventListener('click', () => {
  if(!noCardBtn.classList.contains('is-active')) {
    noCardBtn.classList.add('is-active');
    hasCardBtn.classList.remove('is-active');
    connectTabsContent.children[0].classList.add('is-active');
    connectTabsContent.children[1].classList.remove('is-active');
  }
})
