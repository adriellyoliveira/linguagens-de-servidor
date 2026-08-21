
export default function CircleService(radios) {
    const pi = 3.14

    let area = pi * (radios ** 2)
    let perimeter = (2 * pi) * radios

    return{ area, perimeter }
}