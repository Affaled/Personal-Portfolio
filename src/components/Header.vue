<script></script>

<template>
  <header>
    <div class="content">
      <nav class="nav">
        <ul class="menu">
          <li>Projetos</li>
          <li>Biografia</li>
          <li>Início</li>
        </ul>
        <h1>Affaled</h1>
        <ul>
          <li>Contact</li>
          <li>
            <a href="https://github.com/affaled" target="_blank"
              ><i class="fab fa-github" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/lucas-affaled/" target="_blank"
              ><i class="fab fa-linkedin" aria-hidden="true"></i
            ></a>
          </li>
          <li>
            <a href="https://instagram.com/affaled_dev" target="_blank"
              ><i class="fab fa-instagram" aria-hidden="true"></i
            ></a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss" name="_header" scoped>
@use "../styles/utils/" as u;
@use "../styles/global/" as g;
@use "../styles/layout/" as l;

header {
  display: grid;
  height: u.rem(88);
  grid-template-columns: 1fr clamp(u.rem(200), 83.33vw, u.rem(1200)) 1fr;
  grid-template-rows: u.rem(88);

  .content {
    @include l.g-column(2, 3);
    @include l.flex(center, center);
    @include l.width(u.rem(200), 100%, u.rem(1200));
    @include l.height(u.rem(88), 100%, u.rem(88));

    .nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    h1 {
      margin: 0;
      text-transform: uppercase;
    }
  }
}
</style>
