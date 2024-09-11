onload = () => {
    console.log('loaded')

    const tab = document.getElementById('left-tab')
    const main_tab = document.getElementById('main-tab')

    let left_tab_width = tab.offsetWidth

    tab.addEventListener('click', ()=>{
        left_tab_width = tab.offsetWidth
        let twd = tab.offsetWidth
        console.log(tab.offsetWidth)


        let fadeEffect = setInterval(function () {
            tab.style.width = `${twd}px`
            twd -= 10

            if (twd <= 0) {
                clearInterval(fadeEffect)
            }

        }, 4);
    })

    main_tab.addEventListener('click', ()=>{
        console.log("main_tab click")
        tab.style.width = `${left_tab_width}px`;
    })
}
