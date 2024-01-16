const stud = {
    studnm: "ABC",
    studid: "1010",

    data: function () {
        return (this.studnm + " " + this.studid);
    }
}

const stud1 = {
    studnm: 'XYZ',
    studid: "1321",
}

const boundFunction = stud.data.bind(stud1);
console.log(boundFunction());

