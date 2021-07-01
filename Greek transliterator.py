def transliterate(logoi):
    #
    # Purpose: replaces greek characters with latin
    # Input Parameter(s): logoi: greek characters and punctuation(string)
    # Return Value(s): a transliterated word, name, phrase or sentence(string)
    #
    # first, we find where all of the capitalized words and names are,
    # so that we don't need to account for twice as many characters
    logoi_list = logoi.split()
    capitalized_logoi_indices = []
    for index, logos in enumerate(logoi_list):
        if logos[0].isupper():
            capitalized_logoi_indices += [index]
    logoi = logoi.lower()
    # this first part is necessary because of the complicated nature of diphthongs with rough breathings.
    rough_diphthong_pairs = [
                            [['αἱ', 'αἳ', 'αἵ', 'αἷ'], 'hai'],
                            [['αὑ', 'αὓ', 'αὕ', 'αὗ'], 'hau'],
                            [['εἱ', 'εἳ', 'εἵ', 'εἷ'], 'hei'],
                            [['εὑ', 'εὓ', 'εὓ', 'εὗ'], 'heu'],
                            [['οἱ', 'οἳ', 'οἵ', 'οἷ'], 'hoi'],
                            [['οὑ', 'οὓ', 'οὕ', 'οὗ'], 'hou'],
                            [['εὑ', 'εὓ', 'εὕ', 'εὗ'], 'heu'],
                            [['ηὑ', 'ηὓ', 'ηὕ', 'ηὗ'], 'hēu'],
                            [['υἱ', 'υἳ', 'υἵ', 'υἷ'], 'hui']
                            ]
    for pair in rough_diphthong_pairs:
        for diphthong in pair[0]:
            if diphthong in logoi:
                logoi = logoi.replace(diphthong, pair[1])
    # the next four lines address nasals like in the word for 'angel'
    logoi = logoi.replace("γγ", "ng")
    logoi = logoi.replace("γκ", "nk")
    logoi = logoi.replace("γξ", "nx")
    logoi = logoi.replace("γχ", "nχ")
    # now we create an empty string to fill as we go along
    transliteration = ""
    ch_list = [['αάάἀἂἄἆὰᾶᾳᾀᾂᾄᾆᾲᾷᾴ', 'a'], ['ἁἃἅἇᾁᾃᾅᾇ', 'ha'], ['β', 'b'], ['γ', 'g'], ['δ', 'd'], ['εέέἐἒἔὲ', 'e'],
               ['ἑἓἕ', 'he'], ['ζ', 'z'], ['ηήἠἢἤἦὴῆῃᾐᾒᾔᾖῂῇῄ', 'ē'], ['ἡἣἥἧᾑᾓᾕᾗ', 'hē'], ['θ', 'th'],
               ['ιίίἰἲἴἶὶῖῗΐϊ', 'i'], ['ἱἳἵἷ', 'hi'], ['κ', 'k'], ['λ', 'l'], ['μ', 'm'], ['ν', 'n'], ['ξ', 'x'],
               ['οόόὀὂὄὸ', 'o'], ['ὁὃὅ', 'ho'], ['π', 'p'], ['ρῥ', 'r'], ['ῤ', 'rh'], ['σς', 's'], ['τ', 't'],
               ['υύύὐὒὔὖὺῦῧῢΰϋ', 'u'], ['ὑὓὕὗ', 'hu'], ['φ', 'ph'], ['χ', 'ch'], ['ψ', 'ps'],
               ['ωώώὠὢὤὦὼῶῳᾠᾢᾤᾦῲῷῴ', 'ō'], ['ὡὣὥὧᾡᾣᾥᾧ', 'hō'], ['·', ':'], [';', '?']]
    for ch in logoi:
        greeklet = False
        for pair in ch_list:
            if ch in pair[0]:
                greeklet = True
                transliteration += pair[1]
        if not greeklet:
            transliteration += ch
    # and now we re-introduce capitalization
    transliteration_list = transliteration.split()
    for index, word in enumerate(transliteration_list):
        if index in capitalized_logoi_indices:
            transliteration_list[index] = word[0].upper() + word[1:]
    transliteration = ' '.join(transliteration_list)
    return transliteration
