interface Question {
  bloque: string;
  tema: string;
  enunciado: string;
}

// formato con un término específico a analizar
// entre n opciones dadas
export interface QuestionType1 extends Question {
  termino: string;
  oraciones: Array<string>;
  opciones: Array<string>;
}

// respuesta abierta para escribir libremente
export interface QuestionType2 extends Question {
  respuesta: string;
}
