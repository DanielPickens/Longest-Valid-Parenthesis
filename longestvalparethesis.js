var longestValidParentheses = function(s) {
        let dp = (function (s) { let a = []; while (s-- > 0)
                    a.push(0); return a; })(s.length + 1);  // placing the element at the top of the stack 
                let max = 0;
                for (let i = 1; i < s.length; i++) {
                    {
                        if ((function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i)) == ')'.charCodeAt(0) && i - dp[i] >= 1 && (function (c) { return c.charCodeAt == null ? c : c.charCodeAt(0); })(s.charAt(i - dp[i] - 1)) == '('.charCodeAt(0)) {
                            dp[i + 1] = dp[i - dp[i] - 1] + dp[i] + 2;   //checks indices for i if function(c) will moderate in i what elements in the array are iteratable next and this continues during iteratation across the stack
                        }
                    }
                    ;
                }
                for (let i = 0; i < dp.length; i++) {  //another for loop to loop through the array on dp.length to find max value of i
                    {
                        if (dp[i] > max)
                            max = dp[i];
                    }
                    ;
                }
                return max;   // return value for max 
            };


// tc: O(n^2)




