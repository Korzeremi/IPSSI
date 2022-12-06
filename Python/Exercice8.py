import random
def nombre():
    nb = 0
    nb = random.randint(10,20)
    playernb = 0
    while nb != playernb :
        playernb = int(input("Taper le nombre que vous pensez être entre 10 et 20 > "))
        if playernb < nb :
            print("nombre trop bas")
            if playernb < 10 :
                print("Plus grand !")    
        elif playernb > nb :
            print("nombre trop haut")
            if playernb > 20 :
                print("Plus petit !")
    print("Bien joué !")
nombre() 