function explain_callback(name, age, task) {
    console.log('Hello ', name);
    console.log('your age ', age);
    washHand();
    
}
function washHand(){
    console.log('wash your hand with soap');
}
function takeShower(){
    console.log('Take Shower');
}

explain_callback('sogir uddin', 17, washHand);
explain_callback('Jogir uddin', 14, takeShower);