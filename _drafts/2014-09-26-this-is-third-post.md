---
title: the third post title
url: testurl
---

This the third post, check it out!

`var a`

{% highlight javascript %}
var abc = function () {

}
{% endhighlight %}

* first one
* second one
* second-first one

The title is: {{ page.title }}

Link to the first post: [Link]({% post_url 2014-09-26-welcome-to-jekyll %})

Site URL [Site url]({{ site.url }})

{% highlight ruby linenos %}
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
{% endhighlight %}

```
def show
  @widget = Widget(params[:id])
  respond_to do |format|
    format.html # show.html.erb
    format.json { render json: @widget }
  end
end
```

{{ site.time }} {{ site.related_posts }}

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
      {{ post.excerpt | strip_html }}
    </li>
  {% endfor %}
</ul>
