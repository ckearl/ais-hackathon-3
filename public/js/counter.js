
function incrementCounter() {
    let prevNum = document.getElementById("counterNum").innerHTML;
    prevNum = parseInt(prevNum);

    console.log(`New Num: ${prevNum + 1}`);

    document.getElementById("counterNum").innerHTML = prevNum + 1;
}
