// Document Ready
$(setColors);

function setColors() {
  const colors = [
    "yellow", "blue", "red", "pink", "orange", "gray", "brown",
    "chocolate", "cyan", "black", "white", "chartreuse", "green", "blueViolet"
  ];

  for (let i = 0; i < colors.length; i++) {
    $('#changeColor').append(
      `<button class="set-color" id="${colors[i]}" style="background-color: ${colors[i]}"></button>`
    );
  }

  // Assign color
  $('#changeColor button').click(function() {
    const selectedColor = $(this).attr('id');
    context.fillStyle = selectedColor;
    context.strokeStyle = selectedColor;
  });
}
