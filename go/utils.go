package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"os"
)

// Extension represents the structure of each extension object in the JSON file
type Extension map[string]interface{}

// readExtensions reads the JSON file, updates the download URLs, and returns the modified data
func ReadExtensions(path, host string) ([]Extension, error) {
	// Read the file contents
	jsonFile, err := os.Open(path)
	if err != nil {
		return nil, err
	}
	defer jsonFile.Close()

	byteValue, _ := ioutil.ReadAll(jsonFile)

	// Parse the JSON data
	var data []Extension
	if err := json.Unmarshal(byteValue, &data); err != nil {
		return nil, err
	}

	// Update the download_url field for each item
	for i, item := range data {
		if downloadURL, ok := item["download_url"].(string); ok {
			data[i]["download_url"] = fmt.Sprintf("%s%s", host, downloadURL)
		}
	}

	return data, nil
}
