#Rémi KORZENIOWSKI
#IPSSI BTC 25.1

#Exercice 3
import random

def secret ():
    secretnb = random.randint(1,1000)
    playernb = 0
    print("Nombre aléatoire effectué")
    while(secretnb != playernb):
        playernb = int(input("Taper le nombre que vous pensez être entre 1 et 1000 : "))
       
        if(playernb > secretnb):
            print("Votre nombre est trop élevé")
        elif(playernb < secretnb):
            print("Votre nombre est trop bas")
    print("Bien joué")
secret ()