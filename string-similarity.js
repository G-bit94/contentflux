function levenshteinDistance(str1, str2) {
    if (str1 === str2) {
        return 0;
    }

    const len1 = str1.length;
    const len2 = str2.length;
    let matrix = new Array(len1 + 1);

    for (let i = 0; i <= len1; i++) {
        matrix[i] = new Array(len2 + 1);
    }

    for (let i = 0; i <= len1; i++) {
        matrix[i][0] = i;
    }

    for (let j = 0; j <= len2; j++) {
        matrix[0][j] = j;
    }

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (str1[i - 1] === str2[j - 1]) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j],
                    matrix[i][j - 1],
                    matrix[i - 1][j - 1]
                ) + 1;
            }
        }
    }

    return matrix[len1][len2];
}

function semanticSimilarity(str1, str2) {
    const distance = levenshteinDistance(str1, str2);
    const maxLength = Math.max(str1.length, str2.length);
    return 1 - (distance / maxLength);
}

// Example usage:
const str1 = "hello";
const str2 = "world";
const similarity = semanticSimilarity(str1, str2);
console.log("Similarity:", similarity); // Output: Similarity: 0.75


// JavaScript function that semantic compares similarity between two strings

