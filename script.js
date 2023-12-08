document.addEventListener('DOMContentLoaded', function() {
  const input = document.querySelector('.gonderme');
  const button = document.querySelector('.gonderbuton');
  const restartButton = document.querySelector('.yenidenbaslatbuton');
  const resultMessage = document.querySelector('.resultMessage');
  let randomNumber = Math.floor(Math.random() * 100) + 1;

  button.addEventListener('click', checkGuess);

  restartButton.addEventListener('click', function() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    resultMessage.textContent = 'Yeniden Başlatıldı!';
    button.disabled = false;
    input.disabled = false;
    input.placeholder = '1-100 Arası Sayı Girin';
    input.value = '';
  });

  input.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      checkGuess();
    }
  });

  function checkGuess() {
    const userGuess = parseInt(input.value);

    if (!isNaN(userGuess)) {
      if (userGuess === randomNumber) {
        resultMessage.textContent = 'Tebrikler, doğru tahmin ettiniz! Yeniden başlatarak yeni oyuna başlayabilirsiniz.';
        button.disabled = true;
        input.disabled = true;
        input.placeholder = 'Doğru Tahmin Ettin, Yeniden Başlatman Gerekli';
      } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Daha büyük bir sayı girin.';
      } else {
        resultMessage.textContent = 'Daha küçük bir sayı girin.';
      }
    } else {
      resultMessage.textContent = 'Lütfen geçerli bir sayı girin.';
    }

    input.value = ' '; // Gönderildikten sonra input alanını temizle
  }
});
