var fs = require("fs")

fs.readdir(process.argv[2], function(err, list) {
    if(err) {
        console.error(err);
    }
    list = list.filter(list => list.endsWith(`.${process.argv[3]}`)).join("\n")
    console.log(list)
})