def calcul ():
    nb = 0
    facture = 0
    print("\nBienvenue dans ce programme de guide tarifaire et de facturation. \nLe tarif débute à : \n0,10 E les dix premières copies \n0.09 E les vingt suivantes \net 0.08 au delà \n")
    nb = int(input('Merci de bien vouloir saisir le nombre de feuille désiré : '))
    if(nb > 0 and nb <= 10 ):
        facture = nb * 0.10
        print("A")
    elif nb > 10 and nb <= 20:
        facture = 10 * 0.10 + (nb - 10) * 0.09
        print("B")
    elif(nb > 20):
        facture = 10 * 0.10 + 10 * 0.09 + (nb - 20) * 0.08
        print("C")
    print(facture)

calcul ()