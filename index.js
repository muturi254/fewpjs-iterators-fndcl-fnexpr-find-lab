function superbowlWin(dataSet) {
    let obj = dataSet.find(data => data.result === "W");
    
    if (obj) {
        return obj.year
    }
    return undefined;
}

// let dataSet = [
//     { year: "2018", result: "Lf" },
//     { year: "2017", result: "W" },
//     { year: "2016", result: "N/A" }
// ];

// let john = superbowlWin(dataSet);
// console.log(john);