class Display{
    constructor(displayLastValue,displayValue) {
        this.displayLastValue = displayLastValue;
        this.displayValue = displayValue;
        this.calculador = new Calculadora();
        this.opType = undefined;
        this.value='';
        this.lastValue='';
        this.sign = {
            sumar: '+',
            restar: '-',
            dividir:'/',
            multiplicar: 'X'
        }
    }
    delete(){
        this.value= this.value.toString().slice(0,-1);
        this.printValue();
    }
    deleteAll(){
        this.value= '';
        this.lastValue= '';
        this.opType=undefined;
        this.printValue();
    }

    addNumber(numero) {
        if(numero === '.' && this.value.includes('.'))return
        this.value =this.value.toString() + numero.toString();
        this.printValue();
    }
    
    printValue() {
        this.displayValue.textContent = this.value;
        this.displayLastValue.textContent = `${this.lastValue} ${this.sign[this.opType] || '' }`;
    }
    calculate(){
        const lastValue= parseFloat(this.lastValue);
        const value= parseFloat(this.value);

        if( isNaN(value) || isNaN(lastValue)) return
        this.value = this.calculador[this.opType](lastValue,value);
        this.printValue();
    }
    idOperation(type){
        this.opType !== 'igual' && this.calculate();
        this.opType = type;
        this.lastValue = this.value || this.lastValue;
        this.value= '';
        this.printValue();

    }
}