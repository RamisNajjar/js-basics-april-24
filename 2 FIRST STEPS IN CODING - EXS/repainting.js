function repainting(input) {
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.5;
    let paintPrice = (paint + 10 / 100 * paint) * 14.5;
    let razreditelPrice = razreditel * 5;
    let bags = 0.40;
    
    let materialsTottalPrice = nylonPrice + paintPrice + razreditelPrice + bags;
    let maistori = (0.3 * materialsTottalPrice) * hours;

    let totalPrice = materialsTottalPrice + maistori;

    console.log(totalPrice);

    


}

repainting(["10", "11", "4", "8"]) 