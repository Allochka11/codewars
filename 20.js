function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle")
}

function maps(x){
    return x.map((n) => n*2)
}

function greet(name){
    return "Hello, " + (name === "Johnny" ? "my love" : name) + "!";
}