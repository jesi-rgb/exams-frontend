import { error } from '@sveltejs/kit';
import { data } from '../../../../stores';
import { get } from 'svelte/store';
import { slugify } from 'transliteration';

export async function load({ params, fetch }) {
  // this data should only come from a store, not api calls
  // otherwise we fucking die

  const getDataStore = get(data);
  const urlTopic = params.topic;

  if (getDataStore) {
    const questionSubset = getDataStore.filter((x) => {
      return slugify(x.tema) === urlTopic;
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
    throw error(500, 'Could not load the data in page.ts');
  }
}
