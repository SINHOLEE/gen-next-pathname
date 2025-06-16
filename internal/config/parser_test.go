package config

import (
	"testing"
)

func TestParser_Parse(t *testing.T) {
	tests := []struct {
		name       string
		configPath string
		wantErr    bool
	}{
		{
			name:       "기본 next.config.js 파일 파싱",
			configPath: "../../test-fixtures/app-router/next.config.js",
			wantErr:    false,
		},
		{
			name:       "존재하지 않는 설정 파일",
			configPath: "not-exists.js",
			wantErr:    true,
		},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			p := NewParser(tt.configPath)
			got, err := p.Parse()
			if (err != nil) != tt.wantErr {
				t.Errorf("Parser.Parse() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if !tt.wantErr && got == nil {
				t.Error("Parser.Parse() got = nil, want config")
			}
		})
	}
} 