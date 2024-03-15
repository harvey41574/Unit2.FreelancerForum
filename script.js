//Create a list of freelancers.
const dataArray=[
    {
        id:1,
        name:Alice,
        occupation:writer,
        price:30
    }
    {
        id:2,
        name:Bob,
        occupation:teacher,
        price:50
    }
    {
        id:3,
        name:Carol,
        occupation:programmer,
        price:70
    }

]

//


function createCard(feelancer){
 const card= document.createElement('div');
 card.className= "card";
 const header= createCardHeader(freelancer.name,freelancer.image);
 const text=document.createTextNode(text);


}
//Each has a:name, occupation, and starting pay
//Alice-writer-$30.00/
//Bob-teacher-$50.00/
//Carol-programmer-$70.00/
//updates every 2 seconds
//average price adjusts accordingly