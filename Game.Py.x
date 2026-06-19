### Print a welcome message 
print("\nWelcome to Meiy the Goat")
print("you are a young farmer tasked with finding Meiy, the runaway goat")
print("\nThe game has three levels. \nEach increasing in difficulty as Meiy gets farther from the farm. \nYou must track her using clues, solve obstacles and interact with characters before nightfall.")
print("\nAs a young farmer, you decide which route to follow")
print("Do you want to search left or right?")

# Level 1
searchChoice= input("> ")

if(searchChoice == "left"):
    print ("\nYou choose left! ")
    print("As you go left, you see a group of local hunters")
    print("Do you want to ask questions?")

    LocalHaunters = input("> ")

    if(LocalHaunters == "yes"):
        print("\nHave you seen Meiy my Goat?, No we have not")
        print("Okay i will go the other way")
    elif(LocalHaunters == "no"):
        print("\nYou decide to take the other path")

    else:
        print("\nInvalid choice. Please enter yes or no")

elif(searchChoice == "right"):
    print("\nYou chose to go the right way")
    print("As you go right you see a trail of Meiy's tiny feet")
    print("Do you want to follow the trail?")

    trailChoice= input("> ")

    if(trailChoice == "yes"):
        print("\nyou follow the trail and see a large hole!")
        
    elif(trailChoice == "no"):
        print("\nYou decide to scream her name Meiy")
        print("You then hear a large Mehhhhhh sound coming from the corner")
        print("you go to the corner and see Meiy playing with her other friends")
    else:
        print("\nInvalid choice. Please enter yes or no.")
else:
    print("\nInvalid choice. Restarting level 1...")
    exit()


# Level 2: 
print("\nLEVEL 2: FOREST")
print("You enter the forest. A river blocks your path.")
print("Try to cross the fallen log (left) or build a raft (right)?")
forest_choice = input("> ").lower()

if forest_choice == "left":
    print("\nThe log cracks! You barely make it across, losing your hat.")
elif forest_choice == "right":
    print("\nYou spend hours building a raft. Meiy's bleats grow fainter!")

print("\nAcross the river, you see a locked gate with a riddle:")
print("'I have keys but no locks. I have space but no room. What am I?'")
riddle_answer = input("> ").lower()

if riddle_answer == "keyboard":
    print("\nThe gate creaks open! Meiy is just ahead.")
else:
    print("\nThe gate won't budge. Night falls, Meiy is lost forever.")
    exit()


# Level 3
print("\nLEVEL 3: ")
print("Meiy is trapped in a cave! A sleeping wolf guards the entrance.")
print("Sneak past(left), distract with food (right), or fight (center)")
final_choice = input("> ").lower()

if final_choice == "left":
    print("\nYou tiptoe past the wo;f and grab Koko. Success!")
elif final_choice == "right":
    print("\nThe wolf wakes but eats your bread. You escape with Meiyx!")
elif final_choice == "center":
    print("\nThe wolf overpowers you. Game Over!")
else:
    print("Invalid Choice. The wolf attacks!")
    exit()

print("\n*** YOU FOUND MEIY! ***")
print("Developer:Ezekiel!!!")

