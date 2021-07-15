'use strict'
class Transliterator{
    

    constructor(logoi){
        this.logoiArray = logoi.split(" ");
        this.rough_diphthong_pairs = {
            'αἱ':'hai', 'αἳ':'hai', 'αἵ':'hai', 'αἷ':'hai',
            'αὑ':'hau', 'αὓ':'hau', 'αὕ':'hau', 'αὗ':'hau',
            'εἱ':'hei', 'εἳ':'hei', 'εἵ':'hei', 'εἷ':'hei',
            'εὑ':'heu', 'εὓ':'heu', 'εὓ':'heu', 'εὗ':'heu',
            'οἱ':'hoi', 'οἳ':'hoi', 'οἵ':'hoi', 'οἷ':'hoi',
            'οὑ':'hou', 'οὓ':'hou', 'οὕ':'hoi', 'οὗ':'hou',
            'εὑ':'heu', 'εὓ':'heu', 'εὕ':'heu', 'εὗ':'heu',
            'ηὑ':'hēu', 'ηὓ':'hēu', 'ηὕ':'hēu', 'ηὗ':'hēu',
            'υἱ':'hui', 'υἳ':'hui', 'υἵ':'hui', 'υἷ':'hui'
        }; 
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
        for (let i = 0; i < iotas.length; i++) {
            const gramma = iotas[i];
            this.grammata[gramma] = 'i';
        }
        var hiotas = "ἱἳἵἷ";
        for (let i = 0; i < hiotas.length; i++) {
            const gramma = hiotas[i];
            this.grammata[gramma] = 'i';
        }
        var omicrons = "οόόὀὂὄὸ";
        for (let i = 0; i < omicrons.length; i++) {
            const gramma = omicrons[i];
            this.grammata[gramma] = 'o';
        }
        var homicrons = "ὁὃὅ";
        for (let i = 0; i < homicrons.length; i++) {
            const gramma = homicrons[i];
            this.grammata[gramma] = 'ho';
        }
        var upsilons = "υύύὐὒὔὖὺῦῧῢΰϋ";
        for (let i = 0; i < upsilons.length; i++) {
            const gramma = upsilons[i];
            this.grammata[gramma] = 'u';
        }
        var hupsilons = "ὑὓὕὗ";
        for (let i = 0; i < hupsilons.length; i++) {
            const gramma = hupsilons[i];
            this.grammata[gramma] = 'hu';
        }
        var omegas = "ωώώὠὢὤὦὼῶῳᾠᾢᾤᾦῲῷῴ";
        for (let i = 0; i < omegas.length; i++) {
            const gramma = omegas[i];
            this.grammata[gramma] = 'ō';
        }
        var homegas = "ὡὣὥὧᾡᾣᾥᾧ";
        for (let i = 0; i < homegas.length; i++) {
            const gramma = homegas[i];
            this.grammata[gramma] = 'hō';
        }
        this.grammata['β'] = 'b';
        this.grammata['γ'] = 'g';
        this.grammata['δ'] = 'd';
        this.grammata['ζ'] = 'z';
        this.grammata['θ'] = 'th';
        this.grammata['κ'] = 'k';
        this.grammata['λ'] = 'l';
        this.grammata['μ'] = 'm';
        this.grammata['ν'] = 'n';
        this.grammata['ξ'] = 'x';
        this.grammata['π'] = 'p';
        this.grammata['ρ'] = 'r';
        this.grammata['ῤ'] = 'r';
        this.grammata['ῥ'] = 'rh';
        this.grammata['σ'] = 's';
        this.grammata['ς'] = 's';
        this.grammata['τ'] = 't';
        this.grammata['φ'] = 'ph';
        this.grammata['χ'] = 'ch';
        this.grammata['ψ'] = 'psi';
        this.grammata['·'] = ':';
        this.grammata[';'] = '?';
    }

    tranliterate(){
        var upperIndices = this.getUpperIndices();
        for (let i = 0; i < this.logoiArray.length; i++) {
            for (const [key, value] of Object.entries(this.rough_diphthong_pairs)) {
                for (const [keyII, valueII] of Object.entries(this.grammata)) {
                    this.logoiArray[i] = this.logoiArray[i].toLowerCase().replace(key, value);
                    this.logoiArray[i] = this.logoiArray[i].toLowerCase().replace(keyII, valueII);
                    }
                }
                if (upperIndices.includes(i)){
                    this.logoiArray[i] = this.logoiArray[i][0].toUpperCase() + this.logoiArray[i].slice(1);
            }
        }
        var stringToReturn = this.logoiArray.join(' ');
        return stringToReturn;
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
}


//main
var input = document.getElementById("inputBox");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) { //key is 'enter'
        var logoi = document.getElementById("inputBox").value;
        var t = new Transliterator(logoi);
        var output = t.tranliterate();
        document.getElementById("output").innerHTML = output;
    }
});


