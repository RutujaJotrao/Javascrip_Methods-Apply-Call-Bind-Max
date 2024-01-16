//use of this keyword
const person = {
    fnm: "John",
    lnm: "Doe",
    fullnm: function () {
        console.log("This method : " + this.fnm + " " + this.lnm);
    }
}

person.fullnm()

