---
layout: page
title: Subscribe
permalink: /subscribe/
---

<div class="subscribe-page">

<h1 class="subscribe-heading">Stay in the loop</h1>
<p class="subscribe-sub">I write about building software, growing in faith, and chasing fitness goals — the things I keep coming back to. Drop your email below and I'll send a note whenever a new post goes up.</p>

<!-- TODO: Replace the action URL below with your Mailchimp form action URL.
     Find it in Mailchimp → Audience → Signup forms → Embedded forms → copy the action="..." value.
     It will look like: https://yourname.us1.list-manage.com/subscribe/post?u=XXXXX&amp;id=XXXXX -->
<form
  action="PASTE_YOUR_MAILCHIMP_ACTION_URL_HERE"
  method="post"
  class="subscribe-form"
  target="_blank"
  novalidate
>
  <input
    type="email"
    name="EMAIL"
    class="subscribe-input"
    placeholder="your@email.com"
    required
    aria-label="Email address"
  >
  <!-- Mailchimp anti-bot field — do not remove -->
  <div style="position:absolute;left:-5000px;" aria-hidden="true">
    <input type="text" name="b_PLACEHOLDER_u_PLACEHOLDER_id" tabindex="-1" value="">
  </div>
  <button type="submit" class="subscribe-btn">Subscribe</button>
</form>

<p class="subscribe-note"><em>No spam. Just new posts, whenever I write them.</em></p>

</div>
