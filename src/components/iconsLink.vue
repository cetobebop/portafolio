<template>
  <div>
    <a
      :href="href"
      target="_blank"
      class="circle row justify-center items-center col-xs-12 col-md-2 container-icon"
    >
      <q-icon :size="size" :name="icon_name" class="icon" />
    </a>
  </div>
</template>

<script setup>
defineProps(["href", "icon_name", "size"]);
</script>

<style scoped>
.circle {
  text-decoration: none;
  color: #000;
  border: 2px solid rgba(0, 0, 0);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  min-width: 50px;
}
.container-icon:hover {
  background: #000;
  transition: 0.3s;
  border: none;
}

.circle:hover {
  color: #fff;
  transition: 0.3s;
}
</style>
