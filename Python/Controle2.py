#Rémi KORZENIOWSKI
#IPSSI BTC 25.1

#Exercice 2
def palindrome ():
    word = 'd'
    palin = 'd'
    word = str(input("Tapez votre mot pour savoir si c'est un palindrome : "))
    palin = word[::-1]
    if(palin == word):
        print("c'est un palindrome")
    else:
        print("Ce n'est pas un palindrome")
palindrome ()