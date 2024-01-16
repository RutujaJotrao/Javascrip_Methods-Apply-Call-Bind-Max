//call method without arguments
const stud = {
    fullnm: function () {
        console.log("call method without arguments : " + this.roll + " " + this.name)
    }
}

const studData={
    roll : '121',
    name : "Ram"
}

stud.fullnm.call(studData);

//call method with arguments
const emp = {
    fullEmp:function(id){
        console.log("call method with arguments : "+this.nm+" "+this.salary+" "+id);
    }
}

const empData ={
    nm:"Aryan",
    salary:"32000"
};
emp.fullEmp.call(empData,"101")
