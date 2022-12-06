#Exercice 6
def comparateur ():
    accident = '0'
    age = '18'
    permis = '0'
    assurance = '0'
    age = int(input("Merci de bien vouloir taper votre age > "))
    permis = int(input("Merci de bien vouloir taper vos années depuis que vous avez le permis > "))
    accident = int(input("Combien d'accidents avez-vous fait ? 0...+ > "))
    assurance = int(input("Depuis combien de temps êtes-vous assuré chez nous ? >"))
    if(age < 25):
        if(permis < 2):
            if(accident == 0):
                print("TARIF ROUGE")
            elif(accident == 1):
                print("NOUS NE POUVONS PAS VOUS ASSURER")
        elif(permis > 2):
            if(accident == 0):
                print("TARIF ORANGE")
            elif(accident == 1):
                print("TARIF ROUGE")
    if(age > 25):
        if(permis < 2):
            if(accident == 0):
                print("TARIF ORANGE")
            elif(accident == 1):
                print("TARIF ROUGE")
            elif(accident > 1):
                print("PAS ASSURABLE")
        elif(permis > 2):
            if(accident == 0):
                print("TARIF VERT")
            elif(accident == 1):
                print("TARIF ORANGE")
            elif(accident == 2):
                print("TARIF ROUGE")
            elif(accident > 2):
                print("NON ASSURABLE")

comparateur ()