window.onload = () => {
    // const paragrafos = document.querySelectorAll("p")
    // paragrafos[1].innerText = "Novo texto"
    // paragrafos[0].remove()
    const [p1, p2] = document.querySelectorAll("p")
    p2.innerText = "Novo texto"
    p1.remove()
}