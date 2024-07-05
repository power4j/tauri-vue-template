use serde::Serialize;
use tauri::State;
#[derive(Debug, thiserror::Error)]
pub enum Error {
    #[error(transparent)]
    Io(#[from] std::io::Error),
    #[error(transparent)]
    Other(#[from] anyhow::Error),
}

// we must manually implement serde::Serialize
impl serde::Serialize for Error {
    fn serialize<S>(&self, serializer: S) -> Result<S::Ok, S::Error>
    where
        S: serde::ser::Serializer,
    {
        serializer.serialize_str(self.to_string().as_ref())
    }
}

pub struct AppCtx {
    pub app_name: String,
}

#[derive(Serialize, Debug)]
pub struct HelloResponse {
    pub welcome_msg: String,
}

#[tauri::command]
pub fn cmd_hello(
    user_name: Option<String>,
    ctx: State<'_, AppCtx>,
) -> Result<HelloResponse, Error> {
    match user_name {
        Some(user_name) => Ok(HelloResponse {
            welcome_msg: format!("welcome to {}: {}!", ctx.app_name, user_name),
        }),
        None => Ok(HelloResponse {
            welcome_msg: format!("welcome to {}: anonymous!", ctx.app_name),
        }),
    }
}
