---
layout: "post.njk"
title: "Скачать превью с видео ютуб"
description: "Этот сервис поможет скачать превью изображение с видео ютуб в разном качестве"
tags: ["posts", "services"]
category: "services"
categoryText: "Сервисы"
date: 2024-10-10
permalink: "posts/{{ page.fileSlug }}/"
dropdown: false
custom_scripts: "/js/image-preview.min.js"
custom_styles: "/css/image-preview.min.css"
---

<p>Этот сервис поможет вам скачать изображение превью с любого видео Ютуб в различном качестве. Это может понадобится например если вы хотите показать в каком стиле вы хотите чтобы вам дизайнер создал превьюшку для видео и т.д.</p>

<form class="download-preview-form" action="#">
  <div class="download-preview-form__row">
    <div class="download-preview-form__item">
      <label class="download-preview-form__label" for="id-video">Идентификатор видео</label>
      <input class="download-preview-form__input" type="text" id="id-video" placeholder="Пример: NbrKK7rwfPE">
    </div>
    <div class="download-preview-form__item">
      <label class="download-preview-form__label" for="quality-image">Качество изображения</label>
      <div class="download-preview-form__dropdown">
        <select class="download-preview-form__input download-preview-form__select" id="quality-image" name="quality-image">
          <option value="undefined">Выберите качество</option>
          <option value="maxresdefault">Максимальное</option>
          <option value="hqdefault">Высокое</option>
          <option value="mqdefault">Среднее</option>
          <option value="sddefault">Низкое</option>
        </select>
      </div>
    </div>
  </div>
  <div class="download-preview-form__wrapper">
    <a class="download-preview-form__download-link" target="_blank">Скачать изображение</a>
  </div>
</form>
<p>Где можно получить идентификатор видео:</p>
<div class="links-column">
  <p>Идентификатор можно легко получить из ссылки на видео примеры:</p><span class="inline-code block">https://www.youtube.com/watch?v=<span class="mark">NbrKK7rwfPE</span></span><span class="inline-code block">https://youtu.be/<span class="mark">NbrKK7rwfPE</span></span>
</div>
<p>Вводите идентификатор правильно, иначе вы получите такое изображение:</p>
<img class="download-preview-image" src="/img/empty-yt-preview.svg" width="900" height="506" alt="Скачать превью с видео ютуб">