Simple script that allows you to turn text or background elements into rainbow garbage.

Usage:

For text or anything with the color property, set class as foxrainbow.

For background elements or anything with the background-color property, set class as foxrainbowbg.

To turn it on only when hovering over something, use foxrainbowhover. You can change what element triggers the hover by passing its id along using data-foxrainbowhover="id".

For backgrounds, foxrainbowhoverbg. No support for changing the trigger yet.

You can change the speed and direction of the effect by settings the individual speed variables to be a different number. Negative numbers invert the direction.


For the lazy:

Class  | Effect
------------- | -------------
foxrainbow  | Rainbow effect on anything with css color support.
foxrainbowbg  | Rainbow effect on anything with css background-color support.
foxrainbowhover  | Rainbow effect on anything with css color support. Turns on by moving the mouse on top. You can select a different target by passing along their id using data-foxrainbowhover="#id"
foxrainbowhoverinv  | Rainbow effect on anything with css color support. Turns off by moving the mouse on top. You can select a different target by passing along their id using data-foxrainbowhover="#id"
foxrainbowhoverbg  | Rainbow effect on anything with css background-color support. Turns on/off by moving the mouse on top / away.
