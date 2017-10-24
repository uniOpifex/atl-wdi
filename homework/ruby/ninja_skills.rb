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

firstRange = 1..10
firstRange =*(firstRange)

secondRange = 1...1000
secondRange =*(secondRange)

# for i in firstRange
#   print i.to_s
# end

x = 0
while x < 50
 x +=1
 print secondRange[x]
end
print "\n"

newRangeArr= []
firstRange.each do |n|
  newRangeArr.push n.odd? ? n * 2 : n
 end
 print newRangeArr

 firstRange.map! do |n|
  n.even? ? n.to_s : n
end

print firstRange


# this is euler problem 1
print (1...10).select{ |n| n % 3 == 0 || n % 5 == 0 }.reduce(:+)


def check_prime? nums
  
  (2...(nums)).map do |n|
    if (nums % n) == 0
      return false
    end
  end
  return true
end

print check_prime? 7


def getPrimes max
  
  return (1...max).select{ |n| check_prime? n }
  
end

print getPrimes 100