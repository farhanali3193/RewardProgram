import React from 'react';

function mapper (arr) {
    const newArr = arr.map((item)=>{
         if(item>100){
             return ((50*1) + ((item - 100)*2)) 
         } else if (item>50 && item <=100){
             return ((item - 50)*1)
         } else {
             return 0;
         }
     })
     return newArr;
 }
 
 function reducer (arr){
     const reducedAmt = arr.reduce((acc, curr)=>{
         return acc + curr;
     },0)
     return reducedAmt;
 }

function Points (props){
    const septItemsPurchased = [];
    const augItemsPurchased = [];
    const julItemsPurchased = [];
    const totalItemsPurchased = props.filteredData;

    props.filteredData.forEach((item)=>{
        if(item.date[1] === '9'){
            septItemsPurchased.push(item);
        } else if(item.date[1] === '8'){
            augItemsPurchased.push(item);
        } else if (item.date[1]=== '7'){
            julItemsPurchased.push(item);
        }
    })
    
    const totalAmtArr = totalItemsPurchased.map((item)=>item.amt)
    const totalPointsArr = mapper(totalAmtArr);
    const totalPoints = reducer(totalPointsArr)

    const septAmtArr = septItemsPurchased.map((item)=>item.amt);
    const septPointsArr = mapper(septAmtArr);
    const septPoints = reducer(septPointsArr);

    const augAmtArr = augItemsPurchased.map((item)=>item.amt)
    const augPointsArr = mapper(augAmtArr)
    const augPoints = reducer(augPointsArr);

    const julAmtArr = julItemsPurchased.map((item)=>item.amt);
    const julPointsArr = mapper(julAmtArr);
    const julPoints = reducer(julPointsArr);

    return(
        <div>
            <p> {props.name} has a total of {totalPoints} points</p> 
            <p> {props.name} received {septPoints} points in September</p> 
            <p> {props.name} received {augPoints} points in August</p> 
            <p> {props.name} received {julPoints} points in July</p> 
        </div>
      
    )
}
export default Points;