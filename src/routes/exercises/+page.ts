import { data } from '$lib/utils/data';
import { respuestas } from '../../stores';

export function load({ params }) {
  // const bloques = [...new Set(data.map((x) => x.bloque))];
  // const temas = [...new Set(data.map((x) => x.tema))];
  //
  // const groupedBlocks = bloques.map((b) => data.filter((d) => d.bloque === b));
  // const groupedTopics = temas.map((t) => data.filter((d) => d.tema === t));
  // console.log(groupedTopics);
  // let auxTopics = {};
  //
  // temas.map((t, i) => {
  //   auxTopics[t] = groupedTopics[i].length;
  // });
  // console.log(auxTopics);
  //
  // const topicLengths = groupedTopics.map((x) => x.length);
  //
  // let parsedTopics = {};
  // bloques.map((b, i) => {
  //   parsedTopics[b] = groupedBlocks[i];
  // });
  //
  const processedData = {};

  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    console.log(d.bloque, d.tema);

    if (processedData[d.bloque] === undefined) {
      processedData[d.bloque] = {};
    }
    if (processedData[d.bloque][d.tema] === undefined) {
      processedData[d.bloque][d.tema] = 1;
    } else {
      processedData[d.bloque][d.tema] += 1;
    }
  }
  console.log(processedData);
  respuestas.set({});

  return processedData;
}
