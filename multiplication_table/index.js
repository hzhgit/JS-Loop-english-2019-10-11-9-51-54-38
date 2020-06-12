// ## requirement

// Create new index.js file, write program output 9*9 times table. The output is as follows：

// ```
// 1*1=1
// 2*1=2 2*2=4
// 3*1=3 3*2=6 3*3=9
// ……
// 9*1=9 9*2=18 9*3=27 …… 9*9=81
// ```


for (var i = 1; i <= 9; i++) {
    var str = ""
    for (var j = 1; j <= i; j++) {
        if(j == i){ //控制末尾没有空格
            str += j + "*" + i + "=" + j * i
        }else{
            str += j + "*" + i + "=" + j * i + " "
        }
    }
    console.log(str + '\n')
}