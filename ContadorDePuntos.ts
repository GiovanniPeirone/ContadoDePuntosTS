
interface puntos{
    puntos: number;
}

window.onload = () => {

    let EquiposA: puntos = {
        puntos : 10
    };
    
    let EquiposB: puntos = {
        puntos : 10
    };
    
    // Obtener el elemento por su ID
    const CEquiposA = document.getElementById('EquipoA');
    const CEquiposB = document.getElementById('EquipoB');
  
    let InputPuntosB = document.getElementById('InputPuntosB')as HTMLInputElement;
    let InputPuntosA = document.getElementById('InputPuntosA')as HTMLInputElement;

    const botonConvertir = document.getElementById('btnConvertir');

    if (botonConvertir &&  InputPuntosB &&  InputPuntosA && CEquiposA && CEquiposB) {
        botonConvertir.addEventListener('click', () => {
          // Obtener el valor del input (siempre es un string)
          const valorInput: string = inputElement.value;
    
          // Convertir el valor a número
          const numero: number = parseInt(valorInput, 10); // O puedes usar Number(valorInput) o +valorInput
    
          // Verificar si la conversión fue exitosa
          if (isNaN(numero)) {
            CEquiposA.textContent = "Por favor, ingresa un número válido.";
            CEquiposA.textContent = "Por favor, ingresa un número válido.";
          } else {
            CEquiposA.textContent = `${numero}`;
            CEquiposB.textContent = `${numero}`;
          }
        });
      }
    
};


