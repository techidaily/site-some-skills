/**
 * 修复 .markdown 文件中的问题
 *
 * 1. 修复前3行的包含这样的内容的行：`title: | `, 去掉 `|` 这样的字符
 */

const fs = require('fs');
const path = require('path');

/**统计子字符串在字符串中出现的次数 */
function count_substr(str, substr) {
  let count = 0;
  let index = str.indexOf(substr);
  while (index !== -1) {
    count++;
    index = str.indexOf(substr, index + substr.length);
  }
  return count;
}

/** 在一个数组中，查找元素最多的有序重复子数组 */
/**
给定一个数组arr，查找有序重复子数组B，子数组B可以通过arr.slice方法得到，子数组B最少出现2次，子数组B在所有符合的子数组中，包含的元素个数最多，且元素个数至少n个, 每个子数组B在数组arr中的位置不重叠，如果没有符合的，返回空数组。请使用Javascript编码。
例如，给定数组 ['ab', 'a', 'b', 'c', 'd', '', '\n', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'e', 'f', 'g']，及n=4，该算法将返回 ['a', 'b', 'c', 'd']，因为它是有序的重复子数组，且包含的元素个数大于等于4，且包含的元素个数最多，并且至少出现了 2 次， 第一次出现的子数组，和第二次出现的子数组元素在数组arr中不重叠。
*/
function findLongestRepeatingSubarray(arr, n = 0) {
  const subarrayCounts = {};
  let maxLength = 0;
  let longestRepeatingSubarray = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + n + 1; j <= arr.length; j++) {
      const subarray = arr.slice(i, j);
      const subarrayStr = subarray.join(",");
      if (subarrayStr.length === 0) {
        continue;
      }

      if (!subarrayCounts[`${subarrayStr}`]) {
        subarrayCounts[subarrayStr] = [{ start: i, end: j }];
      } else {
        const existingIndices = subarrayCounts[`${subarrayStr}`];
        let isNonOverlapping = true;
        for (const indices of existingIndices) {
          if (
            (i >= indices.start && i < indices.end) ||
            (j > indices.start && j <= indices.end)
          ) {
            isNonOverlapping = false;
            break;
          }
        }
        if (isNonOverlapping) {
          subarrayCounts[`${subarrayStr}`].push({ start: i, end: j });
        }
      }
      if (
        subarrayCounts[`${subarrayStr}`].length >= 2 &&
        subarray.length > maxLength
      ) {
        maxLength = subarray.length;
        longestRepeatingSubarray = subarray;
      }
    }
  }

  return longestRepeatingSubarray;
}

/** 查找最长重复的子字符串 */
function findLongestRepeatedSubstring(str) {
  let currentSubstring = "";
  const substringTable = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      currentSubstring = str.substring(i, j + 1);
      if (currentSubstring.length > 0) {
        substringTable[`${currentSubstring}`] = {
          count: count_substr(str, currentSubstring),
          length: currentSubstring.length,
        };
      }
    }
    currentSubstring = "";
  }

  // 对substringTable进行过滤，只保留count > 1的项
  Object.keys(substringTable).forEach((key) => {
    if (substringTable[key].count <= 1) {
      delete substringTable[`${key}`];
    }
  });

  // 对substringTable进行排序，按照length进行排序, length 最大的排在最前面
  const sortedKeys = Object.keys(substringTable).sort((a, b) => {
    return substringTable[`${b}`].length - substringTable[`${a}`].length;
  });

  const longestSubstring = sortedKeys[0];

  // 计算重复次数
  const count = count_substr(str, longestSubstring);
  return {
    substring: longestSubstring,
    count,
  };
}

function _removeLines(text, duplicatedLines, { minLineCount, minLength } = {}) {
  // check
  if (duplicatedLines.length < minLength) return text;

  // check
  const lineCount = duplicatedLines.split("\n").length;
  if (lineCount < minLineCount) return text;

  // 从text中移除多余的subStr，只保留第一个
  const index = text.indexOf(duplicatedLines);
  const frontPart = text.substring(0, index + duplicatedLines.length);
  let backPart = text.substring(index + duplicatedLines.length);
  backPart = backPart.replaceAll(duplicatedLines, "");
  return frontPart + backPart;
}

/**
 * 移除文件中最长重复内容，要求只保留第一个出现的内容。
 */
function removeDuplicatedLines(
  text,
  fnGetduplicatedLines,
  { minLength, minLineCount } = {
    minLength: 200,
    minLineCount: 4,
  },
) {
  const duplicatedLines = fnGetduplicatedLines(text);
  return _removeLines(text, duplicatedLines, { minLineCount, minLength });
}

function removeDuplicatedLinesQuick(
  content,
  { minLength, minLineCount } = {
    minLength: 200, // 最少文字数量 400
    minLineCount: 4, // 最小行数 7
  },
) {
  // 移除重复内容，只保留第一个
  finalContent = removeDuplicatedLines(
    content,
    (text) => {
      const arr = text.split("\n");
      const result = findLongestRepeatingSubarray(arr, minLineCount); // 使用最小行数，加速查找
      const duplicatedLines = result.join("\n");
      return duplicatedLines;
    },
    { minLength, minLineCount },
  );
  return finalContent;
}

/**
 * 获得指定目录下所有的 .md 文件
 * @param {*} dir
 * @param {*} fileList
 * @returns
 */
function getMarkdownFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        getMarkdownFiles(filePath, fileList);
      } else if (path.extname(file) === '.md') {
        fileList.push(filePath);
      }
    });

    return fileList;
  }

/**
 * 修复指定的 markdown 文件
 * @param {*} markdownFile
 */

function fixMarkdownFile(markdownFile) {
    const content = fs.readFileSync(markdownFile, 'utf-8');
    let newContent = content;
    try {
      newContent = removeDuplicatedLinesQuick(content, {
        minLength: 600,
        minLineCount: 7,
      })
    } catch (error) {
      console.error('error:', error);
    }

    fs.writeFileSync(markdownFile, newContent, 'utf-8');
}

// 如果命令行参数中包含 --file，则只处理指定的文件
const args = process.argv.slice(2);
console.log('args:', args);
if (args.includes('--file')) {
  // 从命令行参数中获取指定的文件
  const index = args.indexOf('--file');
  const markdownFile = args[index + 1];
  fixMarkdownFile(markdownFile);
  console.log('Fix markdown issue done!');
  return;
}


const markdownFiles = getMarkdownFiles(path.join(__dirname, 'source/_posts'));
markdownFiles.forEach(markdownFile => {
    fixMarkdownFile(markdownFile);
});

console.log('Fix markdown issue done!');
