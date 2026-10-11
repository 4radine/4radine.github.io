document.addEventListener('DOMContentLoaded', () => {

    document.querySelectorAll("[data-slide-target]").forEach((element) => {
        let id = element.getAttribute('data-slide-target');
        let target = document.getElementById(id);

        element.querySelectorAll("[data-slide-trigger]").forEach((e) => {
            e.addEventListener('click', ()=> {
                let id2 = e.getAttribute('data-slide-trigger');
                
                element.querySelectorAll("[data-slide-trigger]").forEach((t)=>{
                    if (t.getAttribute('data-slide-trigger') === id2) {
                        t.classList.add('active');
                    } else {
                        t.classList.remove('active');
                    }
                })

                

                target.querySelectorAll("section").forEach((d)=>{
                    if (d.id === e.getAttribute('data-slide-trigger')) {
                        d.classList.remove("hidden")
                    }
                    else {
                        d.classList.add("hidden")
                    }
                });
            });
        })
    })


});