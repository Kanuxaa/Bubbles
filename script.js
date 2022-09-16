const body = document.body

body.addEventListener('mousemove', (e)=>{
    const bubble = document.createElement('div')
    bubble.classList.add('bubble')
    bubble.style.top = `${e.clientY}px`
    bubble.style.left = `${e.clientX}px`
    bubble.style.width=bubble.style.height=`${Math.floor(Math.random() * 10) + 20}px`;
    body.append(bubble)
    setTimeout(()=>{
        bubble.remove()
    }, 800)
})
