def nombre ():
    ls = []
    nb = int(input("Taper votre nombre pour afficher les dix suivants > "))
    for i in range(0,10) :
        nb += 1
        ls.append(nb)
    print(ls)
nombre ()