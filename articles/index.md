---
layout: archive
title: "Code"
date: 2016-05-30
modified:
excerpt: "A collection of bits, bytes, bugs and snippets."
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.articles %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
