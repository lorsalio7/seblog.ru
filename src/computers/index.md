---
title: "Советы, настройка и оптимизация работы персональных компьютеров"
description: "Настройки, полезные программы, советы, инструкции и решения возникших проблем при использовании вашего компьютера"
cat: Компьютеры
layout: "category.njk"
tags: category
pagination:
  data: collections.computers
  size: 10
  reverse: true
permalink: "/computers/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/computers/"
---

{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}