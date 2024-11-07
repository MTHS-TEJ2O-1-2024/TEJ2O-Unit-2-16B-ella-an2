/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Nov 2024
 * This program connects bluetooth with another microbit
*/

// variables
let distanceToObject: number

// setup
radio.setGroup(133)
basic.showIcon(IconNames.Happy)

// checking the distance
distanceToObject = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
)

// sending the string
if (distanceToObject <= 10) {
    basic.showIcon(IconNames.No)
    radio.sendString("Too close")
    basic.showIcon(IconNames.Happy)
}

// receiving the string
radio.onReceivedString(function (receivedString) {
    basic.clearScreen()
    basic.showString(receivedString)
    basic.showIcon(IconNames.Happy)
})