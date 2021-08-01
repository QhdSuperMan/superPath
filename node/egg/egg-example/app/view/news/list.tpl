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
        </li>
      {% endfor %}
    </ul>

    <span>{{ helper.shtml(html) }}</span>
    <form action="/form/post" method='post'>
      <input type="text" name='username' >
      <input type="text" name='password' >
      <input type="submit">
    </form>
    {{ xssStr }}
  </body>
</html>