const nomes = ['Juliana', 'Pedro', 'Regina', 'João', 'Patrícia', 'Gabriel', 'Carlos', 'Carla']

const checkNome = (nome, nomes) => console.log(nomes.some(e => e == nome) ? `O nome ${nome} existe.` : `O nome ${nome} não existe.`)

checkNome('Julian', nomes)