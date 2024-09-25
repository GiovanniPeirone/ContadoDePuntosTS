console.log("");


interface puntos{
    puntos: number;
}

let EquiposA: puntos = {
    puntos : 10
};

let EquiposB: puntos = {
    puntos : 10
};


window.onload = () => {
    // Obtener el elemento por su ID
    const CEquiposA = document.getElementById('EquipoA');
    const CEquiposB = document.getElementById('EquipoB');
  
    // Asegúrate de que el elemento existe
    if (CEquiposA && CEquiposB) {
      CEquiposA.textContent += EquiposA.puntos.toString();
      CEquiposB.textContent += EquiposB.puntos.toString();
    }
};


