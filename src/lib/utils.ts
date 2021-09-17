export const pokedexNumber = (number: number) => {
    let data: string = "";
    for(let i = number.toString().length; i < 3; i++) {
        data += "0";
    }
    data += number;
    console.log(data);
    return data;
}