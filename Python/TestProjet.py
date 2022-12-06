"""IPSSI BTC 25.1
Rémi KORZENIOWSKI
Théo MENNANT--FERRY"""

def pendu():
    wd = str(input("\n--------------------------------\nBienvenue dans le jeu du PENDU.\nRémi KORZENIOWSKI and Théo MENNANT-FERRY\n\nBon jeu !\n\nMerci de taper le mot à deviner > "))
    solution = []
    defaut = []
    lifes = 8
    a = " "
    while len(wd)>len(defaut):
        defaut.append("-")

    i = 0 
    while len(wd)>len(solution):
        solution.append(wd[i])
        i += 1
    
    while defaut != solution :
        if lifes <= 0:
            print("\n--------------------------------\nVOUS AVEZ PERDU.\nMerci d'avoir joué au jeu.")
            break
        print("Il vous reste " + str(lifes) + " vies.\nVous perdez à 0 vie.\n")
        l = str(input("Merci de taper UNE lettre > "))
        i2=0
        isInit = False
        for i2 in range (len(wd)):
            if l == solution[i2]:
                isInit = True
                defaut.pop(i2)
                defaut.insert(i2, l)
                i2 += 1
                print(defaut)
        if isInit == False and l != solution[i2]:
            lifes -= 1

    if defaut == solution :
            print("\n--------------------------------\nVOUS AVEZ GAGNE.\nMerci d'avoir joué au jeu.")

pendu()
