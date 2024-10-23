function encryptRailFenceCipher(text, key) {
  if (key <= 1) return text;

  const rows = Array.from({ length: key }, () => "");
  let directionDown = false;
  let row = 0;

  // Menyusun karakter ke dalam "rails"
  for (const char of text) {
    rows[row] += char;

    // Mengubah arah saat mencapai atas atau bawah "rails"
    if (row === 0 || row === key - 1) {
      directionDown = !directionDown;
    }

    row += directionDown ? 1 : -1;
  }

  // Menggabungkan hasil dari setiap rail
  return rows.join("");
}

function decryptRailFenceCipher(cipher, key) {
  if (key <= 1) return cipher;

  const rows = Array.from({ length: key }, () => "");
  const length = cipher.length;

  // Menghitung panjang dari setiap rail
  let directionDown = false;
  let row = 0;
  const railLengths = Array(key).fill(0);

  // Menentukan berapa banyak karakter di setiap rail
  for (let i = 0; i < length; i++) {
    railLengths[row]++;

    // Mengubah arah saat mencapai atas atau bawah "rails"
    if (row === 0 || row === key - 1) {
      directionDown = !directionDown;
    }

    row += directionDown ? 1 : -1;
  }

  // Mengisi rails dengan karakter dari cipher berdasarkan panjang rail yang dihitung
  let index = 0;
  for (let i = 0; i < key; i++) {
    rows[i] = cipher.slice(index, index + railLengths[i]);
    index += railLengths[i];
  }

  // Mendekripsi dengan mengambil karakter dari setiap rail
  let decrypted = "";
  row = 0;
  directionDown = false;
  const railIndices = Array(key).fill(0); // Menyimpan indeks karakter yang diambil dari setiap rail

  for (let i = 0; i < length; i++) {
    decrypted += rows[row].charAt(railIndices[row]);
    railIndices[row]++; // Mengambil karakter berikutnya dari rail

    // Mengubah arah saat mencapai atas atau bawah "rails"
    if (row === 0 || row === key - 1) {
      directionDown = !directionDown;
    }

    row += directionDown ? 1 : -1;
  }

  return decrypted;
}
