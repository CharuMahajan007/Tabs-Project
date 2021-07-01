const about = document.querySelector('.about');
const btns = document.querySelectorAll('.tab-btn');
const content = document.querySelectorAll('.content');

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) { 
        const id = (e.currentTarget.dataset.id);
        btns.forEach(function (item) {
            if (id !== item.dataset.id) {
                item.classList.remove('active');
                btn.classList.add('active'); 
            }
            content.forEach(function(info){
                info.classList.remove('active')
            })
            const element = document.getElementById(id)
            // console.log(element)
            element.classList.add('active')
        })
    })
})
