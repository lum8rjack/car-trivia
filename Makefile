NAME := cartrivia
BUILD := go build -ldflags "-s -w" -trimpath

default:
	$(BUILD) -o $(NAME).bin

clean:
	rm -rf cartrivia*.bin
	rm -rf cartrivia*.exe

linux:
	@echo "Compiling for Linux x64"
	GOOS=linux GOARCH=amd64 $(BUILD) -o $(NAME)-Linux64.bin

windows:
	@echo "Compiling for Windows x64"
	GOOS=windows GOARCH=amd64 $(BUILD) -o $(NAME)-Windows64.exe

mac:
	@echo "Compiling for Mac x64"
	GOOS=darwin GOARCH=amd64 $(BUILD) -o $(NAME)-Darwin64.bin

arm:
	@echo "Compiling for Linux Arm"
	GOOS=linux GOARCH=arm $(BUILD) -o $(NAME)-LinuxArm.bin

