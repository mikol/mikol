(function onReady(f) {
   function ready() {
      f();
      f = ready = maybe = onReady = null;
   }

   function maybe() {
      /complete/.test(document.readyState) ? ready() : setTimeout(maybe, 0);
   }

   maybe();
})(function main() {
  setTimeout(function loadBackgroundImage() {
    document.documentElement.className = 'ready';
  });

  (function updateContactInformation() {
    var element = _getElementsByClassName.call(document, 'tel')[0];

    if (element) {
      element.setAttribute('href', 'tel:+1 415 412 4854');
      element.innerHTML = '+<span class="onum">1</span> ' +
          '<span class="onum">415</span> ' +
          '<span class="onum">412</span> ' +
          '<span class="onum">4854</span>';
    }

    element = _getElementsByClassName(document, 'email')[0];

    if (element) {
      element.setAttribute('href', 'mailto:mikol@thinbox.org');
      _textContent(element, 'mikol@thinbox.org');
    }
  }());
});

/* XXX ---------------------------------------------------------------------- */

function _textContent(element, text) {
  var property = ('textContent' in element) ? 'textContent' : 'innerText';

  _textContent = function _textContent(element, text) {
    if (text != null) {
      element[property] = text;
    }

    return element[property];
  };

  return _textContent(element, text);
}

function _getElementsByClassName(root, names) {
  if (arguments.length === 1) {
    names = root;
    root = document;
  }

  if (typeof root.getElementsByClassName === 'function') {
    return root.getElementsByClassName(names);
  }

  var ouput = [];

  if (names == null) {
    return output;
  }

  var cnames = String(names).split(/\s+/);
  var elements = root.getElementsByTagName('*');

  for (var x = elements.length - 1; x > -1; --x) {
    var element = elements[x];
    var values = (element.getAttribute('class') || '').split(/\s+/);

    for (var i = cnames.length - 1; i > -1; --i) {
      if (values.indexOf(cnames[x]) > -1) {
        ouput.push(element);
        break;
      }
    }
  }

  return output;
};

/* -------------------------------------------------------------------------- */
