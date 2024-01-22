// Function to create an informal wireframe for the perceptron
function createPerceptronWireframe() {
    const svgContainer = d3.select('#animation');
  
    // Define positions for perceptron components
    const positions = {
      input: { x: 50, y: 120 },
      weight: { x: 220, y: 120 },
      summation: { x: 390, y: 120 },
      activation: { x: 560, y: 120 },
      output: { x: 730, y: 120 },
    };
  
    // Create circles for each perceptron component
    svgContainer.selectAll('.perceptron-element')
      .data(Object.keys(positions))
      .enter()
      .append('circle')
      .attr('class', 'perceptron-element')
      .attr('cx', key => positions[key].x)
      .attr('cy', key => positions[key].y)
      .attr('r', 20)
      .attr('fill', 'transparent')
      .attr('stroke', '#4285f4')
      .attr('stroke-width', 2);
  
    // Add labels for each perceptron component
    svgContainer.selectAll('.perceptron-label')
      .data(Object.keys(positions))
      .enter()
      .append('text')
      .attr('class', 'perceptron-label')
      .attr('x', key => positions[key].x)
      .attr('y', key => positions[key].y + 5)
      .text(key => key.charAt(0).toUpperCase() + key.slice(1))
      .style('text-anchor', 'middle')
      .style('fill', '#4285f4')
      .style('font-size', '12px');
  
    // Add connecting lines between perceptron components
    const lineData = [
      ['input', 'weight'],
      ['weight', 'summation'],
      ['summation', 'activation'],
      ['activation', 'output'],
    ];
  
    svgContainer.selectAll('.connecting-line')
      .data(lineData)
      .enter()
      .append('line')
      .attr('class', 'connecting-line')
      .attr('x1', d => positions[d[0]].x)
      .attr('y1', d => positions[d[0]].y)
      .attr('x2', d => positions[d[1]].x)
      .attr('y2', d => positions[d[1]].y)
      .attr('stroke', '#4285f4')
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '5,5');
  }
  
  // Call the function to create the perceptron wireframe
  createPerceptronWireframe();
  