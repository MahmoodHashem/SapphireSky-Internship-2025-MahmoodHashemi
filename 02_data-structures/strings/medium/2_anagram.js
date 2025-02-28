

function isAnagram(str1, str2) {
    if (str1.length !== str2.length) return false;
   
    let count = {}
    
    for (const char of str1) {
        count[char] = (count[char] || 0) + 1
    }

    for (const char of str2) {
        if (!count[char]) {
            return false
        }
        count[char]--
    }

    return true;
}


