// respuestas is a store value, but we already pass it
// unpacked in here
export function evaluation(questions, respuestas) {
  let evaluation = {};

  // questions is an array of objects
  for (let i = 0; i < questions.length; i++) {
    const userAnswerObject = respuestas[i + 1];

    const realAnswer = questions[i].respuesta;

    switch (questions[i]._type) {
      case 'subtipo1':
        const booleans: Array<boolean> = realAnswer.map((a: string, index: number) => {
          return a === userAnswerObject[index];
        });
        evaluation[i] = booleans;
        break;
      case 'subtipo2':
        console.log('not defined');
        break;
      case 'subtipo3':
        evaluation[i] = userAnswerObject; // this should be a string
        break;
    }
  }
  return evaluation;
}
