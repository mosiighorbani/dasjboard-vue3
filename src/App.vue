<template>
<div>
  <Sidebar />
  <section id="content" :class="open ? 'active' : 'inactive' ">
    <Header />
    <section id="items">
      <div class="container-fluid">
          <div class="row">
              <div class="col-12" id="main">
                <router-view></router-view>
              </div>
          </div>
      </div>
    </section>
  </section>
</div>
</template>

<script setup>
import Sidebar from "./components/Sidebar.vue";
import Header from "./components/Header.vue"

import {ref} from 'vue';

let open = ref(true);
</script>
