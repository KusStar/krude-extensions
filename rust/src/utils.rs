use std::{fs};

use serde_json::Value;

pub struct AppState {
    pub extensions: Vec<Value>,
}

pub fn read_extensions(path: &str, host: &str) -> Vec<Value> {
    // read extensions.json
    let json = fs::read_to_string(path).unwrap();
    let data: Vec<Value> = serde_json::from_str(&json).unwrap();

    data.into_iter()
        .map(|mut item| {
            if let Some(download_url) = item["download_url"].as_str() {
                item["download_url"] = format!("{}{}", host, download_url).into();
            }
            item
        })
        .collect()
}
