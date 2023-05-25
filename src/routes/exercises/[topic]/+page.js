import { data } from '$lib/utils/data';
import unidecode from 'unidecode';

export function load({ params, fetch }) {
  const urlTopic = params.topic;

  const questionSubset = data.filter((x) => {
    const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
    return urlTopic === normalizedTopic;
  });
  console.log(questionSubset);
  return {
    data: questionSubset
  };
}
