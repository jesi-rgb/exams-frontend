import { data } from '../../../../stores';
import { get } from 'svelte/store';
import { error } from '@sveltejs/kit';
import { slugify } from 'transliteration';

export function load({ params }) {
  const getDataStore = get(data);
  const urlTopic = params.topic;

  if (getDataStore) {
    const questionSubset = getDataStore.filter((x) => {
      return urlTopic === slugify(x.tema);
    });

    return {
      topicUrl: params.topic,
      questions: questionSubset
    };
  } else {
    throw error(500, 'Could not load the data in results');
  }
}
