---
layout: "post.njk"
title: "Проверка мыши на двойной клик онлайн"
description: "Сервис онлайн проверки мыши на двойной клик поможет быстро определить как часто сбоит ваше устройство"
tags: ["posts", "services"]
category: "services"
categoryText: "Сервисы"
date: 2023-10-01
permalink: "posts/{{ page.fileSlug }}/"
dropdown: false
custom_scripts: "/js/d-mouse.js"
custom_styles: "/css/d-mouse.css"
---

<p>Приходит время когда компьютерная мышь начинает сбоить, то текст выделит когда нужно было только установить курсор, то окно раскроется на весь экран когда нужно было только его перенести в другое место, и еще много разных неприятностей. Для того чтобы точно убедиться как часто создает двойной клик ваша мышь поможет этот сервис.</p>

<p>Для удобства слева есть таймер, чтобы кликать равномерно и неспеша раз в секунду, просто нажмите кнопку отсчета и начните тестировать в поле справа:</p>

<div class="d-mouse">
  <div class="d-mouse__timer-field">
    <span class="d-mouse__seconds">60</span>
    <button class="d-mouse__button" type="button">Начать отсчет</button>
  </div>
  <div class="d-mouse__action-field">
    <span class="d-mouse__text">Кликать здесь</span>
  </div>
</div>

<p class="d-mouse__result-text">Результат:</p>

<div class="d-mouse-result">
  <div class="d-mouse-result__field">
    <span class="d-mouse-result__subject">Одинарных</span>
    <span class="d-mouse-result__counter d-mouse-result__counter--single">0</span>
  </div>
  <div class="d-mouse-result__field">
    <span class="d-mouse-result__subject">Двойных</span>
    <span class="d-mouse-result__counter d-mouse-result__counter--double">0</span>
  </div>
</div>

<p>Если результат показывает больше 1 клика на 100 одинарных, то стоит задуматься о замене переключателей(свитчей) или приобрести новую мышь.</p>