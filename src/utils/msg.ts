import { ElMessage } from 'element-plus'

export const MsgClosable = {
  success: (msg = 'Success', timeout = 3000) =>
    ElMessage({
      showClose: true,
      message: msg,
      type: 'success',
      duration: timeout
    }),
  error: (msg: string, timeout = 30000) =>
    ElMessage({
      showClose: true,
      message: msg,
      type: 'error',
      duration: timeout
    }),
  warning: (msg: string, timeout = 3000) =>
    ElMessage({
      showClose: true,
      message: msg,
      type: 'warning',
      duration: timeout
    }),
  info: (msg: string, timeout = 3000) =>
    ElMessage({
      showClose: true,
      message: msg,
      type: 'info',
      duration: timeout
    })
}
