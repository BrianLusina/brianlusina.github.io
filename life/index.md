---
layout: archive
title: "Life"
date: 2017-5-9
modified:
excerpt: "Life and its simplicities"
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.life %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
