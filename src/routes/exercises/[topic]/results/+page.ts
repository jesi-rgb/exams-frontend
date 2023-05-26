import { data } from '$lib/utils/data';
import unidecode from 'unidecode';

export function load({ params }) {
  const urlTopic = params.topic;

  const questionSubset = data.filter((x) => {
    const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
    return urlTopic === normalizedTopic;
  });
  const totalQuestions = questionSubset.length;
  return {
    topicUrl: params.topic,
    questions: questionSubset
  };
}
