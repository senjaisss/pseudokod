// G-Version - Split the Nota
/*

START

SET notan = INPUT ("Ange summa:")
SET antalVänner = INPUT ("Ange antal vänner:")
SET dricks = INPUT ("Ange dricks:")

function räknaKostnadPerPerson (notan, antalVänner, dricks)
    totalSumma = notan + dricks
    kostnadPerPerson = totalSumma / antalVänner
    return kostnadPerPerson
end function

kostnadPerPerson = räknaKostnadPerPerson(notan, antalVänner, dricks)
PRINT "Varje person ska betala: " + kostnadPerPerson

END

*/

// VG-Version - Lewis Carroll Word Puzzle
/*

START 

play()

function spela(ordbok, nuvarandeOrd, slutOrd, antalGissningar)
    IF nuvarandeOrd === slutOrd
        PRINT "Grattis! Du har gissat slutordet " + slutOrd + "!"
        PRINT "Du har klarat spelet på " + antalGissningar + " gissningar!"
        RETURN
    END IF

    SET gissatOrd = input("Skriv in din gissning: ")

    IF ärGiltigtOrd(gissatOrd, ordbok) AND ärEnBokstavOlika(nuvarandeOrd, gissatOrd)
        PRINT "Rätt gissat!"
        spela(ordbok, gissatOrd, slutOrd, antalGissningar + 1)
    ELSE IF NOT ärGiltigtOrd(gissatOrd, ordbok)
        PRINT "Ogiltigt ord! Det finns inte i ordboken."
        spela(ordbok, nuvarandeOrd, slutOrd, antalGissningar) 
    ELSE IF NOT ärEnBokstavOlika(nuvarandeOrd, gissatOrd)
        PRINT "Du får bara ändra en bokstav!"
        spela(ordbok, nuvarandeOrd, slutOrd, antalGissningar)
    END IF
end function

function ärGiltigtOrd(ord, ordbok)
    FOR varje ordboksord i ordbok
        IF ordboksord === ord
            THEN return true
        END IF
    END FOR
    RETURN false
end function

function ärEnBokstavOlika(ord1, ord2)
    IF längden av ord1 != längden av ord2
        RETURN false
    END IF

    SET diffCount = 0
    FOR i från 0 till längden av ord1
        IF ord1[i] != ord2[i]
            diffCount = diffCount + 1
        END IF
    END FOR

    RETURN diffCount === 1
end function

function play()
    SET ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]
    SET startOrd  = "FOUR"
    SET slutOrd = "FIVE"

    PRINT "Lewis Carroll Word Puzzle"
    PRINT "Ändra " + startOrd + " till " + slutOrd + " genom att endast ändra en bokstav åt gången! Ordet måste finnas i ordboken... Lycka till!"
    spela(ordbok, startOrd, slutOrd, 0)
end function

END
*/