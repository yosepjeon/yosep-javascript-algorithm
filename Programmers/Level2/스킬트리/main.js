var skill = "CBD"
var skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
var skill_trees_len = skill_trees.length

var answer = 0;

for(var a = 0; a<skill_trees_len;a++) {
    var skillElement = skill_trees[a].split("")

    for(var b= 0; b<skill.length;b++) {

        for(var c =0; c<skill_trees[a].length;c++) {
            var element = skillElement.shift()
        }
    }
}

console.log(answer)


var solution = (skill, skill_trees) => {
    var skill = "CBD"
    var skill_trees = ["BACDE", "CBADF", "AECB", "BDA"]
    var answer = 0;

    var skill_trees_len = skill_trees.length

    for(var a = 0; a<skill_trees_len;a++) {
        // for(var b = 0; b<skill.length)
    }

    answer = skill_trees_len

    return answer;
}