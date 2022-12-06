def calculator():
    nb = int(input("Taper votre nombre > "))
    nb1 = nb
    for i in range(10):
       nb = (i+1) * nb1
       print(nb1, "x", i+1, "=", nb)

calculator()