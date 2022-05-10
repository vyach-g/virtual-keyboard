function renderPage() {
  const firstRow = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
    'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'];
  const secRow = ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft',
    'BracketRight', 'Backslash'];
  const thirdRow = ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon',
    'Quote', 'Enter'];
  const fourthRow = ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
    'Slash', 'ShiftRight'];
  const fifthRow = ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'Fn', 'ContextMenu', 'ControlRight'];
  const arrowUp = ['ArrowUp'];
  const arrows = ['ArrowLeft', 'ArrowDown', 'ArrowRight'];

  const container = document.createElement('div');
  container.classList.add('container');
  document.body.append(container);

  const h1 = document.createElement('h1');
  h1.textContent = 'Virtual Keyboard';
  container.append(h1);

  const textarea = document.createElement('textarea');
  container.append(textarea);

  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  container.append(keyboard);

  const keysArr = [firstRow, secRow, thirdRow, fourthRow, fifthRow, arrowUp, arrows];

  for (let i = 0; i < keysArr.length; i += 1) {
    const keyboardRow = document.createElement('div');
    keyboardRow.classList.add('keyboard-row');
    for (let j = 0; j < keysArr[i].length; j += 1) {
      const key = document.createElement('div');
      key.classList.add('key');
      key.dataset.code = keysArr[i][j];
      switch (keysArr[i][j]) {
        case 'Tab':
        case 'Backslash': {
          key.classList.add('key15');
          break;
        }
        case 'CapsLock': {
          key.classList.add('key175');
          break;
        }
        case 'Backspace': {
          key.classList.add('key20');
          break;
        }
        case 'Enter':
        case 'ShiftLeft': {
          key.classList.add('key250');
          break;
        }
        case 'ShiftRight': {
          key.classList.add('key295');
          break;
        }
        case 'ControlLeft':
        case 'MetaLeft':
        case 'AltLeft':
        case 'AltRight':
        case 'ContextMenu':
        case 'Fn':
        case 'ControlRight': {
          key.classList.add('key140');
          break;
        }
        case 'Space': {
          key.classList.add('key645');
          break;
        }
        default: {
          break;
        }
      }
      key.innerText = keysArr[i][j];
      keyboardRow.append(key);
    }
    keyboard.append(keyboardRow);
  }

  const tip = document.createElement('div');
  tip.classList.add('tip');
  tip.textContent = `Клавиатура Windows. Переключение языка: зажать LAlt + нажать LShift.
  Если найдете ошибки, пожалуйста, сообщите по контактам: TG: @attempttobebetter. Discord: Vyach#1703 или @vyach-g.
  Сылка на Pull Request: https://github.com/vyach-g/virtual-keyboard/pull/1`;
  container.append(tip);
}

const keyboardSet = {
  Backquote: {
    code: 'Backquote',
    en: {
      normal: '`',
      shift: '~',
    },
    ru: {
      normal: 'ё',
      shift: 'Ё',
    },
  },

  Digit1: {
    code: 'Digit1',
    en: {
      normal: '1',
      shift: '!',
    },
    ru: {
      normal: '1',
      shift: '!',
    },
  },

  Digit2: {
    code: 'Digit2',
    en: {
      normal: '2',
      shift: '@',
    },
    ru: {
      normal: '2',
      shift: '"',
    },
  },

  Digit3: {
    code: 'Digit3',
    en: {
      normal: '3',
      shift: '#',
    },
    ru: {
      normal: '3',
      shift: '№',
    },
  },

  Digit4: {
    code: 'Digit4',
    en: {
      normal: '4',
      shift: '$',
    },
    ru: {
      normal: '4',
      shift: ';',
    },
  },

  Digit5: {
    code: 'Digit5',
    en: {
      normal: '5',
      shift: '%',
    },
    ru: {
      normal: '5',
      shift: '%',
    },
  },

  Digit6: {
    code: 'Digit6',
    en: {
      normal: '6',
      shift: '^',
    },
    ru: {
      normal: '6',
      shift: ':',
    },
  },

  Digit7: {
    code: 'Digit7',
    en: {
      normal: '7',
      shift: '&',
    },
    ru: {
      normal: '7',
      shift: '?',
    },
  },

  Digit8: {
    code: 'Digit8',
    en: {
      normal: '8',
      shift: '*',
    },
    ru: {
      normal: '8',
      shift: '*',
    },
  },

  Digit9: {
    code: 'Digit9',
    en: {
      normal: '9',
      shift: '(',
    },
    ru: {
      normal: '9',
      shift: '(',
    },
  },

  Digit0: {
    code: 'Digit0',
    en: {
      normal: '0',
      shift: ')',
    },
    ru: {
      normal: '0',
      shift: ')',
    },
  },

  Minus: {
    code: 'Minus',
    en: {
      normal: '-',
      shift: '_',
    },
    ru: {
      normal: '-',
      shift: '_',
    },
  },

  Equal: {
    code: 'Equal',
    en: {
      normal: '=',
      shift: '+',
    },
    ru: {
      normal: '=',
      shift: '+',
    },
  },

  KeyQ: {
    code: 'KeyQ',
    en: {
      normal: 'q',
      shift: 'Q',
    },
    ru: {
      normal: 'й',
      shift: 'Й',
    },
  },

  KeyW: {
    code: 'KeyW',
    en: {
      normal: 'w',
      shift: 'W',
    },
    ru: {
      normal: 'ц',
      shift: 'Ц',
    },
  },

  KeyE: {
    code: 'KeyE',
    en: {
      normal: 'e',
      shift: 'E',
    },
    ru: {
      normal: 'у',
      shift: 'У',
    },
  },

  KeyR: {
    code: 'KeyR',
    en: {
      normal: 'r',
      shift: 'R',
    },
    ru: {
      normal: 'к',
      shift: 'К',
    },
  },

  KeyT: {
    code: 'KeyT',
    en: {
      normal: 't',
      shift: 'T',
    },
    ru: {
      normal: 'е',
      shift: 'Е',
    },
  },

  KeyY: {
    code: 'KeyY',
    en: {
      normal: 'y',
      shift: 'Y',
    },
    ru: {
      normal: 'н',
      shift: 'Н',
    },
  },

  KeyU: {
    code: 'KeyU',
    en: {
      normal: 'u',
      shift: 'U',
    },
    ru: {
      normal: 'г',
      shift: 'Г',
    },
  },

  KeyI: {
    code: 'KeyI',
    en: {
      normal: 'i',
      shift: 'I',
    },
    ru: {
      normal: 'ш',
      shift: 'Ш',
    },
  },

  KeyO: {
    code: 'KeyO',
    en: {
      normal: 'o',
      shift: 'O',
    },
    ru: {
      normal: 'щ',
      shift: 'Щ',
    },
  },

  KeyP: {
    code: 'KeyP',
    en: {
      normal: 'p',
      shift: 'P',
    },
    ru: {
      normal: 'з',
      shift: 'З',
    },
  },

  BracketLeft: {
    code: 'BracketLeft',
    en: {
      normal: '[',
      shift: '{',
    },
    ru: {
      normal: 'х',
      shift: 'Х',
    },
  },

  BracketRight: {
    code: 'BracketRight',
    en: {
      normal: ']',
      shift: '}',
    },
    ru: {
      normal: 'ъ',
      shift: 'Ъ',
    },
  },

  Backslash: {
    code: 'Backslash',
    en: {
      normal: '\\',
      shift: '|',
    },
    ru: {
      normal: '\\',
      shift: '/',
    },
  },

  KeyA: {
    code: 'KeyA',
    en: {
      normal: 'a',
      shift: 'A',
    },
    ru: {
      normal: 'ф',
      shift: 'Ф',
    },
  },

  KeyS: {
    code: 'KeyS',
    en: {
      normal: 's',
      shift: 'S',
    },
    ru: {
      normal: 'ы',
      shift: 'Ы',
    },
  },

  KeyD: {
    code: 'KeyD',
    en: {
      normal: 'd',
      shift: 'D',
    },
    ru: {
      normal: 'в',
      shift: 'В',
    },
  },

  KeyF: {
    code: 'KeyF',
    en: {
      normal: 'f',
      shift: 'F',
    },
    ru: {
      normal: 'а',
      shift: 'А',
    },
  },

  KeyG: {
    code: 'KeyG',
    en: {
      normal: 'g',
      shift: 'G',
    },
    ru: {
      normal: 'п',
      shift: 'П',
    },
  },

  KeyH: {
    code: 'KeyH',
    en: {
      normal: 'h',
      shift: 'H',
    },
    ru: {
      normal: 'р',
      shift: 'Р',
    },
  },

  KeyJ: {
    code: 'KeyJ',
    en: {
      normal: 'j',
      shift: 'J',
    },
    ru: {
      normal: 'о',
      shift: 'О',
    },
  },

  KeyK: {
    code: 'KeyK',
    en: {
      normal: 'k',
      shift: 'K',
    },
    ru: {
      normal: 'л',
      shift: 'Л',
    },
  },

  KeyL: {
    code: 'KeyL',
    en: {
      normal: 'l',
      shift: 'L',
    },
    ru: {
      normal: 'д',
      shift: 'Д',
    },
  },

  Semicolon: {
    code: 'Semicolon',
    en: {
      normal: ';',
      shift: ':',
    },
    ru: {
      normal: 'ж',
      shift: 'Ж',
    },
  },

  Quote: {
    code: 'Quotw',
    en: {
      normal: '\'',
      shift: '"',
    },
    ru: {
      normal: 'э',
      shift: 'Э',
    },
  },

  KeyZ: {
    code: 'KeyZ',
    en: {
      normal: 'z',
      shift: 'Z',
    },
    ru: {
      normal: 'я',
      shift: 'Я',
    },
  },

  KeyX: {
    code: 'KeyX',
    en: {
      normal: 'x',
      shift: 'X',
    },
    ru: {
      normal: 'ч',
      shift: 'Ч',
    },
  },

  KeyC: {
    code: 'KeyC',
    en: {
      normal: 'c',
      shift: 'C',
    },
    ru: {
      normal: 'с',
      shift: 'С',
    },
  },

  KeyV: {
    code: 'KeyV',
    en: {
      normal: 'v',
      shift: 'V',
    },
    ru: {
      normal: 'м',
      shift: 'М',
    },
  },

  KeyB: {
    code: 'KeyB',
    en: {
      normal: 'b',
      shift: 'B',
    },
    ru: {
      normal: 'и',
      shift: 'И',
    },
  },

  KeyN: {
    code: 'KeyN',
    en: {
      normal: 'n',
      shift: 'N',
    },
    ru: {
      normal: 'т',
      shift: 'Т',
    },
  },

  KeyM: {
    code: 'KeyM',
    en: {
      normal: 'm',
      shift: 'M',
    },
    ru: {
      normal: 'ь',
      shift: 'Ь',
    },
  },

  Comma: {
    code: 'Comma',
    en: {
      normal: ',',
      shift: '<',
    },
    ru: {
      normal: 'б',
      shift: 'Б',
    },
  },

  Period: {
    code: 'Period',
    en: {
      normal: '.',
      shift: '>',
    },
    ru: {
      normal: 'ю',
      shift: 'Ю',
    },
  },

  Slash: {
    code: 'Slash',
    en: {
      normal: '/',
      shift: '?',
    },
    ru: {
      normal: '.',
      shift: ',',
    },
  },

  Space: {
    code: 'Space',
    en: {
      normal: ' ',
      shift: ' ',
    },
    ru: {
      normal: ' ',
      shift: ' ',
    },
  },

  Backspace: {
    code: 'Backspace',
    en: {
      normal: 'Backspace',
      shift: 'Backspace',
    },
    ru: {
      normal: 'Backspace',
      shift: 'Backspace',
    },
  },

  Enter: {
    code: 'Enter',
    en: {
      normal: 'Enter',
      shift: 'Enter',
    },
    ru: {
      normal: 'Enter',
      shift: 'Enter',
    },
  },

  ShiftRight: {
    code: 'ShiftRight',
    en: {
      normal: 'Shift',
      shift: 'Shift',
    },
    ru: {
      normal: 'Shift',
      shift: 'Shift',
    },
  },

  ShiftLeft: {
    code: 'ShiftLeft',
    en: {
      normal: 'Shift',
      shift: 'Shift',
    },
    ru: {
      normal: 'Shift',
      shift: 'Shift',
    },
  },

  ControlRight: {
    code: 'ControlRight',
    en: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
    ru: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
  },

  ControlLeft: {
    code: 'ControlLeft',
    en: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
    ru: {
      normal: 'Ctrl',
      shift: 'Ctrl',
    },
  },

  AltRight: {
    code: 'AltRight',
    en: {
      normal: 'Alt',
      shift: 'Alt',
    },
    ru: {
      normal: 'Alt',
      shift: 'Alt',
    },
  },

  AltLeft: {
    code: 'AltLeft',
    en: {
      normal: 'Alt',
      shift: 'Alt',
    },
    ru: {
      normal: 'Alt',
      shift: 'Alt',
    },
  },

  ContextMenu: {
    code: 'ContextMenu',
    en: {
      normal: 'Context',
      shift: 'Context',
    },
    ru: {
      normal: 'Context',
      shift: 'Context',
    },
  },

  Fn: {
    code: 'Fn',
    en: {
      normal: 'Fn',
      shift: 'Fn',
    },
    ru: {
      normal: 'Fn',
      shift: 'Fn',
    },
  },

  MetaLeft: {
    code: 'MetaLeft',
    en: {
      normal: 'Win',
      shift: 'Win',
    },
    ru: {
      normal: 'Win',
      shift: 'Win',
    },
  },

  CapsLock: {
    code: 'CapsLock',
    en: {
      normal: 'CapsLock',
      shift: 'CapsLock',
    },
    ru: {
      normal: 'CapsLock',
      shift: 'CapsLock',
    },
  },

  Tab: {
    code: 'Tab',
    en: {
      normal: 'Tab',
      shift: 'Tab',
    },
    ru: {
      normal: 'Tab',
      shift: 'Tab',
    },
  },

  ArrowUp: {
    code: 'ArrowUp',
    en: {
      normal: '↑',
      shift: '↑',
    },
    ru: {
      normal: '↑',
      shift: '↑',
    },
  },

  ArrowDown: {
    code: 'ArrowDown',
    en: {
      normal: '↓',
      shift: '↓',
    },
    ru: {
      normal: '↓',
      shift: '↓',
    },
  },

  ArrowLeft: {
    code: 'ArrowLeft',
    en: {
      normal: '←',
      shift: '←',
    },
    ru: {
      normal: '←',
      shift: '←',
    },
  },

  ArrowRight: {
    code: 'ArrowLeft',
    en: {
      normal: '→',
      shift: '→',
    },
    ru: {
      normal: '→',
      shift: '→',
    },
  },
};

// Main code
renderPage();

let lang = localStorage.getItem('lang') || 'en';
let mod = 'normal';
let isCapsLock = false;
let isShift = false;
let isAlt = false;
const keys = document.querySelectorAll('.key');
const textarea = document.querySelector('textarea');

const writeKeys = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8',
  'Digit9', 'Digit0', 'Minus', 'Equal', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI',
  'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ',
  'KeyK', 'KeyL', 'Semicolon', 'Quote', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period',
  'Slash'];

function refreshCaps() {
  if ((isCapsLock || !isShift) && (!isCapsLock || isShift)) {
    writeKeys.forEach((key) => {
      document.querySelector(`[data-code="${key}"]`).textContent = document
        .querySelector(`[data-code="${key}"]`).textContent.toLowerCase();
    });
  } else {
    writeKeys.forEach((key) => {
      document.querySelector(`[data-code="${key}"]`).textContent = document
        .querySelector(`[data-code="${key}"]`).textContent.toUpperCase();
    });
  }
}

function refreshKeyboard() {
  for (let i = 0; i < keys.length; i += 1) {
    keys[i].textContent = keyboardSet[keys[i].dataset.code][lang][mod];
  }
  refreshCaps();
  if (isCapsLock) {
    document.querySelector('[data-code="CapsLock"]').classList.add('key-caps');
  } else if (!isCapsLock) {
    document.querySelector('[data-code="CapsLock"]').classList.remove('key-caps');
  }
}

refreshKeyboard();

function writeChar(code) {
  const cursor = textarea.selectionStart;
  let char = keyboardSet[code][lang];
  if (isShift) {
    char = char.shift;
  } else if (!isShift) {
    char = char.normal;
  }
  if (isCapsLock && char === char.toUpperCase()) {
    char = char.toLowerCase();
  } else if (isCapsLock && char !== char.toUpperCase()) {
    char = char.toUpperCase();
  }
  textarea.value = textarea.value
    .slice(0, textarea.selectionStart) + char + textarea
    .value.slice(textarea.selectionStart);
  textarea.selectionStart = cursor + 1;
  textarea.selectionEnd = cursor + 1;
}

// Write Char
document.addEventListener('keydown', (event) => {
  event.preventDefault();
  writeKeys.forEach((key) => {
    if (event.code === key) {
      writeChar(event.code);
    }
  });
  if (event.code === 'Space') {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + event.key + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'Tab') {
    const char = '\t';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'Enter') {
    const char = '\n';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'Backspace') {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart - 1) + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor - 1;
    textarea.selectionEnd = cursor - 1;
  }
  if (event.code === 'ArrowLeft') {
    const char = '←';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'ArrowRight') {
    const char = '→';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'ArrowUp') {
    const char = '↑';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.code === 'ArrowDown') {
    const char = '↓';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
});

// Shift
document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShift = true;
    mod = 'shift';
    refreshKeyboard();
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
    isShift = false;
    mod = 'normal';
    refreshKeyboard();
  }
});

// Capslock
document.addEventListener('keyup', (event) => {
  if (event.code === 'CapsLock') {
    isCapsLock = !isCapsLock;
    refreshKeyboard();
  }
});

// Layout
document.addEventListener('keydown', (event) => {
  if (event.code === 'AltLeft') {
    isAlt = true;
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'AltLeft') {
    isAlt = false;
  }
});
document.addEventListener('keyup', (event) => {
  if (event.code === 'ShiftLeft' && isAlt) {
    lang = lang === 'en' ? 'ru' : 'en';
    localStorage.setItem('lang', lang);
    refreshKeyboard();
  }
});

// Active key
document.addEventListener('keydown', (event) => {
  if (document.querySelector(`[data-code="${event.code}"]`)) {
    document.querySelector(`[data-code="${event.code}"]`).classList.add('key-active');
  }
});

document.addEventListener('keyup', (event) => {
  if (document.querySelector(`[data-code="${event.code}"]`)) {
    document.querySelector(`[data-code="${event.code}"]`).classList.remove('key-active');
  }
});

// Mouse active key
document.addEventListener('mousedown', (event) => {
  if (event.target.classList.contains('key')) {
    document.querySelector(`[data-code="${event.target.dataset.code}"]`).classList.add('key-active');
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.classList.contains('key')) {
    document.querySelector(`[data-code="${event.target.dataset.code}"]`).classList.remove('key-active');
  }
});

// Mouse interaction
document.addEventListener('click', (event) => {
  writeKeys.forEach((key) => {
    if (event.target.dataset.code === key) {
      writeChar(event.target.dataset.code);
    }
  });
  if (event.target.dataset.code === 'Space') {
    const char = ' ';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'Tab') {
    const char = '\t';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'Enter') {
    const char = '\n';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'Backspace') {
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart - 1) + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor - 1;
    textarea.selectionEnd = cursor - 1;
  }
  if (event.target.dataset.code === 'ArrowLeft') {
    const char = '←';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'ArrowRight') {
    const char = '→';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'ArrowUp') {
    const char = '↑';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
  if (event.target.dataset.code === 'ArrowDown') {
    const char = '↓';
    const cursor = textarea.selectionStart;
    textarea.value = textarea.value
      .slice(0, textarea.selectionStart) + char + textarea.value
      .slice(textarea.selectionStart);
    textarea.selectionStart = cursor + 1;
    textarea.selectionEnd = cursor + 1;
  }
});

document.addEventListener('click', (event) => {
  if (event.target.dataset.code === 'CapsLock') {
    isCapsLock = !isCapsLock;
    refreshKeyboard();
  }
});

document.addEventListener('mousedown', (event) => {
  if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
    mod = 'shift';
    isShift = true;
    refreshKeyboard();
  }
});

document.addEventListener('mouseup', (event) => {
  if (event.target.dataset.code === 'ShiftLeft' || event.target.dataset.code === 'ShiftRight') {
    mod = 'normal';
    isShift = false;
    refreshKeyboard();
  }
});
