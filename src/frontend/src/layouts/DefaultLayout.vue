<template>
  <header class="header">
    <div class="header__logo">
      <router-link :to="{ name: 'Index' }" class="logo">
        <img
          :src="require(`../assets/img/logo.svg`)"
          alt="V!U!E! Pizza logo"
          width="90"
          height="40"
        />
      </router-link>
    </div>
    <div class="header__cart">
      <router-link :to="{ name: 'Cart' }">0 ₽ </router-link>
    </div>
    <div class="header__user">
      <router-link :to="{ name: 'Login' }" class="header__login">
        <span>Войти</span>
      </router-link>
    </div>
  </header>
  <slot></slot>
</template>

<script>
import Index from "../views/Index";
import Cart from "../views/Cart";
import Login from "../views/Login";

export default {
  name: "DefaultLayout",
  component: {
    Index,
    Cart,
    Login,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/layout/header";
</style>
