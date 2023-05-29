import { data } from '$lib/utils/data';
import { slugify } from 'transliteration';

export function load({ params, fetch }) {
  const urlTopic = params.topic;

  const questionSubset = data.filter((x) => {
    const normalizedTopic = slugify(x.tema);
    return urlTopic === normalizedTopic;
  });

  return {
    questions: questionSubset
  };
}
