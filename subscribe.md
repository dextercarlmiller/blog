---
layout: page
title: Subscribe
permalink: /subscribe/
---

<div class="subscribe-page">

<span class="about-eyebrow">Newsletter</span>
<h1 class="subscribe-heading">Stay in the loop</h1>
<p class="subscribe-sub">I write about building software, growing in faith, and chasing fitness goals. Drop your email below and I'll send a note whenever a new post goes up. No spam &mdash; just new posts, whenever I write them.</p>

<!-- PASTE MAILCHIMP ACTION URL HERE
     Find it in Mailchimp: Audience -> Signup forms -> Embedded forms -> copy the action="..." value.
     It looks like: https://yourname.us1.list-manage.com/subscribe/post?u=XXXXX&amp;id=XXXXX
     Replace the action attribute value below. Also update the hidden anti-bot field name. -->
<form
  action="PASTE_MAILCHIMP_ACTION_URL_HERE"
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
  <!-- Mailchimp anti-bot honeypot field — do not remove or change -->
  <div style="position:absolute;left:-5000px;" aria-hidden="true">
    <input type="text" name="b_REPLACE_WITH_U_VALUE_REPLACE_WITH_ID" tabindex="-1" value="">
  </div>
  <button type="submit" class="subscribe-btn">Subscribe</button>
</form>

<p class="subscribe-note"><em>No spam. Unsubscribe any time.</em></p>

</div>
