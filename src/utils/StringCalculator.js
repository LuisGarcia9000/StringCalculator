
export function calc(stringOperation) {    
    let total = 0
    let result = operation(stringOperation, '+', addition)
    if (result) {
        total += result
    } else {
        let result = operation(stringOperation, '-', substraction)
        if (result) {
            total += result 
        } else {
            let result = operation(stringOperation, '/', division)
            if (result) {
                total += result 
            } else {
                let result = operation(stringOperation, '*', multiplication)
                if (result) {
                    total += result 
                } else {
                    let result = operation(stringOperation, '^', pow)
                    if (result) {
                        total += result 
                    }
                }
            }
        }
    }
    return total
}

const addition = (a,b) => a+b
const substraction = (a,b) => a-b
const division = (a,b) => a/b
const multiplication = (a,b) => a*b
const pow = (a,b) => Math.pow(a, b)

function operation(stringOperation, operator, operation) {
    let operationIndex = stringOperation.lastIndexOf(operator)
    if (operationIndex > 0) {
        let operationValues = getOperationValues(stringOperation, operationIndex)        
        if (!Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {                
            return operation(operationValues.valor1AsNumber, operationValues.valor2AsNumber)
        } else if (!Number.isNaN(operationValues.valor1AsNumber)
            && Number.isNaN(operationValues.valor2AsNumber)) {                
                return operation(operationValues.valor1AsNumber, calc(operationValues.valor2AsString))
            }else if (Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {                
                return operation(calc(operationValues.valor1AsString), operationValues.valor2AsNumber)
        }
        else {            
            return operation(calc(operationValues.valor1AsString), calc(operationValues.valor2AsString))
        }
    }
    return 0
}

function getOperationValues(stringOperation, operationIndex) {
    let valor1AsString = stringOperation.substring(0, operationIndex)
    let valor2AsString = stringOperation.substr(operationIndex + 1)
    let valor1AsNumber = Number(stringOperation.substring(0, operationIndex))
    let valor2AsNumber = Number(stringOperation.substr(operationIndex + 1))

    return {
        valor1AsNumber,
        valor1AsString,
        valor2AsNumber,
        valor2AsString
    }

}

