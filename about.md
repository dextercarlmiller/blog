<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About – Dexter Miller</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

    body {
      background: #fff;
      color: #374151;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 1rem;
      line-height: 1.7;
    }

    /* ── Nav ── */
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1.5rem;
      padding: 1rem 2rem;
      border-bottom: 1px solid #f3f4f6;
    }

    .nav-brand {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      text-decoration: none;
      color: #111827;
      font-weight: 600;
      font-size: 0.95rem;
    }

    .nav-logo {
      background: #111827;
      color: #fff;
      font-size: 0.72rem;
      font-weight: 700;
      width: 28px;
      height: 28px;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      letter-spacing: 0.01em;
    }

    .nav-links {
      display: flex;
      gap: 1.25rem;
    }

    .nav-links a {
      text-decoration: none;
      font-size: 0.95rem;
      color: #6b7280;
    }

    .nav-links a.active,
    .nav-links a:hover {
      color: #3b82f6;
    }

    /* ── Page container ── */
    .container {
      max-width: 620px;
      margin: 0 auto;
      padding: 4rem 1.5rem 6rem;
    }

    /* ── Header ── */
    .about-eyebrow {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.6rem;
    }

    .about-title {
      font-size: 2.4rem;
      font-weight: 700;
      color: #111827;
      line-height: 1.15;
      margin-bottom: 1rem;
      letter-spacing: -0.02em;
    }

    .about-intro {
      font-size: 1rem;
      color: #6b7280;
      margin-bottom: 3rem;
      max-width: 480px;
    }

    /* ── Section ── */
    .section {
      margin-bottom: 2.75rem;
    }

    .section-label {
      font-size: 0.72rem;
      font-weight: 600;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: #9ca3af;
      margin-bottom: 0.85rem;
    }

    .section p {
      color: #374151;
      margin-bottom: 0.9rem;
      font-size: 1rem;
    }

    .section p:last-child {
      margin-bottom: 0;
    }

    a {
      color: #3b82f6;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    em {
      font-style: italic;
    }

    /* ── Project cards ── */
    .about-projects {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.85rem;
      margin-top: 0.5rem;
    }

    @media (max-width: 480px) {
      .about-projects { grid-template-columns: 1fr; }
      .about-title { font-size: 1.9rem; }
    }

    .project-card {
      border: 1px solid #e5e7eb;
      border-radius: 8px;
      padding: 1.1rem 1.25rem;
      transition: border-color 0.15s;
    }

    .project-card:hover {
      border-color: #93c5fd;
    }

    .project-name {
      font-size: 0.92rem;
      font-weight: 600;
      color: #111827;
      margin-bottom: 0.3rem;
    }

    .project-desc {
      font-size: 0.875rem;
      color: #6b7280;
      line-height: 1.5;
      margin-bottom: 0;
    }

    /* ── Divider ── */
    hr {
      border: none;
      border-top: 1px solid #f3f4f6;
      margin: 2.5rem 0;
    }
  </style>
</head>
<body>

  <nav>
    <a href="/" class="nav-brand">
      <span class="nav-logo">DM</span>
      Dexter Miller
    </a>
    <div class="nav-links">
      <a href="/blog">Blog</a>
      <a href="/about" class="active">About</a>
    </div>
  </nav>

  <div class="container">

    <header>
      <p class="about-eyebrow">About Me</p>
      <h1 class="about-title">Hey, I'm Dexter.</h1>
      <p class="about-intro">
        Web developer and entrepreneur based in Fort Wayne, Indiana.
        I build websites for local businesses and digital products I believe in.
      </p>
    </header>

    <hr />

    <div class="section">
      <p class="section-label">What I Do</p>
      <p>
        I run <a href="https://github.com/dextercarlmiller/Fort-Wayne-Web-Studio">Fort Wayne Web Studio</a> with a simple mission: <em>get every business in Fort Wayne online</em>. That means working with lawn care crews, barber shops, hair salons, auto shops — anyone with a hustle that deserves a real presence on the web.
      </p>
      <p>
        I've always believed that a well-built website can be transformative for a small business. It's the difference between someone finding you on Google or driving past a competitor. I take that seriously.
      </p>
      <p>
        Beyond client work, I'm building my own products — because there's something different about building something that's yours.
      </p>
    </div>

    <div class="section">
      <p class="section-label">Projects I'm Working On</p>
      <div class="about-projects">
        <div class="project-card">
          <p class="project-name">Fort Wayne Businesses</p>
          <p class="project-desc">A directory connecting locals with the best businesses in the city.</p>
        </div>
        <div class="project-card">
          <p class="project-name">Fort Wayne Web Studio</p>
          <p class="project-desc">Building websites for every Fort Wayne business in need.</p>
        </div>
      </div>
    </div>

    <div class="section">
      <p class="section-label">This Blog</p>
      <p>
        This is a place for me to think out loud — about building products, working with clients, lessons from running a small studio, and the Fort Wayne tech scene. No filter, no fluff.
      </p>
      <p>If something I write resonates with you, I'd love to hear it.</p>
    </div>

  </div>

</body>
</html>
