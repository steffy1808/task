/*let number=[1,2,"three",true];
let names=new Array ("join","james");
console.log(number[2]);
console.log(names.length);
//filter()-it filtered the result arguement
let result=number.filter(result=>number[1]);
console.log(result);*/
/*let number=[1,2,3,4,5];
number.splice(1,2,"hai");
//number.slice(1,3);
console.log(number)*/
/*let details={
    name:"js",
    totalmark:"90",
    subject:{
      dbms:"98",
      java:"99",
    },
    avg:function(){
        let sum=this.subject.dbms+this.subject.java;
        return sum;
    }
}
console.log(details.totalmark);
console.log(details["name"]);
console.log(details.subject["java"]);
//console.log(details.avg());
console.log(details.parseInt.()));*/
/*const person={
    name:"steffy",
    age:"18",
    city:"Coimbatore"
};
const{name,age,city}=person;
console.log(name);
console.log(age);
console.log(city);*/
const details=["steffy",18,"bsc.ct"];
const[name,age,department]=details;
console.log(name+" "+age+" "+department);