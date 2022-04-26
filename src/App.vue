<template>
  <LayoutHeader />
  <router-view></router-view>
  <LayoutFooter />
</template>

<script>
import LayoutHeader from "@/components/LayoutHeader"
import LayoutFooter from "@/components/LayoutFooter";

export default {
  name: 'App',
  components: {
    LayoutHeader,
    LayoutFooter
  }
}
</script>

<style>
</style>
