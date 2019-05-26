quotes = [
    "\"Hard work beats talent when talent doesn't work hard.\" - Tim Notke",
    "\"The harder the battle, the sweeter the victory.\" - Les Brown",
    "\"Never say never because limits, like fears, are often just an illusion.\" - Michael Jordan",
    "\"You miss 100% of the shots you don't take.\" - Wayne Gretzky",
    "\"Winning isn't everything, but wanting to win is.\" - Vince Lombardi",
    "\"There may be people that have more talent than you, but there's no excuse for anyone to work harder than you do.\" - Derek Jeter",
    "\"Self-belief and hard work will always earn you success.\" - Virat Kohli",
    "\"Never buy gold, simply earn it.\" - Mary Kom",
    "\"Hard work, will power and dedication. For a man with these qualities, sky is the limit.\" - Milkha Singh",
    "\"A champion is someone who gets up when he can't.\" - Jack Dempsey",
    "\"Only he who can see the invisible can do the impossible.\" - Frank L. Gaines",
    "\"A trophy carries dust. Memories last forever.\" - Mary Lou Retton",
    "\"An athlete cannot run with money in his pockets. He must run with hope in his heart and dreams in his head.\" - Emil Zatopek",
    "\"When you've got something to prove, there's nothing greater than a challenge.\" - Terry Bradshaw",
    "\"Gold medals aren't really made of gold. They're made of sweat, determination, and a hard-to-find alloy called guts.\" - Dan Gable",
    "\"Never give up! Failure and rejection are only the first step to succeeding.\" - Jim Valvano",
    "\"There are only two options regarding commitment. You're either IN or you're OUT. There is no such thing as life in-between.\" - Pat Riley",
    "\"I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'\" - Muhammad Ali",
    "\"Adversity cause some men to break; others to break records.\" - William A. Ward",
    "\"The will to win is important, but the will to prepare is vital.\" - Joe Paterno",
    "\"The more you dream, the farther you get.\" - Michael Phelps",
    "\"Push yourself again and again. Don't give an inch until the final buzzer sounds.\" - Larry Bird",
    "\"The road to Easy Street goes through the sewer.\" - John Madden",
    "\"Sports serve society by providing vivid examples of excellence.\" - George F. Will",
    "\"Persistence can change failure into extraordinary achievement.\" - Matt Biondi",
    "\"The difference between the impossible and the possible lies in a person's determination.\" - Tommy Lasorda",
]

quoteId = Math.floor(Math.random() * quotes.length);
$(document).ready(function() {
    $("#q").html(quotes[quoteId]);
    $("#div3").fadeIn(4000);
    setInterval(() => {
        $("#div3").fadeToggle(4000);
    }, 4000);
    setInterval(() => {
        changeQuote();
    }, 8000)
});

function changeQuote() {
    quoteId = Math.floor(Math.random() * quotes.length);
    $("#q").html(quotes[quoteId]);
}