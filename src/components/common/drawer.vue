<template>
  <div>
    <x-header style="background-color: white">
      <div style="color:#757575;font-size: 16px">{{headerTitle}}</div>
      <x-icon slot="overwrite-left" type="navicon" size="26" @click="toggle(true)" style="fill:#757575;margin-top: -2px"></x-icon>
    </x-header>
    <mu-drawer :width="185" :open="open" :docked="docked" @close="toggle()">
      <mu-list @itemClick="docked ? '' : toggle()">
        <mu-list-item @click="route('home')">
          <div class="mu-item">阅读</div>
        </mu-list-item>
        <mu-list-item @click="route('music')">
          <div class="mu-item">音乐</div>
        </mu-list-item>
        <mu-list-item @click="route('movie')">
          <div class="mu-item">影视</div>
        </mu-list-item>
        <mu-list-item @click="route('download')">
          <div class="mu-item">App下载</div>
        </mu-list-item>
        <mu-list-item @click="route('about')">
          <div class="mu-item">关于</div>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
  import { XHeader } from 'vux'
  import { drawerRoutes } from '../../constants/Constants'
  export default {
    components: {
      XHeader
    },
    data () {
      return {
        docked: true,
        open: false,
        headerTitle: drawerRoutes['home']
      }
    },
    methods: {
      toggle (flag) {
        this.open = !this.open
        this.docked = !flag
      },
      route (routePage) {
        this.$router.push({
          name: routePage
        })
        this.headerTitle = drawerRoutes[routePage]
      }
    }
  }
</script>
<style>
  .mu-item {
    display: inline-flex;
    align-items: center;
  }
</style>
