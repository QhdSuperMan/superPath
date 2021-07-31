<html>
  <head>
    <title>Hacker News</title>
    <link rel="stylesheet" href="/public/css/news.css" />
  </head>
  <body>
    <ul class="news-view view">
      {% for item in list %}
        <li class="item">
          <a href="javascript:void(0)">{{ item.title }} {{ helper.relativeTime(item.time) }}</a>
          {{ helper.testsss  }}
        </li>
      {% endfor %}
    </ul>
  </body>
</html>