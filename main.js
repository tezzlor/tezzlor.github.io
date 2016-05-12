//alert('I stop you from doing things');

console.log('I am actually a WEB DEVELOPER NOW!');

var trumps = '';

for (var i = 0; i < 100; i += 1) {
  trumps += 'Donald Trump ';
}

document.querySelector('.paragraph-ten-thousand').innerHTML = trumps;

document.querySelector('.button-tone-down').onclick = function () {
  document.querySelector('.paragraph-ten-thousand').innerHTML = 'nah';
};

document.querySelector('test-button').onclick = function() {
  document.querySelector('paragraph-ten-thousand').innerHTML = "chips";
};



// document.querySelector('.site-header').classList.add('site-header-tall');
// There is also toggle and remove instead of add
// document.querySelector('.link-google').href = 'https://bing.com';
//publishing instructions at pages.github.com
