def somme():
    nb = int(input("Taper votre chiffre pour le résultat somme des termes consécutifs > "))
    nbf = ((1 + nb)*nb)/2
    print(int(nbf))
somme()

#[(premier terme + dernier terme) x nombre de termes]/2