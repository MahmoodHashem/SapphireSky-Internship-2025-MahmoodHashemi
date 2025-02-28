

function compress(str) {

    let count = {}
    for (const char of str) {
        count[char] = (count[char] || 0) + 1
    }

    let compressed = Object.entries(count).map(([char, counts]) => {
        return counts > 1 ? char + counts : char
    }).join('')

    return compressed
}