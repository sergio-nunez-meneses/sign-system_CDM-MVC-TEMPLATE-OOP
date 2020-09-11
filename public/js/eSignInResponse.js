function signInResponse() {
  let response = JSON.parse(this.responseText);
  // console.log(response); // just for debugging

  if (typeof response.navbar !== 'undefined' && response.navbar !== '') {
    getId('navbarNav').innerHTML = response.navbar;
  }

  if (typeof response.html !== 'undefined' && response.html !== '') {
    getId('mainContainer').innerHTML = response.html;
  }
}
