function calculateArea() {
  const side1 = parseInt(document.getElementById("sideOne").value);
  const side2 = parseInt(document.getElementById("sideTwo").value);
  const side3 = parseInt(document.getElementById("sideThree").value);

  console.log(side1);
  console.log(side2);
  console.log(side3);

  var s = (side1 + side2 + side3) / 2;
  var area = Math.sqrt(s * ((s - side1) * (s - side2) * (s - side3)));

  console.log(area);
  console.log(
    `Area of Traingle with Sides ${side1} ${side2} ${side3} is  ${area}`
  );

  document.getElementById(
    "area"
  ).innerText = `Area of Traingle with Sides ${side1} ${side2} ${side3} is  ${area}`;
}
