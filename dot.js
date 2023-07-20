// Function to render the matrix
function renderMatrix(matrix, containerId) {
    const container = d3.select(`#${containerId}`);
  
    // Create a table to represent the matrix
    const table = container.append("table");
  
    // Create rows and cells for each element in the matrix
    const rows = table.selectAll("tr").data(matrix).enter().append("tr");
    const cells = rows
      .selectAll("td")
      .data((row) => row)
      .enter()
      .append("td")
      .text((d) => d);
  }
  
  // Function to perform the dot product between two matrices
  function dotProduct(matrix1, matrix2) {
    const result = [];
    for (let i = 0; i < matrix1.length; i++) {
      const row = [];
      for (let j = 0; j < matrix2[0].length; j++) {
        let sum = 0;
        for (let k = 0; k < matrix2.length; k++) {
          sum += matrix1[i][k] * matrix2[k][j];
        }
        row.push(sum);
      }
      result.push(row);
    }
    return result;
  }
  
  function calculateDotProduct() {
    // Get the input values and create the matrices
    const matrix1 = [
      [+document.getElementById('m1r1c1').value, +document.getElementById('m1r1c2').value, +document.getElementById('m1r1c3').value],
      [+document.getElementById('m1r2c1').value, +document.getElementById('m1r2c2').value, +document.getElementById('m1r2c3').value],
      [+document.getElementById('m1r3c1').value, +document.getElementById('m1r3c2').value, +document.getElementById('m1r3c3').value],
    ];
  
    const matrix2 = [
      [+document.getElementById('m2r1c1').value, +document.getElementById('m2r1c2').value, +document.getElementById('m2r1c3').value],
      [+document.getElementById('m2r2c1').value, +document.getElementById('m2r2c2').value, +document.getElementById('m2r2c3').value],
      [+document.getElementById('m2r3c1').value, +document.getElementById('m2r3c2').value, +document.getElementById('m2r3c3').value],
    ];
  
    // Perform the dot product with the transpose of the matrix
    const transposeMatrix = matrix2[0].map((col, i) => matrix2.map((row) => row[i]));
    const dotProductResult = dotProduct(matrix1, transposeMatrix);
  
    // Render the matrices and the dot product result
    renderMatrix(matrix1, 'matrix1');
    renderMatrix(matrix2, 'matrix2');
    renderMatrix(dotProductResult, 'dot-product-result');
  }