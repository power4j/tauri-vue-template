<template>
  <div class="common-layout">
    <el-container>
      <el-header><BaseHeader /></el-header>
      <el-main>
        <router-view v-slot="{ Component }">
          <keep-alive>
            <component :is="Component" v-if="$route.meta.keepAlive" :key="$route.name" />
          </keep-alive>
          <component :is="Component" v-if="!$route.meta.keepAlive" :key="$route.name" />
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts"></script>
