const nepaliNumbers = {
  0: "शून्य",
  1: "एक",
  2: "दुई",
  3: "तीन",
  4: "चार",
  5: "पाँच",
  6: "छ",
  7: "सात",
  8: "आठ",
  9: "नौ",
  10: "दश",
  11: "एघार",
  12: "बाह्र",
  13: "तेह्र",
  14: "चौध",
  15: "पन्ध्र",
  16: "सोह्र",
  17: "सत्र",
  18: "अठार",
  19: "उन्नाइस",
  20: "बीस",
  21: "एक्काइस",
  22: "बाइस",
  23: "तेइस",
  24: "चौविस",
  25: "पच्चिस",
  26: "छब्बिस",
  27: "सत्ताइस",
  28: "अठ्ठाइस",
  29: "उनन्तिस",
  30: "तीस",
  31: "एकतिस",
  32: "बत्तिस",
  33: "तेत्तिस",
  34: "चौतीस",
  35: "पैँतीस",
  36: "छत्तिस",
  37: "सैँतीस",
  38: "अठतीस",
  39: "उनन्चालीस",
  40: "चालीस",
  41: "एकचालीस",
  42: "बयालीस",
  43: "त्रिचालीस",
  44: "चौवालिस",
  45: "पैंतालीस",
  46: "छयालीस",
  47: "सतचालीस",
  48: "अठचालीस",
  49: "उनन्चास",
  50: "पचास",
  51: "एकाउन्न",
  52: "बाउन्न",
  53: "त्रिपन्न",
  54: "चौवन्न",
  55: "पचपन्न",
  56: "छपन्न",
  57: "सन्ताउन्न",
  58: "अन्ठाउन्न",
  59: "उनन्साठी",
  60: "साठी",
  61: "एकसाठी",
  62: "बैसाठी",
  63: "त्रिसाठी",
  64: "चौंसाठी",
  65: "पैंसाठी",
  66: "छैंसाठी",
  67: "सतसाठी",
  68: "अठसाठी",
  69: "उनन्सत्तरी",
  70: "सत्तरी",
  71: "एकहत्तर",
  72: "बहत्तर",
  73: "त्रिहत्तर",
  74: "चौहत्तर",
  75: "पचहत्तर",
  76: "छयहत्तर",
  77: "सतहत्तर",
  78: "अठहत्तर",
  79: "उनासी",
  80: "असी",
  81: "एकासी",
  82: "बयासी",
  83: "त्रियासी",
  84: "चौरासी",
  85: "पचासी",
  86: "छयासी",
  87: "सतासी",
  88: "अठासी",
  89: "उनान्नब्बे",
  90: "नब्बे",
  91: "एकान्नब्बे",
  92: "बयान्नब्बे",
  93: "त्रियान्नब्बे",
  94: "चौरान्नब्बे",
  95: "पन्चान्नब्बे",
  96: "छयान्नब्बे",
  97: "सन्तान्नब्बे",
  98: "अन्ठान्नब्बे",
  99: "उनान्सय",
};
const englishToNepaliNumbers = {
  0: "०",
  1: "१",
  2: "२",
  3: "३",
  4: "४",
  5: "५",
  6: "६",
  7: "७",
  8: "८",
  9: "९",
};
const findNepaliWord = (num) => nepaliNumbers[num] || "अमान्य";
const findNepaliNumber = (num) => englishToNepaliNumbers[num] || null;
function containsLetters(val) {
  return /\D/.test(val);
}
export async function convertNumberIntoNpNumWord(data) {
  const val = data.toString().trim();
  if (val == "" || containsLetters(val))
    return "कृपया मान्य संख्या प्रविष्ट गर्नुहोस्।";
  if (parseInt(val) == 0) return findNepaliWord(0);
  const length = val.length;
  if (length > 41) return "असक्षम";
  else if (length <= 2) return double(val);
  else if (length <= 3) return hundreds(val);
  else if (length <= 5) return thousands(val);
  else if (length <= 7) return lakhs(val);
  else if (length <= 9) return crore(val);
  else if (length <= 11) return arab(val);
  else if (length <= 13) return kharab(val);
  else if (length <= 15) return neel(val);
  else if (length <= 17) return padam(val);
  else if (length <= 19) return shankh(val);
  else if (length <= 21) return upadh(val);
  else if (length <= 23) return ank(val);
  else if (length <= 25) return jald(val);
  else if (length <= 27) return madh(val);
  else if (length <= 29) return parardh(val);
  else if (length <= 31) return ant(val);
  else if (length <= 33) return mahaant(val);
  else if (length <= 35) return shishant(val);
  else if (length <= 37) return shinghr(val);
  else if (length <= 39) return mahaSighr(val);
  else if (length <= 41) return adantSighr(val);
}
function double(num) {
  return parseInt(num[0]) == 0 ? findNepaliWord(num[1]) : findNepaliWord(num);
}
function hundreds(num) {
  const front = parseInt(num[0]) !== 0 ? findNepaliWord(num[0]) : false;
  const rest =
    parseInt(num.slice(1)) !== 0 ? double(parseInt(num.slice(1))) : "";
  return `${front ? front + " सय " : ""} ${rest}`;
}
function thousands(num) {
  const front =
    parseInt(num.slice(0, -3)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -3)))
      : false;
  const rest = parseInt(num.slice(-3)) !== 0 ? hundreds(num.slice(-3)) : "";
  return `${front ? front + " हजार " : ""} ${rest}`;
}
function lakhs(num) {
  const front =
    parseInt(num.slice(0, -5)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -5)))
      : false;
  const rest = parseInt(num.slice(-5)) !== 0 ? thousands(num.slice(-5)) : "";
  return `${front ? front + " लाख " : ""} ${rest}`;
}
function crore(num) {
  const front =
    parseInt(num.slice(0, -7)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -7)))
      : false;
  const rest = parseInt(num.slice(-7)) !== 0 ? lakhs(num.slice(-7)) : "";
  return `${front ? front + " करोड " : ""} ${rest}`;
}
function arab(num) {
  const front =
    parseInt(num.slice(0, -9)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -9)))
      : false;
  const rest = parseInt(num.slice(-9)) !== 0 ? crore(num.slice(-9)) : "";
  return `${front ? front + " अरब " : ""} ${rest}`;
}
function kharab(num) {
  const front =
    parseInt(num.slice(0, -11)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -11)))
      : false;
  const rest = parseInt(num.slice(-11)) !== 0 ? arab(num.slice(-11)) : "";
  return `${front ? front + " खराब " : ""} ${rest}`;
}
function neel(num) {
  const front =
    parseInt(num.slice(0, -13)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -13)))
      : false;
  const rest = parseInt(num.slice(-13)) !== 0 ? kharab(num.slice(-13)) : "";
  return `${front ? front + " नील " : ""} ${rest}`;
}
function padam(num) {
  const front =
    parseInt(num.slice(0, -15)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -15)))
      : false;
  const rest = parseInt(num.slice(-15)) !== 0 ? neel(num.slice(-15)) : "";
  return `${front ? front + " पद्म " : ""} ${rest}`;
}
function shankh(num) {
  const front =
    parseInt(num.slice(0, -17)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -17)))
      : false;
  const rest = parseInt(num.slice(-17)) !== 0 ? padam(num.slice(-17)) : "";
  return `${front ? front + " शंख " : ""} ${rest}`;
}
function upadh(num) {
  const front =
    parseInt(num.slice(0, -19)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -19)))
      : false;
  const rest = parseInt(num.slice(-19)) !== 0 ? shankh(num.slice(-19)) : "";
  return `${front ? front + " उपाध " : ""} ${rest}`;
}
function ank(num) {
  const front =
    parseInt(num.slice(0, -21)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -21)))
      : false;
  const rest = parseInt(num.slice(-21)) !== 0 ? upadh(num.slice(-21)) : "";
  return `${front ? front + " अंक " : ""} ${rest}`;
}
function jald(num) {
  const front =
    parseInt(num.slice(0, -23)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -23)))
      : false;
  const rest = parseInt(num.slice(-23)) !== 0 ? ank(num.slice(-23)) : "";
  return `${front ? front + " जल्द " : ""} ${rest}`;
}
function madh(num) {
  const front =
    parseInt(num.slice(0, -25)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -25)))
      : false;
  const rest = parseInt(num.slice(-25)) !== 0 ? jald(num.slice(-25)) : "";
  return `${front ? front + " मध " : ""} ${rest}`;
}
function parardh(num) {
  const front =
    parseInt(num.slice(0, -27)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -27)))
      : false;
  const rest = parseInt(num.slice(-27)) !== 0 ? madh(num.slice(-27)) : "";
  return `${front ? front + " परर्ध " : ""} ${rest}`;
}
function ant(num) {
  const front =
    parseInt(num.slice(0, -29)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -29)))
      : false;
  const rest = parseInt(num.slice(-29)) !== 0 ? parardh(num.slice(-29)) : "";
  return `${front ? front + " अन्त " : ""} ${rest}`;
}
function mahaant(num) {
  const front =
    parseInt(num.slice(0, -31)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -31)))
      : false;
  const rest = parseInt(num.slice(-31)) !== 0 ? ant(num.slice(-31)) : "";
  return `${front ? front + " महाअन्त " : ""} ${rest}`;
}
function shishant(num) {
  const front =
    parseInt(num.slice(0, -33)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -33)))
      : false;
  const rest = parseInt(num.slice(-33)) !== 0 ? mahaant(num.slice(-33)) : "";
  return `${front ? front + " शिशंत " : ""} ${rest}`;
}
function shinghr(num) {
  const front =
    parseInt(num.slice(0, -35)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -35)))
      : false;
  const rest = parseInt(num.slice(-35)) !== 0 ? shishant(num.slice(-35)) : "";
  return `${front ? front + " सिंघर " : ""} ${rest}`;
}
function mahaSighr(num) {
  const front =
    parseInt(num.slice(0, -37)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -37)))
      : false;
  const rest = parseInt(num.slice(-37)) !== 0 ? shinghr(num.slice(-37)) : "";
  return `${front ? front + " महासिंघर " : ""} ${rest}`;
}
function adantSighr(num) {
  const front =
    parseInt(num.slice(0, -39)) !== 0
      ? findNepaliWord(parseInt(num.slice(0, -39)))
      : false;
  const rest = parseInt(num.slice(-39)) !== 0 ? mahaSighr(num.slice(-39)) : "";
  return `${front ? front + " अदन्त सिंघर " : ""} ${rest}`;
}
export async function convertIntoNepaliNumber(data) {
  const val = data.toString().trim();
  if (val == "") return "कृपया मान्य संख्या प्रविष्ट गर्नुहोस्।";
  if (parseInt(val) == 0) return findNepaliNumber(0);
  let npNum = val.split("");
  let npNumCon = [];
  npNum.forEach((num) => {
    npNumCon.push(findNepaliNumber(num));
  });
  let formattedNumber = npNumCon.join("");
  return formatNepaliNumber(formattedNumber);
}
function formatNepaliNumber(number) {
  let numStr = number.toString();
  let lastThree = numStr.slice(-3);
  let otherDigits = numStr.slice(0, -3);
  let nepaliFormatted = "";
  while (otherDigits.length > 0) {
    let pair = otherDigits.slice(-2);
    nepaliFormatted = pair + (nepaliFormatted ? "," + nepaliFormatted : "");
    otherDigits = otherDigits.slice(0, -2);
  }
  return nepaliFormatted + (nepaliFormatted ? "," : "") + lastThree;
}