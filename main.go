package main

import (
	"embed"
	"net/http"
	"os"
)

//go:embed index.html
//go:embed static/*
var static embed.FS

func main() {
	port := os.Getenv("PORT")
	http.Handle("/", http.FileServer(http.FS(static)))
	if port == "" {
		port = "8000"
	}
	http.ListenAndServe(":"+port, nil)
}
