// um igual => atribuição
//dois iguais => comparação de valor
// três iguais => tipo e valor

export default function RectangleService(height, width) {

    let area = height * width;
    let perimeter = (height + height) * (width + width);

    return { area, perimeter }
}
