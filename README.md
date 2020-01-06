# friend-finder
Friend-Matching App built with node.js, express routing, and sentiment AFINN scores:

https://monkeylearn.com/sentiment-analysis/

For the bootcamp I'm currently in, we wanted to create a friend-finding/'dating' app 
built with radio buttons, scored by absolute difference. 

I built the skeleton of the app asking ridiculous questions. As entertaining as that was for me,
I decided that perhaps my teachers would prefer something a bit more technical. So I started looking up
an empirical list of the best questions for performing a brief psychological assessment. Finding contradictory 
answers, and having no real way of coding a 1-5 scale as answers to these questions, anyhow, I decided
to turn the model on its head. A page that kept coming up was: 

https://www.psychologytoday.com/us/blog/fulfillment-any-age/201304/top-10-list-psychology-s-big-questions-and-the-answers

Finding these questions a bit more interesting than your average cambridge-analytica-backed survey, 
I thought that maybe I would use something more sophisticated to perform the assessment. So I found 
and NPM module called Sentiment, that performs a very basic sentiment analysis on input text: 

https://www.npmjs.com/package/sentiment

Using the AFINN wordlist, it assigns each word a score, + or -, being respectively 'positive' or 'negative'.
Many nouns have no score at all, but many verbs and adjectives score diversely! This allows you to calculate a cumulative AFINN score. 
This score is what I used to match the nearest scoring 'friend' with a JS reduce function found here: 

https://stackoverflow.com/questions/8584902/get-closest-number-out-of-array

It would be cool to have a social network that actually started from the perspective of a psychological assessment
(ideally the assessments would be blinded), rather than it being the dystopian outcome of them. 




