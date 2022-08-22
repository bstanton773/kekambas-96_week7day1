animals = ['cat', 'bird', 'dog']
new_list = animals
animals_again = ['cat', 'bird', 'dog']

print(id(animals))
print(id(new_list))
print(id(animals_again))


print(id(animals) == id(new_list))
print(id(animals) == id(animals_again))