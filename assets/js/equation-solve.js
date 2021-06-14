function equationSolve() {
    let aCoeff = Number(document.equationForm.aCoeff.value);
    let bCoeff = Number(document.equationForm.bCoeff.value);
    let cCoeff = Number(document.equationForm.cCoeff.value);
    let eqSolve = document.getElementById("eq-solve");

    if(aCoeff === 0 && bCoeff === 0 && cCoeff === 0) {
      alert("Внимание! Коэффициенты не заданы.");
    } else if(aCoeff === 0) {
        alert("Неправильно введён коэффициент a");
    } else {
        let d = Math.pow(bCoeff, 2) - 4*aCoeff*cCoeff;

        if ( d < 0 ) {
            string = "Пара комплексно-сопряженных корней:<br>x<sub>1</sub> = (";
            string += -bCoeff / ( 2*aCoeff );
            string += ", ";
            string += Math.sqrt( -d ) / ( 2*aCoeff );
            string += "),<br>x<sub>2</sub> = (";
            string += -bCoeff / ( 2*aCoeff);
            string += ", ";
            string += - Math.sqrt( -d ) / ( 2*aCoeff );
            string += ").";
          } else {
              if ( d === 0 ) {
                string = "Два одинаковых вещественных корня:<br>x<sub>1</sub> = x<sub>2</sub> = ";
                string += -bCoeff / ( 2*aCoeff );
                string += ".";
              } else {
                string = "Два различных вещественных корня:<br>x<sub>1</sub> = ";
                string += -bCoeff / ( 2*aCoeff ) - Math.sqrt( d ) / ( 2*aCoeff );
                string += ",<br>x<sub>2</sub> = ";
                string += -bCoeff / ( 2*aCoeff ) + Math.sqrt( d ) / ( 2*aCoeff );
                string += ".";
              }
          }
          eqSolve.innerHTML = string;
    }
  }