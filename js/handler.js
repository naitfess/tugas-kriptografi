document.addEventListener("DOMContentLoaded", function () {
  const textarea = document.getElementById("text-1");
  const charCount = document.getElementById("counter");

  textarea.addEventListener("input", function () {
    // Filter out non-ASCII characters
    let filteredText = textarea.value.replace(/[^\x00-\x7F]/g, "");

    // Limit to 1000 characters
    if (filteredText.length > 1000) {
      filteredText = filteredText.substring(0, 1000);
    }

    textarea.value = filteredText;
    charCount.textContent = `${filteredText.length}/1000`;
  });
});

//caesar cipher menu
function funcMenuCaesar(menu, choice) {
  let choiceC = choice;
  const keyInput = document.getElementById("key");
  const text1 = document.getElementById("text-1");
  const text2 = document.getElementById("text-2");
  const c = document.getElementById("choice");
  if (keyInput.value === null || keyInput.value === "") {
    keyInput.value = 1;
  }
  const minusButton = document.getElementById("minusButton");
  const plusButton = document.getElementById("plusButton");

  runCode(menu, choiceC, keyInput.value);

  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");

  encodeButton.addEventListener("click", () => {
    choiceC = "encode";
    swapMode();
    runCode(menu, choiceC, keyInput.value);
  });
  decodeButton.addEventListener("click", () => {
    choiceC = "decode";
    swapMode();
    runCode(menu, choiceC, keyInput.value);
  });

  function swapMode() {
    const judul1 = document.getElementById("title-1");
    const judul2 = document.getElementById("title-2");
    [judul1.innerHTML, judul2.innerHTML] = [judul2.innerHTML, judul1.innerHTML];
    [text1.value, text2.value] = [text2.value, text1.value];
  }

  function validateKeyInput() {
    let value = keyInput.value;
    value = value.replace(/[^0-9]/g, "");
    value = parseInt(value);

    if (isNaN(value) || value < 1) {
      keyInput.value = "";
    } else if (value > 25) {
      keyInput.value = 25;
    } else {
      keyInput.value = value;
    }
  }

  //Event listener untuk input pada input text area
  text1.addEventListener("input", function () {
    validateKeyInput();
    runCode(menu, choiceC, keyInput.value);
  });

  // Event listener untuk input pada keyInput
  keyInput.addEventListener("input", function () {
    validateKeyInput();
    runCode(menu, choiceC, keyInput.value);
  });

  // Event listener untuk klik pada minusButton
  minusButton.addEventListener("click", function () {
    let value = parseInt(keyInput.value);
    if (isNaN(value) || value <= 1) {
      keyInput.value = 25;
    } else if (!isNaN(value) && value > 1) {
      keyInput.value = value - 1;
    }
    runCode(menu, choiceC, keyInput.value);
  });

  // Event listener untuk klik pada plusButton
  plusButton.addEventListener("click", function () {
    let value = parseInt(keyInput.value);
    if (isNaN(value) || value >= 25) {
      keyInput.value = 1;
    } else if (!isNaN(value) && value < 25) {
      keyInput.value = value + 1;
    }
    runCode(menu, choiceC, keyInput.value);
  });

  // Validasi awal saat halaman dimuat
  validateKeyInput();
  runCode(menu, choiceC, keyInput.value);
}

//rail fence cipher menu
function funcMenuRailFence(menu, choice) {
  const keyInput = document.getElementById("key");
  const text1 = document.getElementById("text-1");
  let choiceRF = choice;
  if (keyInput.value === null || keyInput.value === "") {
    keyInput.value = 1;
  }
  const minusButton = document.getElementById("minusButton");
  const plusButton = document.getElementById("plusButton");

  runCode(menu, choiceRF, keyInput.value);

  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");

  encodeButton.addEventListener("click", () => {
    choiceRF = "encode";
    runCode(menu, choiceRF, keyInput.value);
  });
  decodeButton.addEventListener("click", () => {
    choiceRF = "decode";
    runCode(menu, choiceRF, keyInput.value);
  });

  function validateKeyInput() {
    let value = keyInput.value;
    value = value.replace(/[^0-9]/g, "");
    value = parseInt(value);

    if (isNaN(value) || value < 1) {
      keyInput.value = "";
    } else if (value > 99) {
      keyInput.value = 99;
    } else {
      keyInput.value = value;
    }
  }

  //Event listener untuk input pada input text area
  text1.addEventListener("input", function () {
    validateKeyInput();
    runCode(menu, choiceRF, keyInput.value);
  });

  // Event listener untuk input pada keyInput
  keyInput.addEventListener("input", function () {
    validateKeyInput();
    runCode(menu, choiceRF, keyInput.value);
  });

  // Event listener untuk klik pada minusButton
  minusButton.addEventListener("click", function () {
    let value = parseInt(keyInput.value);
    if (isNaN(value) || value <= 1) {
      keyInput.value = 99;
    } else if (!isNaN(value) && value > 1) {
      keyInput.value = value - 1;
    }
    runCode(menu, choiceRF, keyInput.value);
  });

  // Event listener untuk klik pada plusButton
  plusButton.addEventListener("click", function () {
    let value = parseInt(keyInput.value);
    if (isNaN(value) || value >= 99) {
      keyInput.value = 1;
    } else if (!isNaN(value) && value < 99) {
      keyInput.value = value + 1;
    }
    runCode(menu, choiceRF, keyInput.value);
  });

  // Validasi awal saat halaman dimuat
  validateKeyInput();
  runCode(menu, choiceRF, keyInput.value);
}

//XOR menu
function funcMenuXOR(menu, choice) {
  const key = document.getElementById("key");
  const convertedKey = document.getElementById("converted-key");
  const keyType = document.getElementById("key-type");
  const text1 = document.getElementById("text-1");
  let choiceXOR = choice;
  let maxChar = 100;
  const charCount = document.getElementById("counterKey");

  // keyType.value = "text";
  key.value = "haqqi";
  runCode(menu, choiceXOR, key.value);

  keyTypeHandler();
  key.addEventListener("input", keyTypeHandler);
  keyType.addEventListener("input", () => {
    keyTypeHandler();
    runCode(menu, choiceXOR, key.value);
  });
  key.addEventListener("input", () => runCode(menu, choiceXOR, key.value));
  text1.addEventListener("input", () => runCode(menu, choiceXOR, key.value));

  key.addEventListener("input", () => {
    key.value = key.value.replace(/[^\x00-\x7F]/g, "");
  });

  function keyTypeHandler() {
    if (keyType.value === "text") {
      convertedKey.value = stringToBinary(key.value);
      maxChar = 100;
    } else {
      convertedKey.value = binaryToString(key.value);
      maxChar = 800;
    }
  }

  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");

  encodeButton.addEventListener("click", () => {
    choiceXOR = "encode";
    runCode(menu, choiceXOR, key.value);
  });
  decodeButton.addEventListener("click", () => {
    choiceXOR = "decode";
    runCode(menu, choiceXOR, key.value);
  });

  key.addEventListener("input", function () {
    const textLength = key.value.length;
    charCount.textContent = `${textLength}/${maxChar}`;

    if (textLength >= maxChar) {
      key.value = key.value.substring(0, maxChar);
      charCount.textContent = `${maxChar}/${maxChar}`;
    }
  });
}
const encryptor = new JSEncrypt();
function funcMenuRSA(menu, choice) {
  const text1 = document.getElementById("text-1");
  const text2 = document.getElementById("text-2");
  text2.value = "";
  const generateKey = document.getElementById("generate-key");
  const generate = document.getElementById("run");
  const publicKey = document.getElementById("public-key");
  const privateKey = document.getElementById("private-key");
  const key = document.getElementById("rsa-key");
  let choiceRSA = choice;

  text1.addEventListener("input", () => {
    text2.value = "";
  });

  if (generateKey && generate && publicKey && privateKey) {
    generateKey.addEventListener("click", () => {
      encryptor.getKey();
      publicKey.value = encryptor.getPublicKey();
      privateKey.value = encryptor.getPrivateKey();
      alert("Key Successfully Generated");
    });

    generate.addEventListener("click", () => {
      runCode(menu, choiceRSA, key.value);
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }

  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");

  encodeButton.addEventListener("click", () => {
    choiceRSA = "encode";
  });
  decodeButton.addEventListener("click", () => {
    choiceRSA = "decode";
  });
}

// Fungsi untuk membagi pesan menjadi blok-blok kecil
function splitMessage(plainText, blockSize) {
  let blocks = [];
  for (let i = 0; i < plainText.length; i += blockSize) {
    blocks.push(plainText.slice(i, i + blockSize));
  }
  return blocks;
}

// Fungsi untuk mengenkripsi pesan dalam blok-blok kecil menggunakan RSA
function encryptRSAInBlocks(plainText, publicKey) {
  const blockSize = 117; // Ukuran maksimum blok untuk kunci 1024-bit
  const blocks = splitMessage(plainText, blockSize);
  const encryptedBlocks = blocks.map((block) => encryptRSA(block, publicKey));
  return encryptedBlocks.join(";"); // Gabungkan hasil enkripsi blok-blok menjadi satu string
}

// Fungsi untuk mendekripsi pesan yang dienkripsi dalam blok-blok kecil
function decryptRSAInBlocks(encryptedText, privateKey) {
  const encryptedBlocks = encryptedText.split(";"); // Pisahkan blok-blok terenkripsi
  const decryptedBlocks = encryptedBlocks.map((block) =>
    decryptRSA(block, privateKey)
  );
  return decryptedBlocks.join(""); // Gabungkan hasil dekripsi menjadi satu pesan
}

function encryptRSA(plain, publicKey) {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(publicKey); // Set the public key
  const encrypted = encryptor.encrypt(plain); // Encrypt the plain text
  if (!encrypted) {
    console.error("Encryption failed.");
    return false;
  }
  return encrypted; // Return the encrypted message
}
function decryptRSA(encrypted, privateKey) {
  const decryptor = new JSEncrypt();
  decryptor.setPrivateKey(privateKey); // Set the private key
  const decrypted = decryptor.decrypt(encrypted); // Decrypt the encrypted message
  if (!decrypted) {
    console.error("Decryption failed.");
    return false;
  }
  return decrypted; // Return the decrypted message
}

//menu Super Encryption
function funcMenuSuper(menu, choice) {
  const caesarKey = document.getElementById("caesar-key");
  const railFenceKey = document.getElementById("railfence-key");
  const xorKey = document.getElementById("xor-key");
  const rsaKey = document.getElementById("rsa-key");
  xorKey.value = "Heelow";
  let choiceS = choice;
  // Initialize button and key input
  const minusButton1 = document.getElementById("minusButton1");
  const plusButton1 = document.getElementById("plusButton1");
  const minusButton2 = document.getElementById("minusButton2");
  const plusButton2 = document.getElementById("plusButton2");
  const runButton = document.getElementById("run2");
  caesarKey.value = 1;
  railFenceKey.value = 1;
  xorKey.value = "Heelow";
  let keySuper = [];

  // Add event listeners for buttons and key input
  const encodeButton = document.getElementById("encodeButton");
  const decodeButton = document.getElementById("decodeButton");

  encodeButton.addEventListener("click", () => {
    choiceS = "encode";
  });
  decodeButton.addEventListener("click", () => {
    choiceS = "decode";
  });

  function validateKeyInput() {
    let value = caesarKey.value;
    value = value.replace(/[^0-9]/g, "");
    value = parseInt(value);

    if (isNaN(value) || value < 1) {
      caesarKey.value = "";
    } else if (value > 25) {
      caesarKey.value = 25;
    } else {
      caesarKey.value = value;
    }
  }

  // Event listener untuk input pada caesarKey
  caesarKey.addEventListener("input", function () {
    validateKeyInput();
  });

  // Event listener untuk klik pada minusButton
  minusButton1.addEventListener("click", function () {
    let value = parseInt(caesarKey.value);
    if (isNaN(value) || value <= 1) {
      caesarKey.value = 25;
    } else if (!isNaN(value) && value > 1) {
      caesarKey.value = value - 1;
    }
  });

  // Event listener untuk klik pada plusButton
  plusButton1.addEventListener("click", function () {
    let value = parseInt(caesarKey.value);
    if (isNaN(value) || value >= 25) {
      caesarKey.value = 1;
    } else if (!isNaN(value) && value < 25) {
      caesarKey.value = value + 1;
    }
  });

  // Validasi awal saat halaman dimuat
  validateKeyInput();

  //rainfence
  function validateKeyInputRF() {
    let value = railFenceKey.value;
    value = value.replace(/[^0-9]/g, "");
    value = parseInt(value);

    if (isNaN(value) || value < 1) {
      railFenceKey.value = "";
    } else if (value > 99) {
      railFenceKey.value = 99;
    } else {
      railFenceKey.value = value;
    }
  }

  // Event listener untuk input pada railFenceKey
  railFenceKey.addEventListener("input", function () {
    validateKeyInputRF();
  });

  // Event listener untuk klik pada minusButton
  minusButton2.addEventListener("click", function () {
    let value = parseInt(railFenceKey.value);
    if (isNaN(value) || value <= 1) {
      railFenceKey.value = 99;
    } else if (!isNaN(value) && value > 1) {
      railFenceKey.value = value - 1;
    }
  });

  // Event listener untuk klik pada plusButton
  plusButton2.addEventListener("click", function () {
    let value = parseInt(railFenceKey.value);
    if (isNaN(value) || value >= 99) {
      railFenceKey.value = 1;
    } else if (!isNaN(value) && value < 99) {
      railFenceKey.value = value + 1;
    }
  });

  // Validasi awal saat halaman dimuat
  validateKeyInputRF();

  //xor

  //rsa
  const generateKey = document.getElementById("generate-key");
  const publicKey = document.getElementById("public-key");
  const privateKey = document.getElementById("private-key");

  if (generateKey && publicKey && privateKey) {
    generateKey.addEventListener("click", () => {
      encryptor.getKey();
      publicKey.value = encryptor.getPublicKey();
      privateKey.value = encryptor.getPrivateKey();
      alert("Key Successfully Generated");
    });
  } else {
    console.error("One or more elements not found in the DOM.");
  }

  runButton.addEventListener("click", () => {
    if (rsaKey.value === "" || xorKey.value === "") {
      alert("Silahkan isi kunci terlebih dahulu.");
      return;
    }
    keySuper = [
      caesarKey.value,
      railFenceKey.value,
      xorKey.value,
      rsaKey.value,
    ];
    runCode(menu, choiceS, keySuper);
  });
}

//runcode
function runCode(menu, choice, key) {
  const text1 = document.getElementById("text-1");
  const text2 = document.getElementById("text-2");
  switch (menu) {
    case "caesarCipher":
      const keyC = parseInt(key);
      const inputTextC = text1.value;
      text2.value =
        choice === "encode"
          ? caesarCipher(inputTextC, keyC)
          : caesarCipher(inputTextC, -keyC);
      break;
    case "railFenceCipher":
      const keyRF = parseInt(key);
      const inputTextRF = text1.value;
      text2.value =
        choice === "encode"
          ? encryptRailFenceCipher(inputTextRF, keyRF)
          : decryptRailFenceCipher(inputTextRF, keyRF);
      break;
    case "XOR":
      const keyType = document.getElementById("key-type");
      const inputTextXOR = text1.value;
      const keyXOR = key;
      text2.value =
        choice === "encode"
          ? xorEncrypt(inputTextXOR, keyXOR, keyType.value)
          : xorDecrypt(inputTextXOR, keyXOR, keyType.value);
      break;
    case "RSA":
      const inputTextRSA = text1.value; // Get input text
      const choiceRSA = choice;
      const keyRSA = key; // Get the key
      if (keyRSA === "") {
        alert("Silahkan isi kunci RSA terlebih dahulu.");
        return;
      }
      text2.value =
        choiceRSA === "encode"
          ? encryptRSAInBlocks(inputTextRSA, keyRSA)
          : decryptRSAInBlocks(inputTextRSA, keyRSA);
      break;
    case "superEncryption":
      const textSuper = text1.value;
      let Superkey = key;
      let keyCaesar = parseInt(Superkey[0]);
      let keyRailFence = parseInt(Superkey[1]);
      let keyXor = Superkey[2];
      let keyRsa = Superkey[3];
      function superEncryption(
        textSuper,
        keyCaesar,
        keyRailFence,
        keyXor,
        keyRsa
      ) {
        const caesar = caesarCipher(textSuper, keyCaesar);
        console.log(caesar);
        const railFence = encryptRailFenceCipher(caesar, keyRailFence);
        console.log(railFence);
        const xor = xorEncrypt(railFence, keyXor, "text");
        console.log(xor);
        const rsa = encryptRSAInBlocks(xor, keyRsa);
        console.log(rsa);
        return rsa;
      }
      function superDecryption(
        textSuper,
        keyCaesar,
        keyRailFence,
        keyXor,
        keyRsa
      ) {
        const rsa = decryptRSAInBlocks(textSuper, keyRsa);
        console.log(rsa);
        const xor = xorDecrypt(rsa, keyXor, "text");
        console.log(xor);
        const railFence = decryptRailFenceCipher(xor, keyRailFence);
        console.log(railFence);
        const caesar = caesarCipher(railFence, -keyCaesar);
        console.log(caesar);
        return caesar;
      }
      text2.value =
        choice === "encode"
          ? superEncryption(textSuper, keyCaesar, keyRailFence, keyXor, keyRsa)
          : superDecryption(textSuper, keyCaesar, keyRailFence, keyXor, keyRsa);
      break;
    default:
      break;
  }
}
