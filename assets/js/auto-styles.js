// tables
$("table").addClass("table");

// sequence diagrams

//<script src="http://bramp.github.io/js-sequence-diagrams/js/underscore-min.js"></script>
//<script src="http://bramp.github.io/js-sequence-diagrams/js/raphael-min.js"></script>
//<script src="http://bramp.github.io/js-sequence-diagrams/js/sequence-diagram-min.js"></script>
//<script src="http://adrai.github.io/flowchart.js/flowchart-latest.js"></script>

function drawDiagrams() {
  //alert(document.body.innerHTML);
  var sequences = document.getElementsByClassName('language-sequence');
  //alert(sequences.length);
  for (var i = 0; i < sequences.length; i++) {
    var innerHtml = sequences[i].innerHTML;
    //alert(innerHtml);
    var statement = innerHtml.replace(/\&gt\;/mg, ">")
    //alert(statement);
    var diagram = Diagram.parse(statement);
    sequences[i].innerHTML = '';
    diagram.drawSVG(
      sequences[i],
      {
        theme: 'simple'
      }
    );
    $('.language-sequence').parent().addClass("pre-language-sequence")
  }

  var flows = document.getElementsByClassName('language-flow');
  //alert(flows.length);
  for (var i = 0; i < flows.length; i++) {
    var innerHtml = flows[i].innerHTML;
    //alert(innerHtml);
    var statement = innerHtml.replace(/\&gt\;/mg, ">")
    //alert(statement);
    var diagram = flowchart.parse(statement);
    flows[i].innerHTML = '';
    diagram.drawSVG(
      flows[i]
    );
 }
}

if(window.attachEvent){
  window.attachEvent("load",  drawDiagrams);
}
if(window.addEventListener){
  window.addEventListener("previewUpdated",  drawDiagrams);
  window.addEventListener("load",  drawDiagrams);
}


