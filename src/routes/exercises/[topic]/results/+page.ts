import unidecode from 'unidecode';
import { data } from '../../../../stores';
import { get } from 'svelte/store';

export function load({ params }) {
  const getDataStore = get(data);
  const urlTopic = params.topic;

  const questionSubset = getDataStore.filter((x) => {
    const normalizedTopic = unidecode(x.tema).toLowerCase().replaceAll(' ', '-');
    return urlTopic === normalizedTopic;
  });

  const totalQuestions = questionSubset.length;

  return {
    topicUrl: params.topic,
    questions: questionSubset
  };
}
