export default function tabs() {
    const btns = document.querySelectorAll('.tabs__tab'),
          tabsContent = document.querySelectorAll('.menu__cards'),
          btnsPar = document.querySelector('.tabs');

    function hiddenContent() {
        tabsContent.forEach(cont => {
            cont.style.display = 'none'
        })
        btns.forEach(tab => {
            tab.classList.remove('tabs__tab_active')
        })
    };

    function showContent(i = 0) {
        tabsContent[i].style.display = 'flex'
        btns[i].classList.add('tabs__tab_active')
    }

    hiddenContent();
    showContent();

    btnsPar.addEventListener('click', (event) => {
        const target = event.target;

        if(target && target.classList.contains('tabs__tab')) {
            btns.forEach((btn, i) => {
                if(target == btn) {
                    hiddenContent();
                    showContent(i);
                }
            })
        }
    })
}