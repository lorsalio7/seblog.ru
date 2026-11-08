---
layout: "post.njk"
title: "Как убрать статтеры в играх на видеокартах Nvidia"
description: "Рассмотрим пару способов как можно убрать статтеры(рывки) при использовании компьютера в играх"
tags: ["posts", "computers"]
category: "computers"
categoryText: "Компьютеры"
date: 2024-12-04
permalink: "posts/{{ page.fileSlug }}/"
dropdown: false
---

<p>Со временем в играх могут появляться некоторые подергивания или рывки(статтеры), которые мешают насладиться прохождением любимой игры, причин которых может быть множество как проблемы в ПО так и неисправности комплектующих ПК. В данной статье мы рассмотрим пару вариантов которые могут помочь исправить появление рывков в играх на примере видеокарт от NVIDIA.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/1.jpg" alt="Отображение статтера в игре на примере приложения MSI Afterburner">

<div class="full-post__see-also see-also">
  <p class="see-also__text">Смотрите также:</p>
  <a class="see-also__link" href="/posts/kak-vyvesti-schetchik-fps-v-igrah/">Как вывести счетчик фпс в играх</a>
</div>

<h2 id="pervyy-sposob-ochistka-kesha">Первый способ: очистка кэша</h2>

<p>Для начала зайдем в &laquo;Панель управления NVIDIA&raquo;, нажмем правой кнопкой мыши по пустому месту на рабочем столе, если у вас Windows 11, то нужно дополнительно нажать &laquo;Показать дополнительные параметры&raquo; чтобы увидеть этот пункт:</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/2.jpg" alt="Как открыть Панель управления NVIDIA">

<p>В открывшемся окне в левой колонке найдите &laquo;Параметры 3D&raquo; и выберите &laquo;Управление параметрами 3D&raquo; в правой колонке отобразятся параметры, нам нужно во вкладку &laquo;Глобальные параметры&raquo;, далее нужно прокрутить вниз и найти &laquo;Размер кэша шейдеров&raquo; и установить &laquo;Отключено&raquo; затем применяем настройки, закрываем окно и перезагружаем компьютер.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/3.jpg" alt="Как убрать статтеры в играх на видеокартах Nvidia - 1">

<p>После перезагрузки нужно открыть &laquo;Проводник&raquo; нажав &laquo;Клавиша Windows + латинскую букву E&raquo; и перейти по этому пути: диск на котором установлена система (обычно диск &laquo;C&raquo;) - &laquo;Пользователи&raquo; - &laquo;Здесь выберите нужную папку с именем пользователя&raquo; -  &laquo;AppData&raquo; - &laquo;Local&raquo; - &laquo;NVIDIA&raquo; - &laquo;GLCache&raquo;.</p>

<h2 id="kak-vklyuchit-otobrazhenie-skrytyh-faylov-i-papok">Как включить отображение скрытых файлов и папок</h2>

<p>Если у вас не отображается папка &laquo;AppData&raquo;, то необходимо включить отображение скрытых файлов и папок. Для этого нужно в &laquo;Проводнике&raquo; нажать на кнопку с тремя точками:</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/4.jpg" alt="Как включить отображение скрытых файлов и папок в Windows - 1">

<p>В появившемся окне выбрать &laquo;Параметры&raquo;</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/5.jpg" alt="Как включить отображение скрытых файлов и папок в Windows - 2">

<p>Нажимаем на вкладку &laquo;Вид&raquo;, в дополнительных параметрах прокручиваем вниз и выбираем пункт &laquo;Показывать скрытые файлы, папки и диски&raquo;, нажимаем &laquo;Применить&raquo; и &laquo;ОК&raquo;, теперь у вас будут отображаться скрытые файлы и папки включаю нужную нам &laquo;AppData&raquo;. По этой инструкции вы также сможете отключить показ скрытых файлов.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/6.jpg" alt="Как включить отображение скрытых файлов и папок в Windows - 3">

<p>Теперь нам нужно удалить все что находится внутри папки &laquo;GLCache&raquo;. Не закрывая &laquo;Проводник&raquo; переходим в обратно в директорию &laquo;AppData&raquo; кликая в проводнике</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/7.jpg" alt="Как убрать статтеры в играх на видеокартах Nvidia - 2">

<p>Теперь нужно перейти в &laquo;LocalLow&raquo; - &laquo;NVIDIA&raquo; - &laquo;PerDriverVersion&raquo; - &laquo;DXCache&raquo; и удалить все содержимое в этой папке. Чтобы быстро все выделить и удалить нажмите сочетание клавиш &laquo;Ctrl + A&raquo; и нажмите клавишу &laquo;Delete&raquo; и закрываем окно.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/8.jpg" alt="Как убрать статтеры в играх на видеокартах Nvidia - 3">

<p>Далее удаляем кэш &laquo;DirectX&raquo;. Для этого нам нужно системное приложение &laquo;Очистка диска&raquo;. Открываем меню &laquo;Пуск&raquo; вводим в строке поиска &laquo;очистка диска&raquo; и открываем приложение</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/9.jpg" alt="Приложение очистка диска в Windows - 1">

<p>В окне выбираем диск C и жмем &laquo;OK&raquo;</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/10.jpg" alt="Приложение очистка диска в Windows - 2">

<p>Ставим галочку на пункте &laquo;Кэш построителя текстуры DirectX&raquo;, а со всех остальных снимаем</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/11.jpg" alt="Приложение очистка диска в Windows - 3">

<p>Жмем &laquo;OK&raquo; и соглашаемся с удалением</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/12.jpg" alt="Приложение очистка диска в Windows - 4">

<p>Теперь снова заходим в &laquo;Панель управления NVIDIA&raquo; - &laquo;Управление параметрами 3D&raquo; - &laquo;Размер кэша шейдеров&raquo; и выбрать пункт &laquo;По умолчанию для драйвера" и применяем.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/13.jpg" alt="Панель управления NVIDIA">

<p>Перезагружаем компьютер, и проверяем в игре стало ли лучше.</p>

<h2 id="vtoroy-sposob-vklyuchenie-fayla-podkachki">Второй способ: включение файла подкачки</h2>

<p>Еще один способ это включить файл подкачки в системе, проверьте включен ли он у вас. Нажимаем правой кнопкой мыши по кнопке &laquo;Пуск&raquo;, затем нажимаем на &laquo;Система&raquo;.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/14.jpg" alt="Как включить файл подкачки в Windows 11 - 1">

<p>В появившемся окне выбираем &laquo;Дополнительные параметры системы&raquo;</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/15.jpg" alt="Как включить файл подкачки в Windows 11 - 2">

<p>Откроются параметры, далее во вкладке &laquo;Дополнительно&raquo; есть раздел &laquo;Быстродействие&raquo; в котором находится кнопка &laquo;Параметры&raquo; нажимаем ее.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/16.jpg" alt="Как включить файл подкачки в Windows 11 - 3">

<p>Откроется еще одно окно в котором нам нужно выбрать вкладку &laquo;Дополнительно&raquo;, в разделе &laquo;Виртуальная память&raquo; нажимаем кнопку &laquo;Изменить&raquo;</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/17.jpg" alt="Как включить файл подкачки в Windows 11 - 4">

<p>Появляется список дисков в системе и у каждого будет указан размер файла подкачки</p>

<blockquote>Внимание! При создании файла подкачки будет динамически изменяться размер занимаемого места в указанном диске, но также одновременно будет улучшена общая производительность компьютера</blockquote>

<p>Если вдруг у вас не установлен файл подкачки не на одном диске, то нужно будет выбрать любой диск, если выбранный диск будет формата SSD будет еще лучше, далее выбираем пункт &laquo;По выбору системы&raquo;, затем нажимаем кнопку &laquo;Задать&raquo; и &laquo;OK&raquo;.</p>

<img src="/images/2024/kak-ubrat-stattery-v-igrah-na-videokartah-nvidia/18.jpg" alt="Как включить файл подкачки в Windows 11 - 5">

<p>После этого система может попросить перезагрузить ПК, чтобы включить файл подкачки, перезагружаем. После проверяем как ведут себя игры.</p>