// respuestas is a store value, but we already pass it
// unpacked in here
export function evaluation(questions, respuestas) {
  let evaluation = {};

  // questions is an array of objects
  for (let i = 0; i < questions.length; i++) {
    const userAnswerObject = respuestas[i + 1];

    const realAnswer = questions[i].respuesta;
    // console.log('************ EVALUATION.TS *****************');
    // console.log(i);
    // console.log(respuestas);
    // console.log(userAnswerObject, realAnswer);

    switch (questions[i]._type) {
      case 'subtipo1':
        const booleansT1: Array<boolean> = realAnswer.map((a: string, index: number) => {
          return { bool: a === userAnswerObject[index], answer: userAnswerObject[index] };
        });
        evaluation[i] = booleansT1;
        break;
      case 'subtipo2':
        const parsedRealAnswers = realAnswer.map((x: string) => x.split(';')).flat();
        const booleansT2 = parsedRealAnswers.map((x: string, i: number) => {
          return {
            bool: Object.values(userAnswerObject)[i] === x.trim(),
            answer: Object.values(userAnswerObject)[i]
          };
        });
        evaluation[i] = booleansT2;
        break;
      case 'subtipo3':
        evaluation[i] = userAnswerObject; // this should be a string
        break;
    }
  }
  return evaluation;
}
