// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  // Parte inicial poética - voz entra rápido (~0.5-2s real, ajustado a 0.1 para "inmediato")
  { text: "Ella es quien calma las olas,", time: 0.1 },
  { text: "el viento, la brisa y mi tempestad", time: 3.5 },
  { text: "(Mi tempestad)", time: 6.2 },

  { text: "Ahogado en toda su ternura", time: 8.5 },
  { text: "descubro lo que nunca pude mirar", time: 10.0 },

  { text: "La luna descansa con ella", time: 15.5 },
  { text: "mirando hasta donde ella puede llegar", time: 17.2 },

  { text: "Su nombre se escucha en los libros,", time: 21.5 },
  { text: "en tantas canciones, ¡qué envidia ella da!", time: 25.5 },

  { text: "Hermosa cual rosa", time: 29.8 },
  { text: "que adorna el jardín del Edén", time: 31.5 },
  { text: "(Jardín del Edén)", time: 33.0 },

  { text: "Y risueña cual niño", time: 35.2 },
  { text: "que empieza recién a querer", time: 36.9 },

  // ¡Ay, bonita! primera vez ~58-62s
  { text: "¡Ay, bonita!", time: 41.5 },
  { text: "Mi bonita", time: 45.9 },

  // Verso descriptivo - más rápido
  { text: "Su voz tranquiliza mi alma", time: 53.4 },
  { text: "y la de los demás", time: 55.5 },

  { text: "Su figura es perfecta", time: 58.2 },
  { text: "y causa envidia en las demás", time: 60.8 },
  { text: "(Las demás)", time: 63.5 },

  { text: "Su mirada congela", time: 64.5 },
  { text: "y no sabes cómo reaccionar", time: 65.9 },

  { text: "Pues abraza tu alma", time: 69.8 },
  { text: "y de eso no hay cómo escapar", time: 72.5 },

  { text: "Sus manos tan tibias sin faltos de suavidad", time: 75.8 },

  { text: "Después de conocerla,", time: 81.3 },
  { text: "imposible no amar", time: 83.5 },

  // Repeticiones finales + fade
  { text: "¡Ay, bonita!", time: 87.5 },
  { text: "Mi bonita", time: 91.7 },

  { text: "(¡Ay, qué bonita!)", time: 99.5 },
  { text: "¡Ay, bonita!", time: 106.1 },
  { text: "MI TATO<3", time: 114 }
];
function updateLyrics() {
  const currentTime = audio.currentTime;  // usa decimales directos
  // Encuentra la línea más reciente cuyo time <= currentTime
  let currentLine = null;
  for (let line of lyricsData) {
    if (currentTime >= line.time) {
      currentLine = line;
    } else {
      break;  // ya que está ordenado
    }
  }

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.opacity = 1;  // o agrega fade si quieres
    // Opcional: fade out al final de línea (ej. si sabes duración aprox por línea ~5s)
    // const timeInLine = currentTime - currentLine.time;
    // if (timeInLine > 4) lyrics.style.opacity = Math.max(0, 1 - (timeInLine - 4)/1);
  } else {
    lyrics.innerHTML = "";
    lyrics.style.opacity = 0;
  }
}

// Mejora intervalo a 200ms para más fluidez
setInterval(updateLyrics, 200);