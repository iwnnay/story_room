const locations = [];
locations.push({
  name: 'demo',
  startRoom: 'mystery',
  rooms: [
    {
      id: 'mystery',
      entryPoints: [{ x: 25, y: 0, start: true }],
      coordinate: [24, 0],
      dimensions: [2, 2, 3],
      describe: 'You\'re in a room... four walls a ceiling and floor made of concrete slabs. It\'s warm and the air is heavy. If you didn\'t know better you\'d say this is your tomb... but do you know better?',
      items: [
        {
          short: 'box',
          type: 'container',
          describe: `A wooden box that is smooth to the touch,
          crafted and milled with perfection. On one side there is a tiny metal
          button`,
          actions: [
            { act: 'focus>items', syns: ['open', 'press', 'pry'], describe: 'You press the tiny metal button. The top of the box opens enough for a tiny gap for your finger to slip inside. You pry open the top to see the boxes contents' },
            { act: 'delete.focus>items', syns: ['smash', 'throw', 'crack'], describe: 'You lift the box high above your head and shatter the box on the ground. The box itself splitters around the room into a million different pieces. The contents are strewn around the room, but you\'re able to gather them all back up in your hands' },
          ],
          items: [
            { extends: 'GoldCoin', value: '1' },
            'Pencil',
            {
              short: 'necklace',
              type: 'armor>neck.key',
              describe: 'A silver chain with large silver heart medallion',
              stats: { movable: true, weight: '0.1', measurements: '1x1x1' },
            },
          ],
          stats: { movable: true, weight: '1', measurements: '3x3x3' },
        },
      ],
    },
  ],
  gridLocation: 0,
  area: [1, 1],
});

export default locations;