<template>
  <div>
    从这里开始
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue';
import { login } from '../request/api.js'
onMounted(() => {
  console.log('我创建了');
  let data = {
    id: "xxx"
  }
  login(data).then((res) => {
    console.log(res.data);
  })
})

</script>

<style></style>