---
title: "Скачать авторские иконки и обои на свое устройство"
description: "Здесь вы найдете уникальные бесплатные авторские обои и иконки, которые добавят стиля и индивидуальности для ваших устройств"
cat: Загрузки
layout: "category.njk"
tags: category
pagination:
  data: collections.downloads
  size: 10
  reverse: true
permalink: "/downloads/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/downloads/"
---

{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}