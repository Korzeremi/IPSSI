def time ():
    hour = 00
    mn = 00
    se = 00
    print("Bienvenue utilisateur dans ce programme qui déterminera l'heure une minute après cele saisie.")
    hour = int(input('Merci de taper l heure de 0 à 24h :'))
    mn = int(input('Merci de taper les minutes de 0 à 59mn :'))
    se = int(input('Merci de taper les secondes de 0 à 59s :'))
    se += 1
    if (se > 59):
        se = str("00")
        mn += 1
    if (mn > 59):
        hour += 1
        mn = 0
    if(hour > 23):
        hour = str("00")
    if (mn >= 0 | mn < 10):
        mn = str("0") + str(mn)
    print("Dans une minute, il sera : "+ str(hour) + "h"  + str(mn) + "mn et " + str(se) +"s")

time()