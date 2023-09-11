const input = document.getElementById('input');
const search_btn = document.getElementById('search_btn');
const apiKey = '';
const not_found = document.querySelector('.not_found');
const definition_box = document.querySelector('.def');
const audio_box = documnet.querySelector('.audio');



search_btn.addEventListener('click', e => {
  e.preventDefault();

  const word = input.value;
  if (word === "") {
    alert('Please type a word');
    return;
  }

  dataGet(word);
});

async function dataGet(word) {
  const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}?key=${apiKey}`);
  const data = await response.json();
  console.log(data);

  if (!data.length) {
    not_found.innerText = 'No result found';
    return;
  }

  if (typeof data[0] === 'string') { //if results is suggestions
    let heading = document.createElement('h3');
    heading.innerText = 'Did you mean?';
    not_found.appendChild(heading);

    data.forEach(element => {
      let suggestion = document.createElement('span');
      suggestion.classList.add('suggested');
      suggestion.innerText = element;
      not_found.appendChild(suggestion);
    })
    return;
  }
  let definition = data[0].shortdef[0]; //find the result
  definition_box.innerText = definition;

  let sound_name = [0].copyWithin.prs[0].sound.audio;
  if (sound_name) {
    soundRender(sound_name);
  }
}

function soundRender(sound_name) {
  let sub_folder = sound_name.charAt(0);
  let sound_src = ''
}