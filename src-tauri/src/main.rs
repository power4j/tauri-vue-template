// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use tauri::State;

pub struct AppCtx {
    app_name: String,
}

#[derive(Serialize, Debug)]
pub struct HelloResponse {
    pub welcome_msg: String,
}

#[tauri::command]
pub fn cmd_hello(
    user_name: Option<String>,
    ctx: State<'_, AppCtx>,
) -> Result<HelloResponse, anyhow::Error> {
    match user_name {
        Some(user_name) => Ok(HelloResponse {
            welcome_msg: format!("welcome {}", user_name),
        }),
        None => Ok(HelloResponse {
            welcome_msg: format!("welcome anonymous"),
        }),
    }
}
fn main() {
    tauri::Builder::default()
        .manage(AppCtx {
            app_name: "tauri app".to_string(),
        })
        .invoke_handler(tauri::generate_handler![cmd_hello,])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
