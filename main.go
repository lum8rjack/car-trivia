package main

import (
    "net/http"
    "embed"
)

//go:embed index.html
//go:embed static/*
var static embed.FS

func main() {
    http.Handle("/", http.FileServer(http.FS(static)))
    http.ListenAndServe(":8000", nil)
}