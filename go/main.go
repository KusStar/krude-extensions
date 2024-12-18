package main

import (
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

func getenv(key, fallback string) string {
	value := os.Getenv(key)
	if len(value) == 0 {
		return fallback
	}
	return value
}

func main() {
	println("Server running at http://localhost:8000/")

	r := gin.Default()
	r.Use(cors.Default())

	extensions_dir := getenv("EXTENSIONS_DIR", "../extensions")
	extensions_json := getenv("EXTENSIONS_JSON", "../extensions.json")
	host := getenv("HOST", "http://localhost:8000")
	extensions, err := ReadExtensions(extensions_json, host)
	if err != nil {
		return
	}

	r.GET("/ping", func(c *gin.Context) {
		c.String(http.StatusOK, "pong")
	})
	r.GET("/", func(c *gin.Context) {
		c.JSON(http.StatusOK, extensions)
	})
	r.StaticFS("/extensions", http.Dir(extensions_dir))
	r.Run("0.0.0.0:8000")
}
