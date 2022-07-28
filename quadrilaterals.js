//Sides input data
let side1 = 10
let side2 = 10
let side3 = 10
let side4 = 10

//Corners input data
let corner1 = 90
let corner2 = 90
let corner3 = 90
let corner4 = 90

// all 4 corners must form 360 degrees, once astablished then can identify form

//Output on Consol the form of the  Quadrilateral

if ((corner1 + corner2 + corner3 + corner4) != 360) {
    console.log("Corners are captured incorrect, must have a total of 360 degrees.");
}
else if ((side1 == side2 && side2 == side3 && side3 == side4) && (corner1 == 90 && corner2 == 90 && corner3 == 90 && corner4 == 90)) {
    console.log("Square");
}
else if ((side1 == side3 && side2 == side4) && (corner1 == 90 && corner2 == 90 && corner3 == 90 && corner4 == 90)) {
    console.log("Rectangle");
}
else if ((side1 == side2 && side2 == side3 && side3 == side4) && (corner1 == corner3 && corner2 == corner4)) {
    console.log("Rhombus");
}
else if ((side1 == side3 && side2 == side4) && (corner1 == corner3 && corner2 == corner4)) {
    console.log("Parallelogram");
}
else {
    console.log("Other Quadrilateral");
}