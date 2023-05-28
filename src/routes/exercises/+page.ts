// import { data } from '$lib/utils/data';
import { createClient } from '@sanity/client';
import { respuestas, lastFetchedData, data } from '../../stores';
import { get } from 'svelte/store';

const DAY = 1 * 24 * 60 * 60 * 1000;
const MINUTE = 60 * 1000;

export async function load({ params }) {
  if (get(lastFetchedData) === undefined) {
    lastFetchedData.set(new Date().getTime());
  }
  const isDataOlderThanDay = Date.now() - get(lastFetchedData) > DAY;

  if (get(data) === undefined || isDataOlderThanDay) {
    const client = createClient({
      projectId: 'ljxmu3sa',
      dataset: 'production',
      apiVersion: '2021-10-21',
      useCdn: true
    });

    console.log('Making api call');

    const fetchDataFromCms = await client.fetch(
      '*[_type == "subtipo1" || _type == "subtipo2" || _type == "subtipo3"]'
    );

    data.set(fetchDataFromCms);
    lastFetchedData.set(new Date().getTime());
  } else {
    console.log('Using cached data. Last fetched:', new Date(get(lastFetchedData)));
  }

  const processedData = {};
  const getDataStore = get(data);

  for (let i = 0; i < getDataStore.length; i++) {
    const d = getDataStore[i];

    if (processedData[d.bloque] === undefined) {
      processedData[d.bloque] = {};
    }
    if (processedData[d.bloque][d.tema] === undefined) {
      processedData[d.bloque][d.tema] = 1;
    } else {
      processedData[d.bloque][d.tema] += 1;
    }
  }
  respuestas.set({});

  return processedData;
}
