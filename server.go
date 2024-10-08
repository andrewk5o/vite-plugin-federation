package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type Modules struct {
	Name string `json:"name"`
	URL  string `json:"url"`
}

var modules = []Modules{
	{Name: "moduleOne", URL: "http://localhost:3001"},
	{Name: "moduleTwo", URL: "http://localhost:3002"},
}

func handler(w http.ResponseWriter, r *http.Request) {
	if r.Method == "GET" && r.URL.Path == "/" {

		json, err := json.Marshal(modules)

		if err != nil {
			http.Error(
				w, err.Error(), http.StatusInternalServerError)
		}

		w.Header().Set("Content-Type", "application/json")
		w.Header().Add("Access-Control-Allow-Origin", "*")
		w.WriteHeader(http.StatusOK)
		w.Write(json)
	}
}

func main() {
	http.HandleFunc("/", handler)
	log.Fatal(http.ListenAndServe(":8080", nil))
}
