
    const Houseno1 ={
        name:"Appu",
        age:24,
        address: {
            city:"Nilambur",
            state:"kerala"
        },
        others:["Father","Mother","Brother"]
    
    }
    



const addMore = Houseno1;
addMore.address.city="Wayanad";
addMore.others.push("GrandMother")
console.log(Houseno1)
console.log(addMore)