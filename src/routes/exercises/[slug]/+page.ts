import { error } from '@sveltejs/kit';

export async function load({ params, fetch }) {
  // this data should only come from a store, not api calls
  // otherwise we fucking die
  const data = [
    {
      opciones: ['conjunción', 'relativo'],
      tema: 'La oración simple',
      _rev: 'lOVSDg14NkfBz4eT3H0DuH',
      _type: 'subtipo1',
      _id: '0e8b1861-ef92-4923-8266-399fa4647f91',
      termino: 'la',
      _createdAt: '2023-05-19T10:19:45Z',
      enunciado:
        'En los siguientes ejemplos aparecen distintos tipos de la. Indique en el recuadro si la es un pronombre relativo o una conjunción',
      oraciones: ['La pegué con duda.', 'Juan la come.'],
      _updatedAt: '2023-05-19T10:23:42Z',
      bloque: 'Sintaxis'
    },
    {
      opciones: ['conjunción', 'relativo'],
      tema: 'El complemento directo',
      _rev: 'lOVSDg14NkfBz4eT3H0DuH',
      _type: 'subtipo1',
      _id: '0e8b1861-ef92-4923-8266-399fa4647f91',
      termino: 'yeah',
      _createdAt: '2023-05-19T10:19:45Z',
      enunciado:
        'En los siguientes ejemplos aparece algo como yeah. ¿Qué es? No lo sabremos jamás.',
      oraciones: ['Yeah perdonen kamekameha', 'Oooooo ma gaaa oh yeah'],
      _updatedAt: '2023-05-19T10:23:42Z',
      bloque: 'Sintaxis'
    },
    {
      opciones: ['conjunción', 'relativo'],
      tema: 'El sujeto',
      _createdAt: '2023-05-19T09:06:39Z',
      _rev: '4t244wtMwhcupO22uJbbAO',
      _type: 'subtipo1',
      oraciones: [
        'El chico que llegó tarde era mi hermano',
        'El hecho de que no te guste no legitima tu actuación.'
      ],
      bloque: 'Sintaxis',
      enunciado:
        'En los siguientes ejemplos aparecen distintos tipos de que. Indique en el recuadro si que es un pronombre relativo o una conjunción.',
      _id: '3d79a2ae-5097-4784-a114-d8b20576a989',
      termino: 'que',
      _updatedAt: '2023-05-19T09:06:39Z'
    }
  ];

  const totalQuestions = data.length;

  if (typeof parseInt(params.slug) === 'number') {
    //the slug contains a number

    const question = data[parseInt(params.slug) - 1];
    return { number: parseInt(params.slug), total: totalQuestions, question: question };
  }

  throw error(404, 'Not found');
}
