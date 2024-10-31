
interface puntos{
  punto : number;
}

let EquipoA : puntos = {
  punto : 0
}


let EquipoB : puntos = {
  punto: 0
}


const HandBall_Input_Equipo_A = document.getElementById('HandBall_Input_Equipo_A') as HTMLInputElement;
const Resistencia_Input_A = document.getElementById('Resistencia_Input_A') as HTMLInputElement;
const Ajederz_Input_A = document.getElementById('Ajederz_Input_A') as HTMLInputElement;

const HandBall_Input_Equipo_B = document.getElementById('HandBall_Input_Equipo_B') as HTMLInputElement;
const Resistencia_Input_B = document.getElementById('Resistencia_Input_B') as HTMLInputElement;
const Ajederz_Input_B = document.getElementById('Ajederz_Input_B') as HTMLInputElement;

const OutputPuntosA = document.getElementById('PuntosA') as HTMLElement;
const OutputPuntosB = document.getElementById('PuntosB') as HTMLElement;

const EquipoGanador = document.getElementById('EquipoGanador') as HTMLElement;



function contar(): void {
  
  let Valor_A_Ingresado_HandBall : number = parseInt(HandBall_Input_Equipo_A.value, 10) || 0;
  let Valor_A_Ingresado_Rsistencia : number = parseInt(Resistencia_Input_A.value, 10) || 0;
  let Valor_A_Ingresado_Ajedrez : number = parseInt(Ajederz_Input_A.value, 10) || 0;

  let Valor_B_Ingresado_HandBall : number = parseInt(HandBall_Input_Equipo_B.value, 10) || 0;
  let Valor_B_Ingresado_Rsistencia : number = parseInt(Resistencia_Input_B.value, 10) || 0;
  let Valor_B_Ingresado_Ajedrez : number = parseInt(Ajederz_Input_B.value, 10) || 0;

  
  EquipoA.punto += Valor_A_Ingresado_HandBall + Valor_A_Ingresado_Rsistencia + Valor_A_Ingresado_Ajedrez;
  EquipoB.punto += Valor_B_Ingresado_HandBall + Valor_B_Ingresado_Rsistencia +  Valor_B_Ingresado_Ajedrez;

  OutputPuntosA.innerText += EquipoA.punto.toString();
  OutputPuntosB.innerText += EquipoB.punto.toString();

  if (EquipoA.punto > EquipoB.punto){
    EquipoGanador.innerText += 'EquipoA';
  }

  
  if (EquipoA.punto < EquipoB.punto){
    EquipoGanador.innerText += 'EquipoB';
  }

  if (EquipoA.punto == EquipoB.punto){
    EquipoGanador.innerHTML += 'Empate';
  }
}