mod utils;

use std::env;

use actix_files as fs;
use actix_web::{get, middleware, web, App, HttpResponse, HttpServer, Responder};
use utils::{read_extensions, AppState};

#[get("/")]
async fn root(data: web::Data<AppState>) -> impl Responder {
    let extensions = &data.extensions;
    HttpResponse::Ok().json(extensions)
}

#[get("/ping")]
async fn ping() -> impl Responder {
    HttpResponse::Ok().body("pong")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    let extensions_dir = env::var("EXTENSIONS_DIR").unwrap_or_else(|_| "../extensions".to_string());
    let extensions_json =
        env::var("EXTENSIONS_JSON").unwrap_or_else(|_| "../extensions.json".to_string());
    let host = env::var("HOST").unwrap_or_else(|_| "http://localhost:8000".to_string());
    println!("Server running at {host}, extensions dir: {extensions_dir}, extensions json: {extensions_json}");
    HttpServer::new(move || {
        App::new()
            .wrap(middleware::Compress::default())
            .app_data(web::Data::new(AppState {
                extensions: read_extensions(&extensions_json, &host),
            }))
            .service(root)
            .service(
                fs::Files::new("/extensions", &extensions_dir)
                    .show_files_listing()
                    .use_last_modified(true),
            )
            .service(ping)
    })
    .bind(("0.0.0.0", 8000))?
    .run()
    .await
}
