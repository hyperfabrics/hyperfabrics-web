<template>
  <header :class="blok.style.join(' ')" v-editable="blok">
    <div class="container" :class="blok.container_style.join(' ')">
      <b-navbar toggleable="md" type="light"  >
        <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
        <b-navbar-brand>
          <nuxt-link :class="blok.logo_style.join(' ')" @click.native="$mixpanel.track('logo')" to="/" v-if="blok.logo">
            <img :src="blok.logo" :height="blok.logo_height" alt="Logo">
          </nuxt-link>
        </b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <ul v-if="blok.second_nav_links && blok.second_nav_links.length" class="navbar-nav justify-content-end d-lg-flex ml-md-auto">
            <component :key="blok._uid" v-for="blok in blok.second_nav_links" :blok="blok" :is="blok.component | dashify"></component>
            <!-- <b-nav-item-dropdown right>
              <template slot="button-content">
                <a>DEMO</a>
              </template>
              <b-dropdown-item href="" @click.native="$mixpanel.track('sign-in')">Sign In</b-dropdown-item>
              <b-dropdown-item to="/signup" @click.native="$mixpanel.track('sign-up')">Sign Up</b-dropdown-item>
            </b-nav-item-dropdown> -->
            <div v-if="blok.btn && blok.btn.length">
              <component :key="blok._uid" v-for="blok in blok.btn" :blok="blok" :is="blok.component | dashify"></component>
            </div>
          </ul>
        </b-collapse>
      </b-navbar>
    </div>
  </header>
</template>

<script>
  export default {
    props: ['blok']
  };
</script>
