function calculateAPRI() {
    var astLevel = parseFloat(document.getElementById('astLevel').value) || 0;
    var upperLimitAST = parseFloat(document.getElementById('upperLimitAST').value) || 1;
    var plateletCount = parseFloat(document.getElementById('plateletCount').value) || 1;

    var apri = (astLevel / upperLimitAST) * (100 / plateletCount);

    var resultElement = document.getElementById('result');
    resultElement.innerHTML = "APRI Score: " + apri.toFixed(2);
}

function resetForm() {
    document.getElementById('apriForm').reset();
    document.getElementById('result').innerHTML = "";
    document.getElementById('interpretation').innerHTML = "";
}

function showInterpretation() {
    var interpretationElement = document.getElementById('interpretation');
    interpretationElement.innerHTML = "";

    var apri = parseFloat(document.getElementById('result').innerText.replace("APRI Score: ", ""));
    
    var interpretationEn = document.createElement('div');
    interpretationEn.className = 'en';
    var interpretationFr = document.createElement('div');
    interpretationFr.className = 'fr';

    if (apri < 0.5) {
        interpretationEn.innerHTML = "Interpretation (En): Low Fibrosis Risk (F0-F1) - Indicates minimal or no fibrosis.";
        interpretationFr.innerHTML = "Interprétation (Fr) : Risque de fibrose faible (F0-F1) - Indique une fibrose minimale ou absente.";
    } else if (apri >= 0.5 && apri <= 1.5) {
        interpretationEn.innerHTML = "Interpretation (En): Intermediate Fibrosis Risk (F2-F3) - Suggests moderate to significant fibrosis.";
        interpretationFr.innerHTML = "Interprétation (Fr) : Risque de fibrose intermédiaire (F2-F3) - Suggère une fibrose modérée à significative.";
    } else {
        interpretationEn.innerHTML = "Interpretation (En): Advanced Fibrosis or Cirrhosis (F4) - Indicates advanced fibrosis or cirrhosis.";
        interpretationFr.innerHTML = "Interprétation (Fr) : Fibrose avancée ou cirrhose (F4) - Indique une fibrose avancée ou une cirrhose.";
    }

    interpretationElement.appendChild(interpretationEn);
    interpretationElement.appendChild(interpretationFr);
}
