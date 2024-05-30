function areaOfFigures(input) {
    let type = input[0];

    if(type === "square") {
        let l = Number(input[1]);  
        let area = l * l;
        console.log(area.toFixed(3));
    } else if (type === "rectangle") {
        let a = Number(input[1]);
        let b = Number(input[2]);
        let area = a * b;
        console.log(area.toFixed(3));
    } else if (type === "circle") {
        let r = Number(input[1]);
        let area = Math.PI * Math.pow(r, 2);
        console.log(area.toFixed(3));
    } else { 
        let a = Number(input[1]);
        let h = Number(input[2]);
        let area = a * h / 2;
        console.log(area.toFixed(3));

    }
}

areaOfFigures(["triangle", "4.5", "20"]);