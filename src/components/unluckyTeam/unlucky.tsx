// You are keeping score for a basket game with strange rules. 
// The game consists of several rounds, where the scores of the past rounds may affect future round's scores.

// At the beginning of the game, you start with an empty record. 
// You are given a list of strings ops where ops[i] is the ith operation you must apply to the record and is one of the following:

// x - Record a new score of x
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.

// Return the sum of all the scores on the record.

/*
Example:
input: ops = ["5", "2", "C", "D", "+"]
output: 30

"5" - is added to the record: [5]
"2" - is added to the record [5, 2]
"C" - invalidate and removes the previous score, record is now [5]
"D" - double current record: 2 * 5 = 10; record is now [5, 10]
"+" - Add 5 + 10 = 15; record now [5, 10, 15].

The total sum is 5+10+15 = 30.

var calPoints = function(ops){
	var result = null;
return result;
}
var ops = //your test string.split(" ");
console.log(calPoints(ops))
*/
import React from 'react'
type OPS = {
    ops: string,
}
type PreV = {
    previousItem: number
}
// let ops: string = "5 2 C D +"
let opsArr: string[]
export const CalPoints = ({ops}: OPS) =>{
    let record: Array<number> = []
    let sum: number = 0
    let previousItem: number | undefined
    opsArr = ops.split(" ")
    for(let i of ops){
        if(!isNaN(Number(i))){
            record.push(Number(i))
        }
        if(isNaN(Number(i))){
            if(i === "C"){
                record.pop()
            }
            if(i==="D"){
                previousItem = record.pop()
                let newItem = previousItem! * 2
                record.push(previousItem!, newItem)
            }
            if(i === "+"){
                let previousItem = record.pop()
                let nextItem = record.pop()
                let newItem = previousItem! + nextItem!
                record.push(nextItem!, previousItem!, newItem)
            }
        }
    }
    for(let i of record){
        sum += i
    }
    return(
        <React.Fragment>
            {sum}
        </React.Fragment>
    )
}

// console.log(ops)
// console.log(calPoints(ops))