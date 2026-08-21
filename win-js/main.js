
// export
import CircleService from "./circle.service.js";
//export default
import RectangleService from "./rectangle.service.js";

// console.log("====== Sistema de Calculo ======");
// console.log("1 - Reatngulo");
// console.log("2 - Circulo");

const option = prompt("Escolha uma opção (1 - Retangulo, 2 - Circulo)");1
const resultDiv = document.getElementById("result")
let result

switch (option) {
    case 1:
        const width = prompt("Digite a largura: ")
        const height = prompt("Digite a altura: ")
        result = RectangleService(width, height)
        break;
    case 2:
        const radios = prompt("Digite o raio: ")
        result = CircleService(radios)
        break;
    default:
        resultDiv.textContent = "Opção Invalida"
        break;
}

if (result) {
    resultDiv.innerHTML = `
    <p>Área: ${result.area.toFixed(2)}</p>
    <p>Perímetro: ${result.perimeter.toFixed(2)}</p>
    `
}


// if (option == "1") {
//     RectangleService()
// } else if (option == "2") {
//     CircleService()
// } else {
//     console.log("Resultado Invalido");
// }