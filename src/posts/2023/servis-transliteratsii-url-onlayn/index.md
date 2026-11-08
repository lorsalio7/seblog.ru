---
layout: "post.njk"
title: "Сервис транслитерации url онлайн"
description: "Сервис транслитерации поможет веб-мастерам переводить названия страниц или статей в названия страниц состоящих из латинских символов"
tags: ["posts", "services"]
category: "services"
categoryText: "Сервисы"
date: 2023-10-02
permalink: "posts/{{ page.fileSlug }}/"
dropdown: false
custom_scripts: "/js/translit-url.js"
custom_styles: "/css/translit-url.css"
---

<p>Этот сервис поможет веб-мастерам переводить названия ссылок, статей на кириллице в URL-адреса состоящие из латинских букв. Это позволит улучшить SEO-оптимизацию сайта.</p>

<form class="translit-form" action="#">
  <div class="translit-form__row">
    <label class="translit-form__label" for="input-text-original">Введите текст который необходимо преобразовать:</label>
    <textarea class="translit-form__textarea" type="text" rows="4" name="input-text" id="input-text-original" placeholder="..."></textarea>
    <button class="translit-form__button" type="button" id="generate-translit-button">Преобразовать</button>
    <span class="translit-form__result"></span>
  </div>
</form>