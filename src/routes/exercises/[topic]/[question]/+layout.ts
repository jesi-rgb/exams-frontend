import { error } from '@sveltejs/kit';
import unidecode from 'unidecode';
import { data } from '../../../../stores';
import { get } from 'svelte/store';
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
  const getDataStore = get(data);

  const urlTopic = params.topic;

  if (getDataStore) {
    console.log('here layout ts');
    const questionSubset = getDataStore.filter((x) => {
      const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
      return urlTopic === normalizedTopic;
    });
    const totalQuestions = questionSubset.length;

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
  } else {
    throw error(500, 'Could not load the data in layout.ts ' + JSON.stringify(get(data)));
  }
}
