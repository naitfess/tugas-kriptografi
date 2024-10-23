function updateMenuContent(menu, choice) {
  const caesarTemplate = `
      <div class="container mt-5 w-50 mx-auto">
        <div class="mb-3 text-center">
          <label for="key" class="poppins-medium">SHIFT BY</label>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <button id="minusButton" class="mx-2">-</button>
            <input class="input-shift text-center w-25" type="text" id="key" />
            <button id="plusButton" class="mx-2">+</button>
          </div>
        </div>
      </div>
    `;

  const railFenceTemplate = `
      <div class="container mt-5 w-50 mx-auto">
        <div class="mb-3 text-center">
          <label for="key" class="poppins-medium">KEY</label>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <button id="minusButton" class="mx-2">-</button>
            <input class="input-shift text-center w-25" type="text" id="key" />
            <button id="plusButton" class="mx-2">+</button>
          </div>
        </div>
      </div>
    `;

  const XORTemplate = `
      <div class="container mt-5" style="max-width: 600px;">
        <div class="form-group mb-3 text-center">
          <label for="key" class="poppins-medium">KEY (<span id="counterKey">5/100</span>) :</label>
          <textarea class="form-control w-50 mx-auto mt-3" type="text" id="key" rows="3"/></textarea>
        </div>
        <div class="form-group mb-3 text-center">
          <label for="converted-key" class="poppins-medium">CONVERTED KEY :</label>
          <textarea class="form-control w-50 mx-auto mt-3" type="text" id="converted-key" rows="3" disabled/></textarea>
        </div>
        <div class="form-group mb-3 text-center">
          <label for="key-type" class="poppins-medium">KEY : </label>
          <select class="form-control w-25 mx-auto" id="key-type">
            <option class="text-center" value="text" selected>teks</option>
            <option class="text-center" value="binary">binary</option>
          </select>
        </div>
      </div>
    `;

  const RSATemplate = `
      <div class="container mt-3 poppins-semibold" style="max-width: 600px;">
        <div class="text-center mt-4">
          <button
            data-bs-toggle="modal"
            data-bs-target="#showKeyModal"
            class="btn btn-primary poppins-medium"
            id="show-key">Show Keys
          </button>
        </div>
      </div>
      <div class="container mt-5 w-75 mx-auto">
        <div class="mb-3 text-center">
          <label for="rsa-key" class="poppins-medium">KEY</label>
          <textarea class="form-control" id="rsa-key" rows="3"></textarea>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-primary poppins-medium" id="run">Generate</button>
        </div>
      </div>
      <div
          class="modal fade"
          id="showKeyModal"
          tabindex="-1"
          aria-labelledby="showKeyModalLabel"
          aria-hidden="true"
          style="color: #0b132b"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="showKeyModalLabel">KEYS</h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div class="container w-75 mx-auto">
                  <div class="mb-3 text-center">
                    <label for="public-key" class="poppins-medium"
                      >PUBLIC KEY</label
                    >
                    <textarea
                      class="form-control"
                      id="public-key"
                      rows="3"
                      disabled
                    ></textarea>
                  </div>
                  <div class="mb-3 text-center">
                    <label for="private-key" class="poppins-medium"
                      >PRIVATE KEY</label
                    >
                    <textarea
                      class="form-control"
                      id="private-key"
                      rows="3"
                      disabled
                    ></textarea>
                  </div>
                  <div class="text-center mt-4">
                    <button class="btn btn-primary poppins-medium" id="generate-key">Generate Keys</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            `;

  const superTemplate = `
      <div class="container mt-5 w-50 mx-auto">
        <div class="mb-3 text-center">
          <label for="caesar-key" class="poppins-medium">CAESAR KEY</label>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <button id="minusButton1" class="mx-2">-</button>
            <input class="input-shift text-center w-25" type="text" id="caesar-key" />
            <button id="plusButton1" class="mx-2">+</button>
          </div>
        </div>
        <div class="mb-3 text-center">
          <label for="railfence-key" class="poppins-medium">RAIL FENCE KEY</label>
          <div class="d-flex justify-content-center align-items-center mt-2">
            <button id="minusButton2" class="mx-2">-</button>
            <input class="input-shift text-center w-25" type="text" id="railfence-key" />
            <button id="plusButton2" class="mx-2">+</button>
          </div>
        </div>
        <div class="form-group mb-3 text-center">
          <label for="xor-key" class="poppins-medium">XOR KEY :</label>
          <textarea class="form-control w-50 mx-auto mt-3" type="text" id="xor-key" rows="3"/></textarea>
        </div>
        <div class="form-group mb-3 text-center">
          <label for="rsa-key" class="poppins-medium">
            <button data-bs-toggle="modal"
            data-bs-target="#showKeySuperModal"
            class="btn btn-secondary poppins-regular"
            id="show-key-super">RSA KEY : </button>
          </label>
          <textarea class="form-control w-50 mx-auto mt-3" type="text" id="rsa-key" rows="3"/></textarea>
        </div>
        <div class="text-center mt-4">
          <button class="btn btn-secondary poppins-regular" id="run2">Generate</button>
        </div>
      </div>

       <!-- Modal -->
        <div class="modal fade" id="showKeySuperModal" tabindex="-1" aria-labelledby="showKeyModalSuperLabel" aria-hidden="true" style="color: #0b132b">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="showKeyModalSuperLabel">KEYS</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <div class="container w-75 mx-auto">
                  <div class="mb-3 text-center">
                    <label for="public-key" class="poppins-medium">PUBLIC KEY</label>
                    <textarea class="form-control" id="public-key" rows="3" disabled></textarea>
                  </div>
                  <div class="mb-3 text-center">
                    <label for="private-key" class="poppins-medium">PRIVATE KEY</label>
                    <textarea class="form-control" id="private-key" rows="3" disabled></textarea>
                  </div>
                  <div class="text-center mt-4">
                    <button class="btn btn-dark poppins-regular" id="generate-key">Generate Keys</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    `;

  switch (menu) {
    case "caesarCipher":
      menuContent.innerHTML = caesarTemplate;
      funcMenuCaesar(menu, choice);
      break;
    case "railFenceCipher":
      menuContent.innerHTML = railFenceTemplate;
      funcMenuRailFence(menu, choice);
      break;
    case "XOR":
      menuContent.innerHTML = XORTemplate;
      funcMenuXOR(menu, choice);
      break;
    case "RSA":
      menuContent.innerHTML = RSATemplate;
      funcMenuRSA(menu, choice);
      break;
    case "superEncryption":
      menuContent.innerHTML = superTemplate;
      funcMenuSuper(menu, choice);
      break;
    default:
      menuContent.innerHTML = caesarTemplate;
      minusAndPlusButton();
      runCode();
      break;
  }
}
