#установка npm пакетов при клонировании репозитория. npm ci расшифровывается как "clean install", поскольку при её выполнении NPM полностью удаляет директорию node_modules и загружает все зависимости "с чистого листа"
install:
	 npm ci 

lint:  #запуск линтера
	npx eslint . 
lint-fix:  #исправление ошибок линтера
	npx eslint --fix .  

publish:  #отладка публикации в npm репозиторий, пакет не будет опубликован, но мы увидим что он будет в себя включать
	npm publish --dry-run

gendiff: #запуск приложения gendiff
	node bin/gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage