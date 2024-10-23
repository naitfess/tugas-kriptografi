function stringToBinary(str) {
  return str
    .split("")
    .map((char) => char.charCodeAt(0).toString(2))
    .join(" ");
}

function binaryToString(binary) {
  return binary
    .split(" ")
    .map((bin) => String.fromCharCode(parseInt(bin, 2)))
    .join("");
}

// Function to extend the key to match the input length
function extendKey(inputText, key) {
  let extendedKey = "";
  for (let i = 0; i < inputText.length; i++) {
    extendedKey += key[i % key.length]; // Repeat the key as necessary
  }
  return extendedKey;
}

function xorEncrypt(text, key, keyType) {
  if (keyType === "binary") {
    key = binaryToString(key);
  }
  let output = "";
  for (let i = 0; i < text.length; i++) {
    output += String.fromCharCode(
      text.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  let result = btoa(output);
  return result;
}

function xorDecrypt(text, key, keyType) {
  if (keyType === "binary") {
    key = binaryToString(key);
  }
  let ciphertext = atob(text);
  let output = "";
  for (let i = 0; i < ciphertext.length; i++) {
    output += String.fromCharCode(
      ciphertext.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return output;
}

window.xorEncrypt = xorEncrypt;
window.xorDecrypt = xorDecrypt;
