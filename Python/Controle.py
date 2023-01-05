#Rémi KORZENIOWSKI
#IPSSI BTC 25.1

#Hello World
#Exercice 1
def ClueFinder ():
    chain = 'default'
    clue = 'd'
    item = 0
    posClue = [item]
    print("\n\nBonjour et Bienvenue dans notre programme de récupération de caractères.\nVous allez devoir saisir une chaine de caractères ainsi qu'un ou plusieurs indices.\n")
    chain = (input("Merci de bien vouloir taper votre chaine de caractères : "))
    clue = str(input("Merci de taper le caractères à trouver : "))    
    posClue.extend(str(chain.find(clue) + 1))
    for item in posClue :
        print("Dans votre chaine de caractères (" + chain + ") vos indices (" + clue + ") se trouvent positions : " )
        print(posClue)

ClueFinder ()