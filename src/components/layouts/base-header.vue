<script lang="ts" setup>
import { toggleDark } from '@/composables'

import { Refrigerator, HomeFilled } from '@element-plus/icons-vue'
</script>
<template>
  <el-menu mode="horizontal" router default-active="/">
    <el-menu-item index="/">
      <template #title>
        <el-icon><HomeFilled /></el-icon>
      </template>
    </el-menu-item>
    <el-sub-menu index="general">
      <template #title>
        <el-icon><Refrigerator /></el-icon>
        <span>Demo</span>
      </template>
      <el-menu-item index="/demo/hello-world">Hello!</el-menu-item>
    </el-sub-menu>
    <el-menu-item h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>
  </el-menu>
</template>
