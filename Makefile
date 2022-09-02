NAME := carTrivia
BUILD := go build -ldflags "-s -w" -trimpath
OUTPUT := releases

default:
	$(BUILD) -o $(OUTPUT)/$(NAME)

clean:
	rm releases/*

linux:
	echo "Compiling for Linux x64"
	GOOS=linux GOARCH=amd64 $(BUILD) -o $(OUTPUT)/$(NAME)-Linux64

windows:
	echo "Compiling for Windows x64"
	GOOS=windows GOARCH=amd64 $(BUILD) -o $(OUTPUT)/$(NAME)-Windows64.exe

mac:
	echo "Compiling for Mac x64"
	GOOS=darwin GOARCH=amd64 $(BUILD) -o $(OUTPUT)/$(NAME)-Darwin64

arm:
	echo "Compiling for Linux Arm"
	GOOS=linux GOARCH=arm $(BUILD) -o $(OUTPUT)/$(NAME)-LinuxArm

all: linux windows mac arm


