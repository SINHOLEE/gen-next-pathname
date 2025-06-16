package config

import (
	"encoding/json"
	"os"
	"path/filepath"
)

// NextConfig represents the Next.js configuration
type NextConfig struct {
	PageExtensions []string          `json:"pageExtensions"`
	Experimental   ExperimentalConfig `json:"experimental"`
	TrailingSlash  bool              `json:"trailingSlash"`
	BasePath       string            `json:"basePath"`
	AssetPrefix    string            `json:"assetPrefix"`
}

// ExperimentalConfig represents experimental Next.js features
type ExperimentalConfig struct {
	AppDir bool `json:"appDir"`
}

// Parser handles Next.js configuration file parsing
type Parser struct {
	configPath string
}

// NewParser creates a new Next.js config parser
func NewParser(configPath string) *Parser {
	return &Parser{
		configPath: configPath,
	}
}

// Parse reads and parses the Next.js configuration
func (p *Parser) Parse() (*NextConfig, error) {
	// TODO: Implement config file parsing
	// TODO: Handle different config file formats (js, mjs, ts)
	// TODO: Support package.json next field
	return &NextConfig{}, nil
} 