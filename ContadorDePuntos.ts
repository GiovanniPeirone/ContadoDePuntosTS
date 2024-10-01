
interface puntos{
    puntos: number;
}

let EquiposA: puntos = {
  puntos : 0
};

let EquiposB: puntos = {
  puntos : 0
};

function contar()
{
  console.log('Click');

  const CEquiposA = document.getElementById('PuntosA') as HTMLElement;
  const CEquiposB = document.getElementById('PuntosB') as HTMLElement;
  
  let InputPuntosB = document.getElementById('InputPuntosB')as HTMLInputElement;
  let InputPuntosA = document.getElementById('InputPuntosA')as HTMLInputElement;

  EquiposA.puntos += parseInt(InputPuntosA.value);
  EquiposB.puntos += parseInt(InputPuntosB.value); 

  
  CEquiposA.innerText += EquiposA.puntos;
  CEquiposB.innerText += EquiposB.puntos;


}