var outputDiv = document.querySelector('.outputDiv');
var inputField = document.querySelector('.inputField')
var widthSlider = document.querySelector('.widthRangeField');
var heightSlider = document.querySelector('.heightRangeField');

inputField.addEventListener('input', function(e) {
  outputDiv.textContent = e.target.value;
  fitText(outputDiv);
});

widthSlider.addEventListener('input', function(e) {
  outputDiv.style.width = e.target.value + "px";
  fitText(outputDiv);
});

heightSlider.addEventListener('input', function(e) {
  outputDiv.style.height = e.target.value + "px";
  outputDiv.style.lineHeight = e.target.value + "px";
  fitText(outputDiv);
});

fitText(outputDiv);
