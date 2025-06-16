package generator

import (
	"os"
	"path/filepath"

	"github.com/siny/gen-next-pathname/internal/parser"
)

// TypeScriptGenerator handles TypeScript file generation
type TypeScriptGenerator struct {
	outputPath string
	routes     *parser.Route
}

// NewTypeScriptGenerator creates a new TypeScript generator
func NewTypeScriptGenerator(outputPath string, routes *parser.Route) *TypeScriptGenerator {
	return &TypeScriptGenerator{
		outputPath: outputPath,
		routes:     routes,
	}
}

// Generate creates TypeScript files with route definitions
func (g *TypeScriptGenerator) Generate() error {
	// TODO: Generate route types
	// TODO: Generate path constants
	// TODO: Generate utility functions
	return nil
} 