def elections ():
    c1 = 0
    c2 = 0
    c3 = 0
    c4 = 0
    print("Bienvenue à ce programme de statistiques pour les élections.")
    c1 = float(input("Merci de taper le score du premier candidat sans le symbole % / 100 : "))
    c2 = float(input("De même pour le deuxième / 100 : "))
    c3 = float(input("De même pour le troisième / 100 : "))
    c4 = float(input("De même pour le quatrième / 100 : "))
    if(c1>100 or c2>100 or c3>100 or c4>100):
        print("FATAL ERROR")
    elif(c1>=50 and c2 <= 50 and c3 <= 50 and c4 <= 50):
        print("Candidat 1 sera élu dès le premier tour")
    elif(c1>c2>c3>c4 or c1>c3>c4>c2 or c1>c4>c2>c3 or c1>c4>c3>c2 or c1>c3>c2>c4 or c1>c2>c4>c3):
        print("Candidat 1 sera élu au premier tour")
    else:
        y(gvzht)
    

elections ()