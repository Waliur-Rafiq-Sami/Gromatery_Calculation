// TriangleCalculate
function calculateTrinagleArea() {
  //   console.log("Triangle Calculate Suessfully");
  //   ---------First Input Selection----->
  const firstInput = document.getElementById("triangle_base_input");
  const convertFirstNumber = parseFloat(firstInput.value);
  //   console.log(convertFirstNumber);
  //   ---------Second Input Selection----->
  const secondInput = document.getElementById("triangle_hight_input");
  const convertSecondNumber = parseFloat(secondInput.value);
  //   console.log(convertSecondNumber);
  //   ---------Calculation Selection----->
  const calculation = 0.5 * convertFirstNumber * convertSecondNumber;
  //   console.log("Area of the Triangle is = ", calculation);
  // Display Number in Html File
  const display = document.getElementById("displayOfTriangleCalcilation");
  display.innerText = calculation;

  firstInput.value = "";
  secondInput.value = "";
}

// RectangleCalculate
function calculateRectangleArea() {
  //   console.log("Rectang Calculate Suessfully");
  //   ---------First Input Selection----->
  const firstInput = document.getElementById("Rectangle_width_input");
  const convertFirstNumber = parseFloat(firstInput.value);
  //   console.log(convertFirstNumber);
  //   ---------Second Input Selection----->
  const secondInput = document.getElementById("Rectangle_length_input");
  const convertSecondNumber = parseFloat(secondInput.value);
  //   console.log(convertSecondNumber);
  //   ---------Calculation Selection----->
  const calculation = convertFirstNumber * convertSecondNumber;
  //   console.log("Area of the Rectang is = ", calculation);
  // Display Number in Html File
  const display = document.getElementById("displayOfRectangCalcilation");
  display.innerText = calculation;

  firstInput.value = "";
  secondInput.value = "";
}
console.log("");
console.log();

// ParallelogramCalculate
function calculateParallelogramleArea() {
  //   console.log("Parallelogram Calculate Suessfully");
  //   ---------First Input Selection----->
  const firstInput = document.getElementById("Parallelogram_base_input");
  const convertFirstNumber = parseFloat(firstInput.value);
  //   console.log(convertFirstNumber);
  //   ---------Second Input Selection----->
  const secondInput = document.getElementById("Parallelogram_hight_input");
  const convertSecondNumber = parseFloat(secondInput.value);
  //   console.log(convertSecondNumber);
  //   ---------Calculation Selection----->
  const calculation = convertFirstNumber * convertSecondNumber;
  //   console.log("Area of the Parallelogram is = ", calculation);
  // Display Number in Html File
  const display = document.getElementById("displayOfParallelogramCalcilation");
  display.innerText = calculation;

  firstInput.value = "";
  secondInput.value = "";
}
// Rhombus;
// rhombusKeyUpD_1;
function rhombusKeyUpD_1() {
  const keyUP = document.getElementById("Rhombus_d_1_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Rhombus_d_1_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// rhombusKeyUpD_2;
function rhombusKeyUpD_2() {
  const keyUP = document.getElementById("Rhombus_d_2_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Rhombus_d_2_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// RhombusCalculate
function calculateRhombusleArea() {
  //   console.log("Rectang Calculate Suessfully");
  //   ---------First Input Selection----->
  const firstInput = document.getElementById("Rhombus_d_1_input");
  const convertFirstNumber = parseFloat(firstInput.value);
  //   console.log(convertFirstNumber);
  //   ---------Second Input Selection----->
  const secondInput = document.getElementById("Rhombus_d_2_input");
  const convertSecondNumber = parseFloat(secondInput.value);
  //   console.log(convertSecondNumber);
  //   ---------Calculation Selection----->
  const calculation = 0.5 * convertFirstNumber * convertSecondNumber;
  //   console.log("Area of the Rectang is = ", calculation);
  // Display Number in Html File
  const display = document.getElementById("displayOfRhombusCalcilation");
  display.innerText = calculation;

  firstInput.value = "";
  secondInput.value = "";
}
// Pentagon;
// Pentagon_p_input;
function Pentagon_p_input() {
  const keyUP = document.getElementById("Pentagon_p_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Pentagon_p_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// Pentagon_b_input;
function Pentagon_b_input() {
  const keyUP = document.getElementById("Pentagon_b_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Pentagon_b_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// PentagonCalculate
function calculatePentagonleArea() {
  //   console.log("Pentagon Calculate Suessfully");
  //   ---------First Input Selection----->
  const firstInput = document.getElementById("Pentagon_p_input");
  const convertFirstNumber = parseFloat(firstInput.value);
  //   console.log(convertFirstNumber);
  //   ---------Second Input Selection----->
  const secondInput = document.getElementById("Pentagon_b_input");
  const convertSecondNumber = parseFloat(secondInput.value);
  //   console.log(convertSecondNumber);
  //   ---------Calculation Selection----->
  const calculation = 0.5 * convertFirstNumber * convertSecondNumber;
  //   console.log("Area of the Pentagon is = ", calculation);
  // Display Number in Html File
  const display = document.getElementById("displayOfPentagonCalcilation");
  display.innerText = calculation;

  firstInput.value = "";
  secondInput.value = "";
}

// Ellipse
// Ellipse_a_input
function Ellipse_a_input() {
  const keyUP = document.getElementById("Ellipse_a_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Ellipse_a_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// Ellipse_b_input
function Ellipse_b_input() {
  const keyUP = document.getElementById("Ellipse_b_input");
  const keyUPvalue = keyUP.value;
  const keyUPshow = document.getElementById("Ellipse_b_input_show");
  keyUPshow.innerText = keyUPvalue;
}
// EllipseCalculate;
function EllipseCall() {
  const getAinput = document.getElementById("Ellipse_a_input");
  const getAvalue = getAinput.value;
  const valueAconvart = parseFloat(getAvalue);
  const getBinput = document.getElementById("Ellipse_b_input");
  const getBvalue = getBinput.value;
  const valueBconvart = parseFloat(getBvalue);
  const EllipseCalculation = 3.1416 * valueAconvart * valueBconvart;
  const display = document.getElementById("displayOfEllipseCalcilation");
  display.innerText = EllipseCalculation;
}
