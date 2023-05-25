import { error } from '@sveltejs/kit';
import unidecode from 'unidecode';
import { data } from '$lib/utils/data';

export async function load({ params, fetch }) {
  // this data should only come from a store, not api calls
  // otherwise we fucking die

  const urlTopic = params.topic;

  const questionSubset = data.filter((x) => {
    const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
    return urlTopic === normalizedTopic;
  });
  const totalQuestions = questionSubset.length;
  console.log(questionSubset);

  if (typeof parseInt(params.question) === 'number') {
    //the slug contains a number

    const question = questionSubset[parseInt(params.question) - 1];
    return { number: parseInt(params.question), total: totalQuestions, question: question };
  }

  throw error(404, 'Not found');
}
