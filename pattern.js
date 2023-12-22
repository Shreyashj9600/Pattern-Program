// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < i; j++) {
        
//         console.log("*");
//     }    
// }

// Print 4 stars in a column
console.log("Stars in a column:");
for (let i = 0; i < 4; i++) {
    console.log("*");
}

// Print 4 stars in a row
console.log("\nStars in a row:");
for (let i = 0; i < 4; i++) {
    process.stdout.write("* ");
}
console.log(); // Move to the next line after printing the row
