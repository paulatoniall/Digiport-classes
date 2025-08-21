function operacaoMat(a, b, op){
    if(op == "+") return a+b;
    if(op == "-") return a-b;
    if(op == "*") return a*b;
    if(op == "/") return a/b;
    else return "Operação inválida."
    }

console.log(operacaoMat(1, 2, "/"));