const div = document.getElementById('container');

// ✅ Change (replace) the text of the element
div.textContent = 'Replacement text';

// ✅ Change (replace) the content with HTML
div.innerHTML = `<span style="background-color: lime">Replacement HTML</span>`;

// ✅ Append / Prepend text to the element
div.insertAdjacentText('beforeend', ' appended text');

// ✅ Append / Prepend HTML to the element
div.insertAdjacentHTML(
  'beforeend',
  `<span style="background-color: cyan"> appended HTML</code>`,
);