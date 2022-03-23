//Desenvolva um sistema de Pedra papel e tesoura.

//Entradas:
//PP, PD, TS

//Saídas:

//"PD venceu";
//"TS venceu";
//"PP venceu";

const game = (actionOne, actionTwo) => {
    if (typeof (actionOne || actionTwo) !== 'string') return console.log('Jogada inválida')
    const dic = {
        PDTS: 'PD venceu',
        PDPP: 'PP venceu',
        TSPP: 'TS venceu',
    }
    const action = (actionOne + actionTwo).toUpperCase()
    const reverseAction = (actionTwo + actionOne).toUpperCase()
    return console.log(dic[action] ? dic[action] : dic[reverseAction])
}
game('TS', 'PD')
