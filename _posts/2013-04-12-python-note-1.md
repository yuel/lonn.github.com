---
layout: post
title: Python notes about list, lambda
---
##list comprehension   

    my_list = range(51)                                  #build a list of the numbers from 0 to 50   
    evens_to_50 = [i for i in range(51) if i % 2 == 0]   #generate a list according to some logic   
   
##List Slicing `list[start:end:stride]`   

    l = [i ** 2 for i in range(1, 11)]   #Should be [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]   
    print l[2:9:2]                       #Should be [9, 25, 49, 81]   
    backwards = l[::-1]                  #Should be [100, 81, 64, 49, 36, 25, 16, 9, 4, 1]  
   
##Lambdas   

    lambda x: x % 3 == 0                    #Should like def by_three(x): return x % 3 == 0  
    filter(lambda x: x % 3 == 0, my_list)   #filter uses the lambda to determine what to filter, and the second argument is the list it does the filtering on

##File I/O

    with open("file", "mode") as variable:   
    variable.write("Success!")   #Read or write to the file

##Inheritance `super`

    class DerivedClass(Base):                  ##
        def some_method(self):                 #syntax looks like this
            super(DerivedClass, self).meth()   ##
            
    class Car(object):
        def __init__(self, model, color, mpg):
            self.model = model
            self.color = color
            self.mpg = mpg

    class ElectricCar(Car):
        def __init__(self, model, color, mpg, typeOfBattery):
            self.typeOfBattery = typeOfBattery
            super(ElectricCar, self).__init__(model, color, mpg)
