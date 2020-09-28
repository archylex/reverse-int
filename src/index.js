module.exports = function reverse (n) {
    n = Math.abs(n).toString();
    
    let res = [];    
    
    for (let i = n.length - 1; i >= 0; i--)
        res.push(n[i]);
    
    return Number(res.join``);
}
