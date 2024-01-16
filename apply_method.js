//apply method without argument
const stud = {
    fullInfo:function() {
        console.log("Apply method without argument : "+this.roll+" "+this.name+" "+this.std)
    }
}

const studInfo = {
    roll:'101',
    name:"ABC",
    std:'8th'
}

stud.fullInfo.apply(studInfo);

//apply method with argument
const stud1 = {
    fullInfo:function(city, school) {
        console.log("Apply method with argument : "+this.roll+" "+this.name+" "+this.std+" "+city+" "+school+"")
    }
}

const studInfo1 = {
    roll:'111',
    name:"XYZ",
    std:'2th'
}

stud1.fullInfo.apply(studInfo1,["Sangli", "English_School"]);