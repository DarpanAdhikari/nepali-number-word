# Nepali Number Word Package

A simple yet powerful npm package to convert any number into Nepali number format and Nepali number words.

### Features:
- **Convert numbers into Nepali number format**  
  This feature converts any number into Nepali numerical format, which follows the Nepali numeral system.

- **Convert numbers into Nepali words**  
  Convert any given number into Nepali words. This supports up to \(10^{39}\) (maximum limit for large numbers).

### Installation

To get started, you need to install the package via npm:

```bash
npm install nepali-number-word
```

### Setup

Make sure your project has `"type": "module"` in your `package.json` for ES Module support.

```json
{
  "type": "module"
}
```

### Usage

Once installed, you can import and use the functions `convertIntoNepaliNumber` and `convertNumberIntoNpNumWord` in your JavaScript code:

```javascript
import { convertIntoNepaliNumber, convertNumberIntoNpNumWord } from "nepali-number-word";

// Convert number to Nepali numeral format
convertIntoNepaliNumber(15500055n).then(res => console.log(res)); // Outputs Nepali formatted number

// Convert number to Nepali words
convertNumberIntoNpNumWord(15500055n).then(res => console.log(res)); // Outputs Nepali words for the number

// use "n" if you want to use biggest number in its back like convertNumberIntoNpNumWord(15500055n)
```

### Example

**Converting Number to Nepali Number Format**  
If you input `15500055`, the output will be the Nepali number format:
```bash
१५५०००५५
```

**Converting Number to Nepali Words**  
If you input `15500055`, the output will be the Nepali words for the number:
```bash
पाँच लाख पचपन्न हजार पच पचास
```

### Supported Ranges

- **Numbers from 1 to \(10^{39}\)** are supported.
- The package can handle both small and very large numbers and converts them accurately into Nepali numeral format or Nepali words.

### License

This package is open source and available under the [MIT License](LICENSE).

---

Feel free to create an issue or contribute to the project on GitHub!

Happy coding! 🚀