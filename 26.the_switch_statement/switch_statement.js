const day = "monday"

// // We are going to compare the "day" with other values. What will happen is that "day" will be compared to "monday" in a strict equality way -> day === "monday" -> if true, the console log will be executed
// switch(day) {
//     case "monday":
//         console.log("Plan Course Structure");
//         console.log("Go to coding meetup");
//         break;
//     case "tuesday":
//         console.log("Prepare theory videos");
//         break;
//     // by not just leaving the next case empty without any break in between, we are signaling to JS that we want to use the same condition available in the next case for the "wednesday" one as well
//     case "wednesday":
//     case "thursday":
//         console.log("Write code examples");
//         break;
//     case "friday":
//         console.log("Record videos");
//         break;
//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend!");
//         break;
//     // if all other cases fail, then you can use a default value. Similar to an else block at the end of an if statement
//     default:
//         console.log("Not a valid day!")
// }


// Using if/else conditions

if(day === "monday") {
    console.log("Plan Course Structure");
    console.log("Go to coding meetup");
} else if(day === "tuesday") {
    console.log("Prepare theory videos");
} else if(day === "wednesday" || day === "thursday") {
    console.log("Write code examples");
} else if(day === "friday") {
    console.log("Record videos");
} else if(day === "saturday" || day === "sunday") {
    console.log("Enjoy the weekend!");
} else {
    console.log("Not a valid day!");
}