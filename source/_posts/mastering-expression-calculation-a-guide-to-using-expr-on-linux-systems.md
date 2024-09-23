---
title: "Mastering Expression Calculation: A Guide to Using 'Expr' On Linux Systems"
date: 2024-09-15T21:35:44.234Z
updated: 2024-09-22T16:44:32.341Z
tags:
  - desktop
categories:
  - tech
thumbnail: https://thmb.techidaily.com/2a29084ef28c5d6ebf693615660d627bf6405cc5a8ac614e41f7b335143de3df.jpg
---

## Mastering Expression Calculation: A Guide to Using 'Expr' On Linux Systems

### Quick Links

* [The expr Command](https://win-solutions.techidaily.com/solution-guide-resolving-persistent-pc-crashes-while-playing-darkest-dungeon-2/)
* [expr Command Options](https://ios-unlock.techidaily.com/is-your-apple-iphone-xs-max-in-security-lockout-proper-ways-to-unlock-by-drfone-ios/)
* [Performing Arithmetic Operations With expr](https://blog-min.techidaily.com/how-to-recover-deleted-photos-on-11-proplus-by-stellar-photo-recovery-android-mobile-photo-recover/)
* [Comparing Two Expressions With expr](https://remote-screen-capture.techidaily.com/updated-mellow-playtime-10-top-rated-stress-erasers-for-2024/)
* [Finding a String's Length With expr](https://extra-resources.techidaily.com/video-editing-revolutionized-intense-examination-of-vivacut-24/)
* [Matching Two Strings With expr](https://tech-haven.techidaily.com/generate-expert-level-professional-emails-and-simplify-your-correspondence-with-5-free-ai-tools-leveraging-chatgpt-insights-save-time-on-email-management/)
* [Incrementing and Decrementing a Variable With expr](https://extra-skills.techidaily.com/photo-refinement-mastering-the-psx-erase-feature-for-2024/)
* [Extracting a Substring Using expr](https://youtube-help.techidaily.com/new-pioneering-avengers-the-marvellous-world-builders/)
* [Performing expr Operations Using a Shell Script](https://extra-guidance.techidaily.com/new-snapseed-101-easy-steps-to-photo-perfection/)
* [Try Some Alternative Linux Commands](https://twitter-videos.techidaily.com/updated-in-2024-navigating-full-hd-display-on-twitter-videos/)

### Key Takeaways

* The expr command can evaluate expressions and output the corresponding value. You can use it to perform arithmetic calculations, comparisons, and string operations.
* Using the expr command, you can search for specific patterns in text, validate user input, and even replace text based on defined patterns.
* The expr command can also manipulate strings using string functions like finding length, comparing strings, and extracting substrings.

 Want to do some simple calculations in Linux? Just use the expr command. This command can perform various operations, such as evaluating expressions, extracting substrings, comparing strings, and more. Using expr, you can add, subtract, multiply, or divide two numbers, and get the answer as the output.

##  The expr Command

 expr is a tool that can perform calculations and manipulate strings based on the expressions you provide. With the expr command, you can perform various operations on integers and strings, like comparing values or finding specific patterns using [regular expressions](https://instagram-clips.techidaily.com/discreetly-explore-instagram-stories-with-us-for-2024/).

 You can pass multiple expressions to expr as arguments, separated by spaces. It not only evaluates an expression but also shows its corresponding output on the terminal. The expr command works both in the [Bash terminal](https://blog-min.techidaily.com/how-to-repair-iphone-6-system-drfone-by-drfone-ios-system-repair-ios-system-repair/) and [shell scripts](https://video-ai-editor.techidaily.com/updated-trim-avi-videos-with-ease-top-picks-for-desktop-and-mobile-devices/).

 The expr command is handy when manipulating data or doing calculations without leaving the terminal. However, you need to be careful with the syntax and the order of the expressions, or else the command will fail and display an error message.

 The syntax of the expr command is:

        `expr expression`
    
 ... where the expression can be a combination of arguments and operators. For example, the below-given expression evaluates the operation between arg1 and arg2 and displays the result:

        `expr arg1 operator arg2`
    
 The arguments can be numbers or strings, depending on the operator. The operators can be arithmetic, relational, string-related, or logical. It is the symbol that specifies the operation to be performed. For example, for integers, you can use operators like +, -, \*, /, and %.

 For strings, you can use regular expressions and character sets to find matches and indexes. You can also use parentheses to group expressions and backslashes to escape special characters.

##  expr Command Options

 While expr doesn't have traditional command-line options, it offers versatile operators for arithmetic, string manipulation, and comparison. Furthermore, you can use the **\--help** option to show expr's help page, which explains its syntax, features, and examples:

        `expr --help`
    
![Linux terminal with expr command documentation](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/1-11.png) 

<!-- affiliate ads begin -->
<a href="https://aidotcom.pxf.io/c/5597632/2134502/19576" target="_top" id="2134502">
  <img src="//a.impactradius-go.com/display-ad/19576-2134502" border="0" alt="https://techidaily.com" width="672" height="90"/>
</a>
<img height="0" width="0" src="https://aidotcom.pxf.io/i/5597632/2134502/19576" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 To check the expr command version, run:

        `expr --version`
    
![Linux terminal that shows the version number and developer details of the expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/2-12.png) 

 This option displays the version number, source code, license, and author of expr.

##  Performing Arithmetic Operations With expr

 To use the expr command for basic arithmetic operations, write the command expr followed by a space. Then, write the expression that you want to evaluate. This expression is a combination of integers and operators such as +, -, \*, and /. Make sure to separate each token (integer or operator) in the expression by a space character.

 For example, if you want to find out the sum of 15 and 12 using expr, you can write:

        `expr 15 + 12`
    
![Linux terminal showing the addition of two variables using expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/3-10.png) 

 Similarly, you can use the expr command to perform other arithmetic operations, such as subtraction, multiplication, and division. Let's evaluate some expressions using the expr command:

        `expr 15 - 12  
expr 15 \* 5  
expr 10 / 2`
    
![Linux terminal showing various arithmetic operations with expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-11.png) 

 You need to escape the multiplication (\*) operator with a backslash (\\) to avoid shell expansion. Otherwise, the shell will try to match the operator (\*) with the filenames in the current directory and pass them to the expr command, which will cause an error.

![Linux terminal with syntax error](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/4-1-1.png) 

 You can also prevent the shell from interpreting the characters by quoting the arguments and operators properly:

        `expr "5" "*" "3"`
    
![Linux terminal with variables and operator quotes with double quotations marks](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/5-8.png) 

##  Comparing Two Expressions With expr

 To compare two expressions using the expr command, you can use logical operators such as =, <, >, and !=. If you see the command output one, the condition is true, otherwise, it is false, and the value returned is zero.

 For example, to check if the first argument is equal to the second argument, we use the = operator:

        `expr 40 = 50`
    
![Linux terminal displaying checking of the two numbers equality using expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/6-8.png) 

 Now, let's check whether the first argument is smaller than the other argument. For that, we use the < operator:

        `expr 40 \< 50`
    
![Linux terminal showing commands to check the smaller variable using the expr command with less than operator](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/7-9.png) 

 You can also check whether the values are not equal. To do that, simply use the != operator between the two arguments' values:

        `expr 45 \!= 55`
    
![Linux terminal showing the comparison of two values using the expr command with not equal to operator](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/8-8.png) 

 Here, the output 1 indicates that 45 is not equal to 55.

 This way, the expr command provides a simple and effective method to compare numerical values.

 Like the multiplication (\*) operator, the <, >, and != operators also need to be escaped with a backslash (\\). Otherwise, they may be interpreted as special characters by the shell.

##  Finding a String's Length With expr

 To find the length of a string using the expr command, you can use the length method. This operator will return the number of characters present in the given string to the output.

 For example, to find the length of the string 'How To Geek', run this command:

        `expr length 'How To Geek'`
    
![Linux terminal showing the length using the expr command with the length operator](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/9-5.png) 

 The output is 11 because there are nine characters and two white spaces in the string. If you want to find the length of a string without whitespace, you can use other commands like [tr](https://fox-hovers.techidaily.com/new-discovering-the-quintessential-5-title-creators-online/) or [awk](https://facebook-videos.techidaily.com/new-in-2024-revolutionizing-advertising-on-facebook-with-the-best-video-tactics/) to remove them first. For example:

        `expr length "$(echo 'How To Geek' | tr -d ' ')"`
    
![Linux terminal displaying the string length without the including the white spaces](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/9-1-1.png) 

<!-- affiliate ads begin -->
<a href="https://aligracehair.sjv.io/c/5597632/1948954/19272" target="_top" id="1948954">
  <img src="//a.impactradius-go.com/display-ad/19272-1948954" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://aligracehair.sjv.io/i/5597632/1948954/19272" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 The output will be nine because the tr command deletes all the spaces in the string before passing it to the expr length command.

##  Matching Two Strings With expr

 One of the operations that expr offers is the comparison of two strings. For this, use the colon (:) operator with the expr command. This operator returns the number of characters that match at the beginning of both strings.

 The syntax for using this operator is:

        `expr string1 : string2`
    
 This compares the two strings and returns the number of matching characters from the beginning of the string.

 For example, the below command will output five, as both strings have the first five characters in common :

        `expr 'HowToGeek' : 'HowTo'`
    
![Linux terminal showing the matching of two different strings using the expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/10-7.png) 

<!-- affiliate ads begin -->
<a href="https://appsumo.8odi.net/c/5597632/2123734/7443" target="_top" id="2123734">
  <img src="//a.impactradius-go.com/display-ad/7443-2123734" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://appsumo.8odi.net/i/5597632/2123734/7443" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 Consider another example, where two given strings are the same:

        `expr 'How To Geek' : 'How To Geek'`
    
![Linux terminal showing the matching of two same strings using the expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/11-4.png) 

 The output is 11 as both strings have all the characters in common, including the white spaces.

 If there is no matching character present, then the output will be zero:

        `expr 'How To Geek' : 'Linux'`
    
![The Linux terminal displays how to match different string variables using the expr command](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/12-5.png) 

##  Incrementing and Decrementing a Variable With expr

 The expr command can also evaluate an expression that increments and decrements a variable's value. Further, you can assign the result to a new variable.

 Consider the example below, where we have defined a variable "a" and incremented its value using the expr command:

        `` a=20  
a=`expr $a + 1`  
echo $a ``
    
![The Linux terminal displays usage of expr command to increment the variable value by 1](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/13-2.png) 

 Similarly, to decrement the variable value, use the same syntax but replace the addition sign with subtraction:

        `` a=20  
a=`expr $a - 1`  
echo $a ``
    
![The Linux terminal displays usage of expr command to decrement the variable value by 1](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/14-3.png) 

<!-- affiliate ads begin -->
<a href="https://united.elfm.net/c/5597632/2139557/4704" target="_top" id="2139557">
  <img src="//a.impactradius-go.com/display-ad/4704-2139557" border="0" alt="https://techidaily.com" width="300" height="90"/>
</a>
<img height="0" width="0" src="https://united.elfm.net/i/5597632/2139557/4704" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

##  Extracting a Substring Using expr

 To extract a substring from a given string, you can use the expr command with a substr operator. This way, you can extract specific information from a larger text, such as name, date, or any code. You can also use this operator to remove unwanted characters or spaces from a string.

 Consider the following example commands, where a new string is initialized. After that, using the expr command, we will get the second to fifth characters from the string "HowToGeek":

        `` a=HowToGeek  
b=`expr substr $a 2 5`  
echo $b ``
    
![The Linux terminal displays the usage of the expr command with substr option to extract a substring](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/15-2.png) 

##  Performing expr Operations Using a Shell Script

 To automate expression handling using the expr command, you can create a custom shell script. Shell scripts are multipurpose tools that can help you do more with less. With shell scripts, you can automate repetitive tasks, manipulate data, and perform complex calculations.

 For example, you can create a script for adding two numbers using the expr command. First, you need to create a file with a ".sh" extension, such as "my\_script.sh". This tells the shell that it is a script file. Next, you need to write a code that can take two numbers as input and output their sum. Here is a sample script that can do that:

        `` echo "Enter two numbers"   
read a  
read b  
sum=`expr $a + $b`  
echo "Sum of two numbers is= $sum" ``
    
![Bash script file containing the script of adding two numbers](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/16-2.png) 

<!-- affiliate ads begin -->
<a href="https://ephamedtechinc.pxf.io/c/5597632/2139322/26400" target="_top" id="2139322">
  <img src="//a.impactradius-go.com/display-ad/26400-2139322" border="0" alt="https://techidaily.com" width="728" height="90"/>
</a>
<img height="0" width="0" src="https://ephamedtechinc.pxf.io/i/5597632/2139322/26400" style="position:absolute;visibility:hidden;" border="0" />
<!-- affiliate ads end -->

 This script uses the expr command to evaluate arithmetic operations on the variables "a" and "b." The echo command prints a message to the standard output, while the read command reads a line from the standard input and puts it in a variable.

 Next, to make this script executable, run the [chmod](https://extra-guidance.techidaily.com/new-perfect-synchronization-enhancing-audio-visual-with-subtitles-in-wmp/) command:

        `chmod +x my_script.sh`
    
 Now, proceed with the execution of the script by running:

        `./my_script.sh`
    
![Linux terminal displaying the execution of bash script file and displays the output](https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/01/17-1.png) 

 You will be prompted to enter two numbers. After entering the numbers, you will see the script will display the sum of both numbers on screen. You can also modify the script to perform other operations or tasks as per your needs.

##  Try Some Alternative Linux Commands

 This article mainly focuses on the expr command, but you can also try a few other commands for various operations. These commands include declare, let, and bc. All these command-line tools can perform simple to intricate mathematical operations on defined values.

 The declare command can create and modify variables and their attributes. Similarly, the let command evaluates arithmetic expressions on shell variables. Lastly, bc is a command-line calculator that supports arbitrary precision arithmetic and various math functions. It can also parse a scripting language that supports loops, conditional statements, and variables.

<ins class="adsbygoogle"
     style="display:block"
     data-ad-format="autorelaxed"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="1223367746"></ins>

<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-7571918770474297"
     data-ad-slot="8358498916"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>

<span class="atpl-alsoreadstyle">Also read:</span>
<div><ul>
<li><a href="https://screen-recording.techidaily.com/new-in-2024-scrutinized-screen-recording-tools-top-8-picks/"><u>[New] In 2024, Scrutinized Screen Recording Tools Top 8 Picks</u></a></li>
<li><a href="https://instagram-video-files.techidaily.com/updated-the-ultimate-guide-to-longer-instagram-videos/"><u>[Updated] The Ultimate Guide to Longer Instagram Videos</u></a></li>
<li><a href="https://youtube-web.techidaily.com/approved-humour-haven-strategies-for-parody-video-creation/"><u>2024 Approved Humour Haven Strategies for Parody Video Creation</u></a></li>
<li><a href="https://extra-guidance.techidaily.com/2024-approved-master-avi-gif-transformation-an-all-inclusive-guide-by-filmora/"><u>2024 Approved Master AVI-GIF Transformation An All-Inclusive Guide by Filmora</u></a></li>
<li><a href="https://some-skills.techidaily.com/august-5th-edition-insightful-answers-and-tips-from-todays-new-york-times-connection-quiz/"><u>August 5Th Edition: Insightful Answers & Tips From Today's New York Times Connection Quiz</u></a></li>
<li><a href="https://some-skills.techidaily.com/decoding-project-fuchsia-exploring-googles-covert-and-revolutionary-os-endeavour/"><u>Decoding Project Fuchsia: Exploring Google's Covert and Revolutionary OS Endeavour</u></a></li>
<li><a href="https://some-skills.techidaily.com/discover-key-answers-in-todays-nyt-puzzle-challenge-august-21-connect-the-dots-with-hint-437/"><u>Discover Key Answers in Today's NYT Puzzle Challenge - August 21, Connect the Dots with Hint #437!</u></a></li>
<li><a href="https://some-skills.techidaily.com/discover-more-with-google-lens-and-look-up-images-instantly-introducing-learn-about-this-photo/"><u>Discover More with Google Lens & Look Up Images Instantly - Introducing 'Learn About This Photo'</u></a></li>
<li><a href="https://easy-unlock-android.techidaily.com/everything-you-need-to-know-about-lock-screen-settings-on-your-oneplus-ace-2v-by-drfone-android/"><u>Everything You Need to Know about Lock Screen Settings on your OnePlus Ace 2V</u></a></li>
<li><a href="https://program-issues.techidaily.com/fixing-the-issue-god-of-war-pc-version-suddenly-crashes/"><u>Fixing the Issue: God of War PC Version Suddenly Crashes</u></a></li>
</ul></div>

