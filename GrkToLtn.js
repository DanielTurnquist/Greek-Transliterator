'use strict'
class Transliterator{
    

    constructor(logoi){
        this.logoiArray = logoi.split(" ");
        this.rough_diphthong_pairs = [
            [['αἱ', 'αἳ', 'αἵ', 'αἷ'], 'hai'],
            [['αὑ', 'αὓ', 'αὕ', 'αὗ'], 'hau'],
            [['εἱ', 'εἳ', 'εἵ', 'εἷ'], 'hei'],
            [['εὑ', 'εὓ', 'εὓ', 'εὗ'], 'heu'],
            [['οἱ', 'οἳ', 'οἵ', 'οἷ'], 'hoi'],
            [['οὑ', 'οὓ', 'οὕ', 'οὗ'], 'hou'],
            [['εὑ', 'εὓ', 'εὕ', 'εὗ'], 'heu'],
            [['ηὑ', 'ηὓ', 'ηὕ', 'ηὗ'], 'hēu'],
            [['υἱ', 'υἳ', 'υἵ', 'υἷ'], 'hui']
            ]; 
        this.grammata = {}
        
        var alphas = "αάάἀἂἄἆὰᾶᾳᾀᾂᾄᾆᾲᾷᾴ";
        for (let i = 0; i < alphas.length; i++) {
            const gramma = alphas[i];
            this.grammata[gramma] = 'a';
        }
        var halphas = "ἁἃἅἇᾁᾃᾅᾇ";
        for (let i = 0; i < halphas.length; i++) {
            const gramma = halphas[i];
            this.grammata[gramma] = 'ha';
        }
        var epsilons = "εέέἐἒἔὲ";
        for (let i = 0; i < epsilons.length; i++) {
            const gramma = epsilons[i];
            this.grammata[gramma] = 'e';
        }
        var hepsilons = "ἑἓἕ";
        for (let i = 0; i < hepsilons.length; i++) {
            const gramma = hepsilons[i];
            this.grammata[gramma] = 'he';
        }
        var etas = "ηήἠἢἤἦὴῆῃᾐᾒᾔᾖῂῇῄ";
        for (let i = 0; i < etas.length; i++) {
            const gramma = etas[i];
            this.grammata[gramma] = 'ē';
        }
        var hetas = "ἡἣἥἧᾑᾓᾕᾗ";
        for (let i = 0; i < hetas.length; i++) {
            const gramma = hetas[i];
            this.grammata[gramma] = 'hē';
        }
        this.grammata['β'] = 'b';
        this.grammata['γ'] = 'g';
        this.grammata['δ'] = 'd';
        this.grammata['ζ'] = 'z';
        this.grammata['θ'] = 'th';

            'ιίίἰἲἴἶὶῖῗΐϊ': 'i', 
            'ἱἳἵἷ': 'hi', 
            'κ': 'k', 
            'λ': 'l', 
            'μ': 'm', 
            'ν': 'n', 
            'ξ': 'x',
            'οόόὀὂὄὸ': 'o', 
            'ὁὃὅ': 'ho', 
            'π': 'p', 
            'ρῥ': 'r', 
            'ῤ': 'rh', 
            'σς': 's', 
            'τ': 't',
            'υύύὐὒὔὖὺῦῧῢΰϋ': 'u', 
            'ὑὓὕὗ': 'hu', 
            'φ': 'ph', 
            'χ': 'ch', 
            'ψ': 'ps',   
            'ωώώὠὢὤὦὼῶῳᾠᾢᾤᾦῲῷῴ': 'ō', 
            'ὡὣὥὧᾡᾣᾥᾧ': 'hō', 
            '·': ':', 
            ';': '?'
        */

    }
    constructor(logoi){
        this.logoiArray = logoi.split(" ");
        this.rough_diphthong_pairs = [
            [['αἱ', 'αἳ', 'αἵ', 'αἷ'], 'hai'],
            [['αὑ', 'αὓ', 'αὕ', 'αὗ'], 'hau'],
            [['εἱ', 'εἳ', 'εἵ', 'εἷ'], 'hei'],
            [['εὑ', 'εὓ', 'εὓ', 'εὗ'], 'heu'],
            [['οἱ', 'οἳ', 'οἵ', 'οἷ'], 'hoi'],
            [['οὑ', 'οὓ', 'οὕ', 'οὗ'], 'hou'],
            [['εὑ', 'εὓ', 'εὕ', 'εὗ'], 'heu'],
            [['ηὑ', 'ηὓ', 'ηὕ', 'ηὗ'], 'hēu'],
            [['υἱ', 'υἳ', 'υἵ', 'υἷ'], 'hui']
            ]; 
        this.grammata = {}
        
        var alphas = "αάάἀἂἄἆὰᾶᾳᾀᾂᾄᾆᾲᾷᾴ";
        for (let i = 0; i < alphas.length; i++) {
            const gramma = alphas[i];
            this.grammata[gramma] = 'a';
        }
        var halphas = "ἁἃἅἇᾁᾃᾅᾇ";
        for (let i = 0; i < halphas.length; i++) {
            const gramma = halphas[i];
            this.grammata[gramma] = 'ha';
        }
        var epsilons = "εέέἐἒἔὲ";
        for (let i = 0; i < epsilons.length; i++) {
            const gramma = epsilons[i];
            this.grammata[gramma] = 'e';
        }
        var hepsilons = "ἑἓἕ";
        for (let i = 0; i < hepsilons.length; i++) {
            const gramma = hepsilons[i];
            this.grammata[gramma] = 'he';
        }
        var etas = "ηήἠἢἤἦὴῆῃᾐᾒᾔᾖῂῇῄ";
        for (let i = 0; i < etas.length; i++) {
            const gramma = etas[i];
            this.grammata[gramma] = 'ē';
        }
        var hetas = "ἡἣἥἧᾑᾓᾕᾗ";
        for (let i = 0; i < hetas.length; i++) {
            const gramma = hetas[i];
            this.grammata[gramma] = 'hē';
        }
        var iotas = "ιίίἰἲἴἶὶῖῗΐϊ";
        for (let i = 0; i < hetas.length; i++) {
            const gramma = hetas[i];
            this.grammata[gramma] = 'hē';
        }
        this.grammata['β'] = 'b';
        this.grammata['γ'] = 'g';
        this.grammata['δ'] = 'd';
        this.grammata['ζ'] = 'z';
        this.grammata['θ'] = 'th';

            'ιίίἰἲἴἶὶῖῗΐϊ': 'i', 
            'ἱἳἵἷ': 'hi', 
            'κ': 'k', 
            'λ': 'l', 
            'μ': 'm', 
            'ν': 'n', 
            'ξ': 'x',
            'οόόὀὂὄὸ': 'o', 
            'ὁὃὅ': 'ho', 
            'π': 'p', 
            'ρῥ': 'r', 
            'ῤ': 'rh', 
            'σς': 's', 
            'τ': 't',
            'υύύὐὒὔὖὺῦῧῢΰϋ': 'u', 
            'ὑὓὕὗ': 'hu', 
            'φ': 'ph', 
            'χ': 'ch', 
            'ψ': 'ps',   
            'ωώώὠὢὤὦὼῶῳᾠᾢᾤᾦῲῷῴ': 'ō', 
            'ὡὣὥὧᾡᾣᾥᾧ': 'hō', 
            '·': ':', 
            ';': '?'
        */

    }


    tranliterate(){
        var upperIndices = this.getUpperIndices();
        var rtrnString = "";
        for (let i = 0; i < logoiArray.length; i++) {
            const logos = array[i];
            
        }
    }


    getUpperIndices(){
        var indices = [];
        for (let index = 0; index < this.logoiArray.length; index++) {
            let logosAsList = this.logoiArray[index];
            let gramma = logosAsList[0];
            if (gramma == gramma.toUpperCase()){
                indices.push(index);
            }
        }
        return indices;
    }

    handleRoughDipthongs(logos){

    }
}


//main
var input = document.getElementById("inputBox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        var logoi = document.getElementById("inputBox").value;
        var t = new Transliterator(logoi);
        t.tranliterate();
    }
});


