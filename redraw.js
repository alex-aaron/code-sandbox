const remaining = [
    'Fernweh',
    'Wanderlust',
    'Zweisamkeit',
    'Mutterseelenallein',
    'Abgrundanziehung',
    'Lebenskunstle',
    'Kuddelmuddel',
    'Schwarmerei',
    'Mauerbauertraurigkeit',
    'Freudentränen'
  ];

function redraw(words){
    const index = Math.floor(Math.random() * words.length);
    const word = words[index];
    return word;
}

console.log(redraw(remaining));