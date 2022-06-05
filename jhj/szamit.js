
 function Szamit() {
    let aOszlop = document.getElementById('elsomatrixoszlop').value;
    let aSor = document.getElementById('elsomatrixsor').value;
    let bSor = document.getElementById('masodikmatrixsor').value;
    let bOszlop = document.getElementById('masodikmatrixoszlop').value;
    let test = 1;
    var i, j, k;
    if (aOszlop != bSor) {
        alert("AZ 'A' mátrix oszlopainak száma egyezzen meg a 'B' oszlop soraival ")
    } else {

        var arr1 = new Array(aSor);
        for (var i = 0; i < aSor; i++) {
            arr1[i] = new Array(aOszlop);
        }
        for (let i = 0; i < aSor; i++) {
            for (let j = 0; j < aOszlop; j++) {
                arr1[i][j] = Math.round(Math.random()*10) + Math.round(Math.random()*10);
            }
        }

        var arr2 = new Array(bSor);
        for (var i = 0; i < bSor; i++) {
            arr2[i] = new Array(bOszlop);
        }
        for (let i = 0; i < bSor; i++) {
            for (let j = 0; j < bOszlop; j++) {
                arr2[i][j] =      Math.round(Math.random()*10) + Math.round(Math.random()*10);
            }
        }

        var arr3 = new Array(aSor);
        for (var i = 0; i < aSor; i++) {
            arr3[i] = new Array(bOszlop);
          //  document.write("teszt ",i,"  <br>");
        }
    

    document.write("Matrix A (", aSor, "x", aOszlop, "):<br>");
    document.write("<table style='background-color: black;'>");
    for (i = 0; i < aSor; i++) {
        document.write("<tr  style='background-color: black;'>");
        for (j = 0; j < aOszlop; j++)
        document.write( "<td style='width: 40px; background-color: aquamarine; color: black;text-align: center;'>"+arr1[i][j]+"</td>");
        document.write("</tr>");
    }
    document.write("</table>");
    document.write("Matrix B (", bSor, "x", bOszlop, "):<br>");
    document.write("<table style='background-color: black;'>");
    for (i = 0; i < bSor; i++) {
        document.write("<tr>");
        for (j = 0; j < bOszlop; j++){
            document.write( "<td style='width: 40px; background-color: #d07d7d ; color: black;text-align: center;'>"+arr2[i][j]+"</td>");}
             document.write("</tr>");
    }
    document.write("</table>");
    document.write("Megoldás")
    document.write("<table style='background-color: black;'>");
    for (i = 0; i < aSor; i++) {
        for (j = 0; j < bOszlop; j++) {
            arr3[i][j] = 0;
               for(k=0; k < bSor; k++){
                   arr3[i][j] += arr1[i][k]*arr2[k][j];
               }  
    }}
    for (i = 0; i <  aSor; i++) {
        document.write("<tr  style='border: 2px black solid;'>");
        for (j = 0; j < bOszlop; j++){
            document.write( "<td style='width: 40px; background-color: #d07d7d ; color: black;text-align: center;'>"+arr3[i][j]+"</td>");
            }
            document.write("</tr>");
    }
    document.write("</table>");
    const matrixEredmeny = arr3;
    document.getElementById("id").innerHTML = matrixEredmeny;
}}