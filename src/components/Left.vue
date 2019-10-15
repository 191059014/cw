<template>
  <div class="left_content">
    <ul class="menu_content">
      <li>
        <router-link to="/user">用户管理</router-link>
      </li>
      <li>
        <router-link to="/role">角色管理</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Left"
  }
</script>

<style scoped>
  .left_content {
    position: fixed;
    width: 200px;
    height: 100%;
    border-right: 1px gainsboro solid;
    top: 50px;
    bottom: 50px;
  }
</style>
