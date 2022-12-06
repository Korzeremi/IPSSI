def taxes ():
    sexe = 'D'
    age = 0
    print ("\nWelcome at this program. You'll know if you have to paid taxes. \n")
    age = int(input("Please insert your age : "))
    sexe = str(input("Select your type by typing the letter :\n\n - If you're a men after 20 years old, type M. \n - If you're a woman between 18 and 35 years old, type W. \n - If You're not concerned, type D. \nTyping here please : "))
    if(sexe == 'M' and age >= 20):
        print("You have to paid Taxes")
    if(sexe == 'W' and age >= 18 and age <= 35):
        print("You have to paid Taxes")
    else :
        print("You don't have to paid taxes")
taxes ()   