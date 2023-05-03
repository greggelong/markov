Markov text generation following the Danial Shiffman's Coding Train Coding challenge
number 42

it really works well for generating texts with ngrams.  

a smaller order like 2 produces English like nonsense

an order of 3 will produce some pretty readable original text with some interesting portmanteaux

different texts will produce better or worse results by moving the  ngram order from 3 to 4

for example I am using the Allen Ginsberg poem Howl.  The first part produces nicer readable variations using ngram 3

but the second part about Moloch produces better results with an ngram of 4

It is also important to consider the start of the generative text

Here I am only using the start of the seed text with whatever order length

or a ngram I am sure the seed text has such as "the"

(javascript) ```

let currentGram =txt.substring(0,order);
let currentGram ="the"
```