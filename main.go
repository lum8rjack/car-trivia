package main

import (
	"embed"
	"io/fs"
	"net/http"
	"os"
)

//go:embed build
var build embed.FS

func main() {
	port := os.Getenv("PORT")

	// Setup the file system
	fsys, err := fs.Sub(build, "build")
	if err != nil {
		panic(err)
	}

	// Handle requests
	http.Handle("/", http.FileServer(http.FS(fsys)))
	if port == "" {
		port = "8000"
	}
	http.ListenAndServe(":"+port, nil)
}
