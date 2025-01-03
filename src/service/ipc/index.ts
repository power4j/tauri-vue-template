import { invoke } from '@tauri-apps/api/core'
import type { HelloResponse } from './model'

export async function callHello(userName?: string): Promise<HelloResponse> {
  return invoke<HelloResponse>('cmd_hello', { userName: userName })
}
