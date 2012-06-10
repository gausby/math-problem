# The problem

I saw this problem posted on facebook:

  > This problem can be solved by pre-school children in 5-10 minutes, by programer - in 1 hour, by people with higher education ... well, check it yourself! :)
  >
  > 8809=6, 
  > 7111=0, 
  > 2172=0, 
  > 6666=4, 
  > 1111=0, 
  > 3213=0, 
  > 7662=2, 
  > 9313=1, 
  > 0000=4, 
  > 2222=0, 
  > 3333=0, 
  > 5555=0, 
  > 8193=3, 
  > 8096=5, 
  > 7777=0, 
  > 9999=4, 
  > 7756=1, 
  > 6855=3, 
  > 9881=5, 
  > 5531=0, 
  > 2581=?

It took me about an hour to solve because I had to set up unit tests.


## How to run

Requirements: *node.js*, *NPM* and the awesome unit test framework *'buster'*, which is installed through NPM.

Clone the repository and run a `npm install` in the root of the project. Then run a `npm test`. It should pass without any errors.

Now start the program by running a `npm start`. It will throw you into a REPL where you can solve to problem by typing:

    > solve(2581);
    2

Oh yeah, btw...**Spoiler alert!**.


## Caveats

  * If you want to solve the `0000` problem, you have to parse it in as a string.


## License

Sort of beerwear license.

You may use it for anything you want. If you like it, and we meet in person, you can buy me a beer, whatever. Oh yeah, don't blame me if your computer catches on fire.

P.S. I love you.