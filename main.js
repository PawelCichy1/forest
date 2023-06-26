const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavItems = document.querySelectorAll('.item');
const footerYear = document.querySelector('.footerYear');
const allSections = document.querySelectorAll('.section');
const navBtnbars = document.querySelector('.burger-btn__bars');
const item = document.querySelectorAll('.item')
let home = document.querySelector('#home')
let about = document.querySelector('#aboutus')
let offer = document.querySelector('#offer')
let hero = document.querySelector('#hero')


const handleNav = () => {
    nav.classList.toggle('nav--active');

    allNavItems.forEach((item) => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');

        });
    });
};

const handleYear = () => {
    const year = (new Date).getFullYear()
    footerYear.innerText= year
}

const handleObserver = () => {

    const currentSection = window.scrollY;

    allSections.forEach(section =>    {
        if(section.classList.contains('sectionbtn') && section.offsetTop <= currentSection + 60) {
            navBtnbars.classList.add('btnblackcolor')
        }
        else if (!section.classList.contains('sectionbtn') && section.offsetTop <= currentSection + 60) {
            navBtnbars.classList.remove('btnblackcolor')
        }
    })



}





;


window.addEventListener('scroll', function() {
  var windo = window.scrollY

    
    if (home.offsetTop <=windo && about.offsetTop  >windo){
      document.querySelector(".item1").setAttribute("id","active")
      document.querySelector(".item2").removeAttribute("id","active")
      document.querySelector(".item3").removeAttribute("id","active")
      document.querySelector(".item4").removeAttribute("id","active")
   
    } else if (about.offsetTop  <=windo && hero.offsetTop  >windo){
      
        document.querySelector(".item1").removeAttribute("id","active")
        document.querySelector(".item2").setAttribute("id","active")
        document.querySelector(".item3").removeAttribute("id","active")
        document.querySelector(".item4").removeAttribute("id","active")
    }
    else if (hero.offsetTop +10 <=windo && offer.offsetTop >windo){
        document.querySelector(".item1").removeAttribute("id","active")
        document.querySelector(".item2").removeAttribute("id","active")
        document.querySelector(".item3").setAttribute("id","active")
        document.querySelector(".item4").removeAttribute("id","active")
    }
   
  });



navBtn.addEventListener('click', handleNav);
window.addEventListener('scroll', handleObserver);
handleYear()


