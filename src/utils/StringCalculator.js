
export function calc(stringOperation) {
    console.log('stringOperation', stringOperation)
    let total = 0
    let result = sum(stringOperation)
    if (result) {
        total += result
    } else {
        let result = rest(stringOperation)
        if (result) {
            total += result 
        }
    }
    return total
}

function sum(stringOperation) {
    let operationIndex = stringOperation.indexOf('+')
    if (operationIndex > 0) {
        let operationValues = getOperationValues(stringOperation, operationIndex)        
        if (!Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {                
            return operationValues.valor1AsNumber + operationValues.valor2AsNumber
        } else if (!Number.isNaN(operationValues.valor1AsNumber)
            && Number.isNaN(operationValues.valor2AsNumber)) {                
                return operationValues.valor1AsNumber + calc(operationValues.valor2AsString)
            }else if (Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {                
                return calc(operationValues.valor1AsString) + operationValues.valor2AsNumber
        }
        else {            
            return calc(operationValues.valor1AsString) + calc(operationValues.valor2AsString)
        }
    }
    return 0
}

function rest(stringOperation) {
    let operationIndex = stringOperation.indexOf('-')
    if (operationIndex > 0) {
        let operationValues = getOperationValues(stringOperation, operationIndex)        
        if (!Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {
            return operationValues.valor1AsNumber - operationValues.valor2AsNumber
        } else if (!Number.isNaN(operationValues.valor1AsNumber)
            && Number.isNaN(operationValues.valor2AsNumber)) {
                return operationValues.valor1AsNumber - calc(operationValues.valor2AsString)
            }else if (Number.isNaN(operationValues.valor1AsNumber)
            && !Number.isNaN(operationValues.valor2AsNumber)) {
                return calc(operationValues.valor1AsString) - operationValues.valor2AsNumber
        }
        else {
            return calc(operationValues.valor1AsString) - calc(operationValues.valor2AsString)
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

