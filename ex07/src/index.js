function main() {
    //
    // Variable declaration
    var studlyCapVar;
    var properCamelCase;
    var titleCaseOver;

    // Variable assignments
    studlyCapVar = 10;
    properCamelCase = "A String";
    titleCaseOver = 9000;
    //
    return {
        studlyCapVar,
        properCamelCase,
        titleCaseOver
    }
}

console.log(main());

module.exports = main;