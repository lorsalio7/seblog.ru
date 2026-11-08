---
layout: "post.njk"
title: "Как установить на панель задач индикатор скорости Интернета в Windows 11"
description: "В этой статье вы узнаете как можно отслеживать скорость интернет-соединения на панели задач в Windows 11, а также сможете контролировать скорость загрузки и выгрузки данных, отслеживать качество вашего провайдера."
tags: ["posts", "computers"]
category: "computers"
categoryText: "Компьютеры"
date: 2023-03-27
permalink: "posts/{{ page.fileSlug }}/"
dropdown: false
---

<p>Индикатор скорости Интернета в панели задач Windows показывает текущую скорость загрузки и отдачи данных. Это полезно при скачивании файлов или просмотре видео онлайн. Также помогает определить проблемы с интернет-соединением.</p>

<p>Для этого нам понадобится программа <strong>TrafficMonitor</strong>. Скачать ее можно с сайта <a href="https://github.com/zhongyang219/TrafficMonitor" rel="nofollow noopener" target="_blank">github.com</a>. Далее в боковой панели будет раздел &quot;Releases&quot; в которой видим последнюю версию программы на момент написания статьи - v1.84.1. Затем жмем на ссылку последней версии</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/1.jpg">

<p>В разделе &quot;Assets&quot; выбираем нужную версию в зависимости от разрядности вашей системы(как узнать разрядность системы: правой кнопкой мыши на кнопке &quot;Пуск&quot; - выбираем пункт &quot;Система&quot; - открывается окно &quot;О системы&quot; - откройте раздел &quot;Характеристики устройства&quot; - в таблице характеристик на строке &quot;Тип системы&quot; будет указана разрядность вашей операционной системы) в моем случае: 64-разрядная операционная система значит я буду скачивать &quot;TrafficMonitor_V1.84.1_x64.zip&quot;. Если у вас будет указана 32-разрядная(x86), то скачивайте &quot;TrafficMonitor_V1.84.1_x86.zip&quot;</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/2.jpg" loading="lazy">

<p>После того как скачали архив с программой открываем его и видим в нем папку:</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/3.jpg" loading="lazy">

<p>Теперь нам нужно извлечь ее на наш диск, я извлеку папку в корень диска <span class="inline-code">C:/</span>.</p>

<p>Мы скачали программу теперь будем её настраивать. Заходим в папку &quot;TrafficMonitor&quot; и запускаем его кликая на &quot;TrafficMonitor.exe&quot;</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/4.jpg" loading="lazy">

<p>Появляется такое плавающее окошко:</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/5.jpg" loading="lazy">

<p>Не переживайте, далее мы настроим его и будет красиво и аккуратно. Нажимаем правой кнопкой мыши по этому плавающему окошку, выбираем пункт &quot;Show Taskbar Window&quot;</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/6.jpg" loading="lazy">

<p>А с пункта &quot;Show Main Window&quot; наоборот снимите галочку(плавающее окошко исчезнет).</p>
<p>Теперь на панеле задач аккуратно установлен индикатор скорости. Далее чтобы программа запускалась каждый раз с включением компьютера отметим это в настройках. Жмем на панеле задач по индикатору и выбираем пункт &quot;Options&quot;, откроются настройки, нам нужно перейти во вкладку &quot;General Settings&quot; в разделе &quot;Application Settings&quot; ставим галочку на пункте &quot;Auto run when Windows starts&quot; и нажимаем кнопку &quot;OK&quot;. Настроек достаточно много и можно настроить TrafficMonitor под себя.</p>

<h2>Возможные неполадки</h2>
<p>Обычно программа сразу из коробки выбирает правильный сетевой адаптер и показывает скорость, но если вдруг у вас не отображается и все стоит по нулям, то нужно будет выбрать вручную. Кликаем правой кнопкой мыши по индикатору и в самом верху будет пункт &quot;Select Network Connections&quot;, наводим на него мышь и видим все сетевые адаптеры вашего ПК:</p>

<img src="/images/2023/kak-ustanovit-na-panel-zadach-indikator-skorosti-interneta-v-windows-11/7.jpg" loading="lazy">

<p>Если компьютер подключен по кабелю, выбираем тот адаптер у которого есть слово <strong>Ethernet</strong>, если их несколько выбирайте по очереди, пока не начнет отображать индикатор.</p>
<p>Если компьютер подключен по <strong>Wi-Fi</strong>, ищите адаптер со словом <strong>Wireless</strong>.</p>