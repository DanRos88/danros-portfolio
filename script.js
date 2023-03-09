const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        // console.log(entry)
        if(entry.isIntersecting && entry.target.classList.contains('card')){
            setTimeout(() => {
            entry.target.classList.add('show');
            }, i*500)
            console.log(entry.target, i)
        } else if (entry.isIntersecting){
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});




const hiddenElements = document.querySelectorAll('.hidden');

hiddenElements.forEach(el => observer.observe(el));