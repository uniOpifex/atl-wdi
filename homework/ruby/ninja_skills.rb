a = true
b = false
puts a == b
puts a || b

my_var = nil
puts my_var
puts "#{my_var} was here"
print my_var
puts my_var.class



d = 10
e = 10.2
d = e
puts d

christine = " Hi, I'm Christine"
likesTo = "long walks on the beach, kinda"

puts "#{christine} and I like #{likesTo}"
g = "2"
gToNumber = 2

puts g.to_f + gToNumber

def my_method1
  print "You!, user enter a number \n"
  nums = gets.chomp.to_i
  puts nums * 2
end

def my_method2 
  print "Enter your name \n"
  first_name = gets.chomp
  print "What do you like to do? \n"
  user_likes = gets.chomp
  print "#{first_name} likes to do #{user_likes}"
end

myFirstArray = []
myFirstArray = ["a","b","c","d","e",1,2,3,4]
puts myFirstArray.last
puts myFirstArray[0]
myFirstArray[1] = "Joe"
myFirstArray[2] = "3"
myFirstArray.push true
puts myFirstArray[3].class

myFavoriteAnimal = {
  Edgar: "Donkey",
  Nate: "Human",
  Ka: "Snake",
  Bojack: "Horse",
  J: "Otter"
}

myFavoriteAnimal[:Edgar] = "Bear"

favoriteMovie = {}

favoriteMovie[:movie] = "someMovie"

puts favoriteMovie


