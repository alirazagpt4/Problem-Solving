// print the total sum of numbers 1 to 10
let sum = 0;


for(let i = 1; i<=10 ; i++){
    sum +=i;
}

console.log("The total sum of numbers 1 to 10 is: ", sum);



// Yeh loop kaise kaam karega:

// Start: i = 1 (Loop 1 se shuru hoga).
// Condition: i <= 10 (Jab tak i ki value 10 se chhoti ya barabar hai, loop chalta rahega).
// Increment: i++ (Har baar i ki value 1 se badh jayegi).
// sum += i; (Jo bhi i ki value hogi, usko sum mein add karenge).
// 3. Loop Iterations (Step-by-step Execution Table)
// Iteration	i ki Value	sum (Pehle)	sum += i (Baad mein)
// 1st	1	0	0 + 1 = 1
// 2nd	2	1	1 + 2 = 3
// 3rd	3	3	3 + 3 = 6
// 4th	4	6	6 + 4 = 10
// 5th	5	10	10 + 5 = 15
// 6th	6	15	15 + 6 = 21
// 7th	7	21	21 + 7 = 28
// 8th	8	28	28 + 8 = 36
// 9th	9	36	36 + 9 = 45
// 10th	10	45	45 + 10 = 55
// Loop khattam hone ke baad sum ki final value 55 hogi.

