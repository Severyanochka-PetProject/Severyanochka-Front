function getInputNumbersValue (element: any): string {
    return element.value.replace(/\D/g, "");
}

function phoneMask (element: string) {
    let phoneInput: HTMLInputElement | null = document.querySelector(element);

    phoneInput!.addEventListener("input", (event: Event) => {
        let inputNumbersValue = getInputNumbersValue(phoneInput);
        let formattedInputValue = "";
        let cursorPosition = phoneInput?.selectionStart;

        if (!inputNumbersValue) {
            phoneInput!.value = formattedInputValue;
        }

        if (phoneInput?.value.length !== cursorPosition) {
            let e = event as InputEvent;

            if (e.data && /\D/g.test(e.data)) {
                phoneInput!.value = formattedInputValue;
            }
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
            if (inputNumbersValue[0] === "9") inputNumbersValue = "7" + inputNumbersValue;
            let firstSymbols = (inputNumbersValue[0] === "8") ? "8" : "+7";

            formattedInputValue = firstSymbols + " ";

            if (inputNumbersValue.length > 1) {
                formattedInputValue += "(" + inputNumbersValue.substring(1, 4);
            }
            if (inputNumbersValue.length >= 5) {
                formattedInputValue += ") " + inputNumbersValue.substring(4, 7);
            }
            if (inputNumbersValue.length >= 8) {
                formattedInputValue += "-" + inputNumbersValue.substring(7, 9);
            }
            if (inputNumbersValue.length >= 10) {
                formattedInputValue += "-" + inputNumbersValue.substring(9, 11);
            }

        } else {
            formattedInputValue = phoneInput!.value = "+" + inputNumbersValue.substring(0, 16);
        }

        phoneInput!.value = formattedInputValue;
    })

    phoneInput?.addEventListener("keydown", (event: KeyboardEvent) => {
        let input = event.target as HTMLTextAreaElement;

        if(event.keyCode == 8 && getInputNumbersValue(input).length == 1) {
            input!.value = "";
        }
    })
}

export default phoneMask;
