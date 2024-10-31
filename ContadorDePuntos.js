var EquipoA = {
    punto: 0
};
var EquipoB = {
    punto: 0
};
var HandBall_Input_Equipo_A = document.getElementById('HandBall_Input_Equipo_A');
var Resistencia_Input_A = document.getElementById('Resistencia_Input_A');
var Ajederz_Input_A = document.getElementById('Ajederz_Input_A');
var HandBall_Input_Equipo_B = document.getElementById('HandBall_Input_Equipo_B');
var Resistencia_Input_B = document.getElementById('Resistencia_Input_B');
var Ajederz_Input_B = document.getElementById('Ajederz_Input_B');
var OutputPuntosA = document.getElementById('PuntosA');
var OutputPuntosB = document.getElementById('PuntosB');
var EquipoGanador = document.getElementById('EquipoGanador');
function contar() {
    var Valor_A_Ingresado_HandBall = parseInt(HandBall_Input_Equipo_A.value, 10) || 0;
    var Valor_A_Ingresado_Rsistencia = parseInt(Resistencia_Input_A.value, 10) || 0;
    var Valor_A_Ingresado_Ajedrez = parseInt(Ajederz_Input_A.value, 10) || 0;
    var Valor_B_Ingresado_HandBall = parseInt(HandBall_Input_Equipo_B.value, 10) || 0;
    var Valor_B_Ingresado_Rsistencia = parseInt(Resistencia_Input_B.value, 10) || 0;
    var Valor_B_Ingresado_Ajedrez = parseInt(Ajederz_Input_B.value, 10) || 0;
    EquipoA.punto += Valor_A_Ingresado_HandBall + Valor_A_Ingresado_Rsistencia + Valor_A_Ingresado_Ajedrez;
    EquipoB.punto += Valor_B_Ingresado_HandBall + Valor_B_Ingresado_Rsistencia + Valor_B_Ingresado_Ajedrez;
    OutputPuntosA.innerText += EquipoA.punto.toString();
    OutputPuntosB.innerText += EquipoB.punto.toString();
    if (EquipoA.punto > EquipoB.punto) {
        EquipoGanador.innerText += 'EquipoA';
    }
    if (EquipoA.punto < EquipoB.punto) {
        EquipoGanador.innerText += 'EquipoB';
    }
    if (EquipoA.punto == EquipoB.punto) {
        EquipoGanador.innerHTML += 'Empate';
    }
}
