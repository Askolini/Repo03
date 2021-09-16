function main() {
    //
    var x = 7;
    var y = 12;
    var z = "My name is";
    //
    x = x + 2;
    y = y + 4;
    z = z + " John!";
    return [x, y, z];
}

console.log(main());

module.exports = main;