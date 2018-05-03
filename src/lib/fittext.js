function fitText(element) {

  // Width and Height of the container
  var elementWidth = element.clientWidth;
  var elementHeight = element.clientHeight;

  // Text of the element
  var text = element.textContent;

  // How much to add to the previous font size
  // Each time we try to increase it.
  var fontChangeStep = 1;

  // updatedFontSize creates a hidden DOM node that contains our text
  // measures it's width and starts scaling it up until it's close
  // to the width of our desired container.
  // Scaling up is done by a "step" initalized in fontChangeStep.
  // After we're done with the node we immediately remove it from the DOM tree.
  function updatedFontSize() {
    var resizeHelper = document.createElement("span");
    resizeHelper.style.fontSize = 0 + "px";
    resizeHelper.style.display = 'inline-block';
    resizeHelper.style.visibility = 'visible';
    resizeHelper.textContent = text;
    document.body.appendChild(resizeHelper);

    while ((parseInt(resizeHelper.textContent.length) > 0) && (parseInt(elementHeight - resizeHelper.clientHeight) > 10) && (parseInt(elementWidth - resizeHelper.clientWidth) > 10)) {
      resizeHelper.style.fontSize = (parseInt(resizeHelper.style.fontSize) + fontChangeStep) + 'px';
    }
    resizeHelper.parentNode.removeChild(resizeHelper);
    return parseInt(resizeHelper.style.fontSize);
  }
  element.style.fontSize = updatedFontSize() + "px";
}
