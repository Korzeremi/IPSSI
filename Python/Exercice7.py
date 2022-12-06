import random
def nombre():
    nb = 0
    nb = random.randint(1,10)
    playernb = 0
    while nb != playernb :
        playernb = int(input("Taper le nombre que vous pensez être entre 1 et 10 > "))
        if playernb < nb :
            print("nombre trop bas")
        elif playernb > nb :
            print("nombre trop haut")
    print("Bien joué !")
nombre() 