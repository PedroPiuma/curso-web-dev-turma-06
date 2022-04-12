const dicDeOperacao = {
  soma: (numberOne, numberTwo) => Number(numberOne) + Number(numberTwo),
  subtracao: (numberOne, numberTwo) => Number(numberOne) - Number(numberTwo),
  divisao: (numberOne, numberTwo) => Number(numberOne) / Number(numberTwo),
  multiplicacao: (numberOne, numberTwo) => Number(numberOne) * Number(numberTwo),
  potenciacao: (numberOne, numberTwo) => Number(numberOne) ** Number(numberTwo),
  resto: (numberOne, numberTwo) => Number(numberOne) % Number(numberTwo),
}

const print = (value) => {
  const paragraph = document.querySelector("#resultado");
  paragraph.innerText = value;
};

window.onload = () => {
  const button = document.querySelector("button");
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const valueOne = document.querySelector("#valueOne");
    const valueTwo = document.querySelector("#valueTwo");
    const operator = document.querySelector("#operator").value;

    const result = dicDeOperacao[operator](valueOne.value, valueTwo.value)

    print(result)

    valueOne.value = ''
    valueTwo.value = ''

  });
};
