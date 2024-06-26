/*
There is a robot on an m x n grid. The robot is initially located at the top-left corner (i.e., grid[0][0]). 
The robot tries to move to the bottom-right corner (i.e., grid[m - 1][n - 1]). The robot can only move either down or right at any point in time.
Given the two integers m and n, return the number of possible unique paths that the robot can take to reach the bottom-right corner.
The test cases are generated so that the answer will be less than or equal to 2 * 109.
Input: m = 3, n = 7
Output: 28
Example 2:

Input: m = 3, n = 2
Output: 3
Explanation: From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

const gridTraveller = (n, m, memoization = {}) => {
    
    if (n===0 || m===0) {
        return 0;
    }

    if (n===1 && m===1) {
        return 1;
    }

    const key = n + "," + m ;

    if (key in memoization) {
        return memoization[key];
    }
    memoization[key] = gridTraveller(n-1, m, memoization) + gridTraveller(n, m-1, memoization);
    
    return  memoization[key];
}

console.log(gridTraveller(18, 18));