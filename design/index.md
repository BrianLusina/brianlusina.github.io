---
layout: archive
title: "Design"
date: 2016-05-30T11:39:03-04:00
modified:
excerpt: "Good art is a taste. Good design is an opinion"
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.design %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
