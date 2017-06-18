---
layout: archive
title: "Project Gallery"
date: 2016-11-30
modified:
excerpt: "My archive of projects done..."
tags: []
image:
  feature:
  teaser:
---

<div class="tiles">
{% for post in site.categories.projects %}
  {% include post-grid.html %}
{% endfor %}
</div><!-- /.tiles -->
