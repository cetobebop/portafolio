<template>
  <div class="padding black">
    <div class="row justify-center q-gutter-md">
      <a
        href="https://github.com/cetobebop"
        target="_blank"
        class="circle row justify-center items-center col-xs-12 col-md-2 container-icon"
      >
        <q-icon size="md" name="fa-brands fa-github" class="icon" />
      </a>
      <a
        href="https://github.com/cetobebop"
        target="_blank"
        class="circle row justify-center items-center col-xs-12 col-md-2 container-icon"
      >
        <q-icon size="sm" name="fa-brands fa-twitter " class="icon" />
      </a>
      <a
        href="https://linkedin.com/in/carlos-torrens-orta-212a13287"
        target="_blank"
        class="circle row justify-center items-center col-xs-12 col-md-2 container-icon"
      >
        <q-icon size="sm" name="fa-brands fa-linkedin-in" class="icon" />
      </a>
    </div>
    <h1 class="text-h4 q-mt-lg q-mb-none text-weight-thin text-center">
      {{ $t(`footerComponents.title`) }}
    </h1>
  </div>
</template>

<style scoped>
.circle {
  text-decoration: none;
  color: #fff;
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-width: 50px;
}
.padding {
  padding: 60px 40px 60px 40px;
}
.black {
  background: #000;
}

.container-icon:hover {
  background: #fff;
  transition: 0.3s;
  border: none;
}

.container-icon:hover > .icon {
  color: #000;
  transition: 0.3s;
}
</style>
