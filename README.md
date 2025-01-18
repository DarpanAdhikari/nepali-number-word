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
/* No installation need if you use: <script type="module" src="script.js"></script>
 import { convertIntoNepaliNumber, convertNumberIntoNpNumWord } from 'https://unpkg.com/nepali-number-word@latest/index.js';*/

// Convert number to Nepali numeral format
console.log(convertIntoNepaliNumber(15500055)); // Outputs Nepali formatted number

// Convert number to Nepali words
console.log(convertNumberIntoNpNumWord(15500055)); // Outputs Nepali words for the number
```

### Example

**Converting Number to Nepali Number Format**  
If you input `15500055`, the output will be the Nepali number format:
```bash
१,५५,००,०५५
```

**Converting Number to Nepali Words**  
If you input `15500055`, the output will be the Nepali words for the number:
```bash
एक करोड पचपन्न लाख पचपन्न
```

### Supported Ranges

- **Numbers from 1 to \(10^{39}\)** are supported.
- The package can handle both small and very large numbers and converts them accurately into Nepali numeral format or Nepali words.

### License

This package is open source and available under the [MIT License](LICENSE).

---

Feel free to create an issue or contribute to the project on GitHub!

Happy coding! 🚀