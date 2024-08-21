// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

const longestCommonPrefix = (strs) => {
  if (strs.length === 0) {
    return "";
  } // Eğer dizi boşsa, boş string döndür

  let prefix = strs[0]; // İlk stringi referans olarak al

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1); // Prefixi küçült
      if (prefix === "") {
        return "";
      } // Eğer ortak prefix yoksa, boş string döndür
    }
  }

  return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
