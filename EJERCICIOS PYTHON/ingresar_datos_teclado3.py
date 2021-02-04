print ("registro de promedios de estuiantes")
nombre=input("ingresa tu nombre: ")
nota1=int(input(nombre+", ingresa tu clificacion en quimica: "))
nota2=int(input(nombre+", ingrese su nota en fisica: "))
nota3=int(input(nombre+", ingrese su nota en matematicas:"))
promedio=(nota1+nota2+nota3)/3
promedio=int(promedio)
if promedio>5:
    print ("felicidades "+nombre+", aprobaste con un promedio de: ",promedio)
print ("fin")    







      
