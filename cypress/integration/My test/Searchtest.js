
context('Search', () => {
    it('should have a form', () => {
      cy.visit('https://horo.mail.ru/sonnik/');
    })
    it('should add a task',() => {
      // Первые четыре теста дают нам понять, что с большой вероятностью, поиск в horo.mail.ru/sonnik происходит по словам, которое встречается в принципе в тексте (предлоги и междометия прекрасно находятся)
      cy.get('input').first().type('Со');
      cy.contains('Толковать сон').click();
      cy.get('input').first().clear();
      cy.contains('Толковать сон').click();
      cy.wait(4000)
      cy.get('input').first().type('ЗА');
      cy.contains('Толковать сон').click();
      cy.get('input').first().clear();
      cy.get('input').first().type('Вместе');
      cy.contains('Толковать сон').click();
      cy.get('input').first().clear();
      // Следующий тест показывает, что если конкретного слова не представлено в соннике, Вас скорре всего выведут на значение сна, где в принципе в тексте есть слово, например "Кран"
      cy.get('input').first().type('Кран');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      // Следующий тест показывает, что помимо вывода основного значения сна "Дом", также выдаются слова, где это слово в принципе есть.
      cy.get('input').first().type('Дом');
      cy.contains('Толковать сон').click();
      // Далее идут два теста, где я добавляю к значению сна "Дом", значения сна "Сад" (типо мне снилось в одном сне Домом и какой-то Сад) Поиск в данном случае выдает, только значения Дом и сад together в одном значении и не предоставляет каждое слово по отдельности.
      cy.get('input').first().type(' ');
      cy.get('input').first().type('сад');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('Дом+сад');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('Дом не сад');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('Дом,сад');
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().clear();
      cy.get('input').first().type('Дом_сад');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      // Пару тестов, где на первый взгляд кажется, что спецсимволы поиск в horo.mail.ru/sonnik отбрасывает, пока мы не доходим до '_Дом_'. Реакция в тесте.
      cy.get('input').first().type('/Дом/');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('!Дом!');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('"Дом"');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('_Дом_');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      // Далее тесты на отступы перед словом/тупо пробелы/длинное слово. Итоги в тестах.
      cy.get('input').first().type('Óèêèïåäèÿ å ìíîãîåçè÷íà åëåêòðîííà');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('13');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('          Хирург');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('          ');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('ззззз....ззззззззззззз......зззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззз');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('          Дом');
      cy.contains('Все сонники').click();
      cy.contains('Сонник Лоффа').click();
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('          ');
      cy.contains('Все сонники').click();
      cy.contains('Сонник мисс Хассе').click();
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('ззззз....ззззззззззззз......зззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззззз');
      cy.contains('Все сонники').click();
      cy.contains('Сонник Ванги').click();
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      // Ниже два теста на момент, если ты не дописал слово и нажал Поиск. Из двух тестов понятно, что поиск в данном случае очень избирательно выдает результат, явно выдавая не все комбинации.
      cy.get('input').first().type('Лож');
      cy.contains('Толковать сон').click();
      cy.get('input').first().type('ь');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      // Тут вообще интерсная тема, если в примере с Домом и садом, можно сказать, что в принципе все логично, здесь пример, где слова слабо связаны между собой. Результат неожиданный.
      cy.get('input').first().type('Свет цветы');
      cy.contains('Толковать сон').click();
      cy.visit('https://horo.mail.ru/sonnik/');
      cy.get('input').first().type('Душ');
      cy.contains('Толковать сон').click();
      cy.get('input').first().clear();
    })
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })
  })