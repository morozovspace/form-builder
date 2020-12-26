## Тетсовый конструктор формы
Конструктор форм основанный на конфигурации. Тестовая конфигурация расположена в файле form-example-config.json.
Для валидации используется библиотека https://vuelidate.js.org/, также присутствует возможность расширения валидации своими функциями.
### Requirements:
 - docker
 - docker-compose

### Help
    bin/run.sh -h    
### Start
    bin/run.sh
### Generate
    bin/run.sh -m 1
### Stop
    bin/stop.sh
### Clear
    bin/clear.sh