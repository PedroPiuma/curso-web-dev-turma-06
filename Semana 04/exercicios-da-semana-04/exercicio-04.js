const notas = [6, 8, 7]

const media = e => e.reduce((acc, el) => acc + el)
console.log(media(notas))