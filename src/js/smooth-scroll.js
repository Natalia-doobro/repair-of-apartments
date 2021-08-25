function initMeny() {
  // Добавляет плавную прокрутку ко всем ссылкам
  $('a').addEventListener('click', function (event) {
    // Убедись в этом что .hash имеет значение перед переопределением поведения по умолчанию
    if (this.hash !== '') {
      // Запретить поведение щелчка якоря по умолчанию
      event.preventDefault();

      // Хранить хэш (#)
      var hash = this.hash;

      // Использование метода animate() jQuery для добавления плавной прокрутки страницы
      // Необязательное число (500) указывает количество миллисекунд, необходимых для прокрутки до указанной области
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          // Добавить хэш (#) для URL-адреса после завершения прокрутки (поведение щелчка по умолчанию)
          window.location.hash = hash;
        },
      );
    }
  });
};

document.addEventListener('ready', function () {
    initMeny();
});