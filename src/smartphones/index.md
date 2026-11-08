---
title: "Настройки, полезные приложения и лайфхаки для комфортного использования смартфоном"
description: "Полезные советы по использованию, редкие приложения, тонкие настройки и лайфхаки помогающие сделать смартфон еще более функциональным и удобным в использовании"
cat: Смартфоны
layout: "category.njk"
tags: category
pagination:
  data: collections.smartphones
  size: 10
  reverse: true
permalink: "/smartphones/{% if pagination.pageNumber > 0 %}/page-{{ pagination.pageNumber + 1 }}{% endif %}/index.html"
tag: "/smartphones/"
---

{% for post in pagination.items %}
  {% include "small-post.njk" %}
{% endfor %}

