const introductionLink = document.querySelector('.introduction-link')
const introductionPage = document.querySelector('.introduction')
const navLinks = document.querySelectorAll('.item-links')
const taskLink = document.querySelector('.tasks-link')
const taskPage = document.querySelector('.task-page')
const noteLink = document.querySelector('.notes-link')
const notePage = document.querySelector('.note-page')

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelector('.item-links.active').classList.remove('active')
    link.classList.add('active')
    showPages(link)
  })
})

function showPages(link) {
  if (link === introductionLink) {
    taskPage.classList.remove('show')
    notePage.classList.remove('show')
    introductionPage.classList.remove('hide')
  } else if (link === taskLink) {
    taskPage.classList.add('show')
    notePage.classList.remove('show')
    introductionPage.classList.add('hide')
  } else if (link === noteLink) {
    notePage.classList.add('show')
    taskPage.classList.remove('show')
    introductionPage.classList.add('hide')
  }
}
