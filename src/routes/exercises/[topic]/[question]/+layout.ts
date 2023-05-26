import { error } from '@sveltejs/kit';
import unidecode from 'unidecode';
import { data } from '$lib/utils/data';
// in params, we have the index of the question:
// params.slug = 1 -> /exercises/1
//
// so, we get the params.slug and access the object with all
// the questions and render this particular question's content
//
// same thing will be done in page.ts
// in fact, here we only load the index of the question to show
// "Ejercicio N", actual content is rendered in page.ts
//
// test change

export function load({ params }) {
  const urlTopic = params.topic;

  const questionSubset = data.filter((x) => {
    const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
    return urlTopic === normalizedTopic;
  });
  const totalQuestions = questionSubset.length;
  console.log(questionSubset, 'layout');

  if (typeof parseInt(params.question) === 'number') {
    //the slug contains a number

    const question = questionSubset[parseInt(params.question) - 1];
    return {
      topicUrl: urlTopic,
      number: parseInt(params.question),
      total: totalQuestions,
      question: question
    };
  }

  throw error('404', 'Not found');
}
