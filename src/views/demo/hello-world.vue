<script setup lang="ts">
import { callHello } from '@/service'
import { type HelloResponse } from '@/service/ipc/model'
import { MsgClosable } from '@/utils/msg'

const handleClick = () => {
  callHello('john').then((res: HelloResponse) => {
    MsgClosable.success(res.welcome_msg)
  })
}
</script>

<template>
  <el-row justify-center>
    <el-col :sm="12" :lg="6">
      <el-button type="success" plain @click="handleClick">Call Tauri</el-button>
    </el-col>
  </el-row>
</template>
