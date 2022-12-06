def factorielle():
    n = int(input("Taper votre nombre pour calculer sa factorielle > "))
    r1 = n
    for i in range(n):
        r1 = (i+1) * r1
    print(r1)
factorielle()