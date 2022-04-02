function preload() {
    classifier = ml5.imageClassifier('DoodleNet');
}

function setup() {
    canvas.mouseReleased(classifyCanvas);
}

function draw() { // Set stroke weight to 10 strokeWeight(13); // Set stroke color to black stroke(0); // If mouse is pressed, draw line between previous and current mouse positions if (mouseIsPressed) { line(pmouseX, pmouseY, mouseX, mouseY); } }
    function classifyCanvas() {
        classifier.classify(canvas, gotResult);
    }

    function gotResult(error, results) {
        if (error) {
            console.error(error);
        }
        console.log(results);
        drawn_sketch = results[0].label;
        document.getElementById('label').innerHTML = 'Your Sketch: ' + drawn_sketch;
        document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(results[0].confidence * 100) + '%';
    }
